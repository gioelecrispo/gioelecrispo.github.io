---
title: <span>A Computer Vision based<strong> Bed Fall Detection</strong> algorithm</span>
description: I designed a home video surveillance system and a CV based Bed Fall Detection feature. I used a Raspberry Pi 3 as a computation and orchestration module.
author: Gioele Crispo
img: /blog/a-computer-vision-based-bed-fall-detection-algorithm/_index.jpg
alt: bed-fall-detection
tags: 
  - computer-vision
  - python
createdAt: 2022-07-17T11:26:40.123Z
updatedAt: 2022-07-27T11:26:40.123Z
---

# A Computer Vision based Bed Fall Detection algorithm

<br/>

+ Introduction
+ System setup
+ Why Bed Fall Detection 
+ How I implemented it
+ Room for improvements
+ Conclusions

<br/>

## Introduction

I was asked to build a home surveillance system to monitor two elderly people and immediately 
alert someone if particular types of events occur.
In this post, I'll tell you how I implemented the system; I added an important artificial 
intelligence feature, the **Bed Fall Detection**, not natively supported by the cameras.


## System setup
After a thorough research on the web, I decided to buy three TP-Link Tapo C200s and arrange 
them in three strategic points of the house:
- in front of the entrance door (overlooking the living room);
- in the kitchen, the most lived-in area of the house;
- in the bedroom, right above the bed, so to monitor them even while sleeping.
  
<br>
<div class='blog-row' style="text-align:center;">
<div style="text-align:center">
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/bedfall_elderly_house.png" alt="house" width="100%"/>
<span style="font-size: 12px;">a. 2D apartment plan </span>
<br>
</div>
</div>

<br></br>
<div class='blog-row' style="text-align:center; justify-content: center">
<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/living.png" alt="living" width="95%"/>
<span style="font-size: 12px;  margin: 10px;">b. Living.</span>
</div>

<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/kitchen.png" alt="kitchen" width="95%"/>
<span style="font-size: 12px; margin: 10px;">c. Kitchen.</span>
<br>
</div>
<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/bedroom.png" alt="bedroom" width="95%"/> 

<span style="font-size: 12px; margin: 10px;">d. Bedroom.</span>
<br>
</div>

<div class='blog-row'>
<span style="font-size: 12px; margin: auto">Fig.1. Arrangement of the cameras in the house</span>
</div>

</div>


The choice of TP-Link Tapo C200 was very congenial, because they have a low cost 
(about € 100 for all three) and many interesting features:
- **night vision** up to 8 meters;
- 1080p resolution;
- **horizontal movement up to 360° and vertical movement up to 114°**;
- motion sensor on which to enable notifications;
- integrated acoustic and light alarm;
- two-way audio to communicate with anyone near the camera;
- possibility to store up to 15 days of video on a microSD;
- integration with Alexa and Google Assistant.
\
Anyway, the most important thing is that **there is an (unofficial) SDK, called PyTapo**, 
available on Pypi at [https://pypi.org/project/pytapo](https://pypi.org/project/pytapo), 
that allows to interact with the webcams, take the video stream and process it.  

Through a brief configuration from the dedicated app, I connected the three webcams to the
Wi-Fi network. I set up a **Raspberry Pi 3** near the modem (exactly in the center of the house) 
to capture and process the video stream of the webcams in real-time.
So I wrote a program in Python which runs on the Raspberry and, through the PyTapo library, 
connects to the webcams, then performs operations on the video streams.

Well, let's go on to describe why I implemented a custom Fall Bed Detection and how I did it.

## Why Bed Fall Detection
**Bed Fall Detection** is a very important feature, especially for the elderly or infirm who have 
neurological or motor problems: in case of falling out of bed, these people either do not realize 
what has happened or are unable to move and call for help in a autonomous manner.
Therefore, having the ability to monitor these people at night through automatic systems makes it 
possible to relieve assistance from working 24 hours a day.

### The requirement
My order picker is a man of around 60 who has to assist his parents, two semi-self-sufficient elderly 
people. He asked me to create a video surveillance system to have the possibility of monitoring the 
elderly even when he was not with them and with the possibility of being notified in some specific cases.
In particular, the most important need was to be able to go home to sleep while staying updated on 
the status and be notified instantly in case of falling out of bed.

### The Challenge and other implementations 
The TP-Link Tapo C200 have different alerting capabilities, mainly related to motion detection.
More expensive cameras offer other more complex automatic detection and alerting features, but 
generally finding an implementation of Bed Fall Detection is rare, because it must be customized 
in relation to the environment and the bed on which it has to work.

In fact, the most common implementations of Bed Fall Detection **rely on presence sensors** at 
the foot of the bed or on **motion sensors** (or a combination of the two categories) and some logic 
of event evaluation. Fig. 2. shows how are the most used sensor types in this task.

<div style="text-align:center;">
<div>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/state-of-the-art-bed-fall-detection.jpg" alt="bed-sensors" width="50%"/>

<span style="font-size: 12px;">Fig. 2. Example of a Bed Fall Detection implementation based on bed sensors.</span>
<br>

</div>
</div>
<br>

The paper [Bed-Fall Detection and Prediction: A Generic Classification and Review of Bed-Fall Related System](https://ieeexplore.ieee.org/document/9257376), 
published on IEEE Sensors Journal 21 (2021), by Ibrahim, Ali, Kabalan Chaccour, Amir Hajjam el 
Hassani and Emmanuel Andres, tracks well the state-of-the-art of this kind of systems. 


## How I implemented it
The Bed Fall Detection algorithm I developed is based solely on video images.
Its final version is composed of six main macro steps:
1. **Correct positioning of the camera** with respect to the bed;
2. **_Normalization_ of the image** with respect to the focus point and lens parameters;
3. **Identification of the Region of Interest (RoI)** next to the bed to be monitored;
4. **Evaluation of the object area with respect to the RoI**, through background subtraction
5. **Identification of objects types in the RoI via YOLO** if the previous step confirmed the presence of a foreign object;
6. **Confirmation of bed fall detection** if the object is a person who remains in the RoI for more than a certain time interval.

\
Let me describe how I came to set up the algorithm in this way, going into the details of each step.
<br>

### Correct positioning of the camera
First, I tried to understand how to best position the camera to simplify the algorithm's work.
Initially, I placed the camera above the bed, centrally, so as to also capture the sides, left and 
right of the bed.
I then took several photos, simulating falls from the bed, in order to understand how large the 
area of interest to monitor was. I adjusted the position of the camera accordingly, until I got good 
coverage of the area and made sure that the scene focused only on the bed and the side areas.

### Normalization of the image
Generally, video surveillance cameras have a wide angle view, so the images are distorted, so computer vision algorithm
and neural networks may have some difficulty in recognizing objects that are not in a format for which this algorithm or 
network has been trained.
So, by calculating the point and the focal distance, knowing the parameters of the lens and the height
at which the camera was positioned, I applied a correction in order to have the image as if it were captured 
"from the front". 

Thus, I transformed the original image into a "normalized" one; I made a crop of the image and a warp transformation, 
based on the technical specifications of the webcam and its position with respect to the bed. 
To do this, I used the OpenCV functions `cv2.getPerspectiveTransform` and `cv2.warpPerspective`,
as shown in the snippet below.


```python
import cv2 
import numpy as np

def adjust_perspective(img):
    rows, cols, ch = img.shape    
    # these parameters depends on the camera properties and the position of it with respect to the bed
    # pts1 coords are remapped on the pts2 coords 
    pts1 = np.float32([ [x1, y2], [x2, y2], [x1, y1], [x2, y1] ]) 
    pts2 = np.float32([ [x1_w, y2_w], [x2_w, y2_w], [x1_w, y1_w], [x2_w, y1_w] ])
    
    M = cv2.getPerspectiveTransform(pts1, pts2)
    dst = cv2.warpPerspective(img, M, (cols, rows))
    return dst
```

### Identification of the Region of Interest (RoI)
In this way, I was able to draw the Region of Intestest (RoI) to be monitored aside to the bed, 
as shown in Fig. 3.

<br>

<div class='blog-row' style="text-align:center; justify-content: center">
<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/bedfall_original2.jpg" alt="bedfall_original" width="95%"/>
<span style="font-size: 12px;  margin: 10px;">a. Original image.</span>
</div>

<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/bedfall_adjusted.jpg" alt="bedfall_adjusted" width="95%"/>
<span style="font-size: 12px; margin: 10px;">b. Image after cropping and warp transformation computed on camera parameters.</span>
<br>
</div>
<div class='blog-three-column'>
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/bedfall_adjusted_with_roi.jpg" alt="bedfall_adjusted_with_roi" width="95%"/> 

<span style="font-size: 12px; margin: 10px;">c. Image with Regions of Interest (RoI) aside of the bed.</span>
<br>
</div>
</div>

<div class='blog-row' style="text-align:center; justify-content: center">
<span style="font-size: 12px; margin: auto">Fig.3. An image captured from the camera put on the bed (a) and the transformations made to highlight the areas aside of the bed to detect bed falls (b), (c).</span>
</div>



<br>

### Evaluation of the object area with respect to the RoI
Got the RoIs, the next step was to use background subtraction techniques to understand the elements that entered 
the areas of interest, that is, those on the sides of the bed.
I made sure that the RoI area was large enough to hold the outline of a person lying down.
However, I thought not to make the quadrangle area excessively large, in order to reduce the possibility to have more 
than one object or have extraneous things in the area. 


On this basis, I evaluate the ratio of the area occupied by the object in relation to the area of the RoI and make 
decisions accordingly. In fact, if the ratio is very small, we can deduce that the object is 
not a person or it is not a person lying down (thus falling out of bed); on the other hand, if the ratio is higher 
than 60%, with a certain probability it is a person lying on the ground.

<div class='blog-row' style="text-align:center; justify-content: center">
<div  style="text-align:center">
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/mask_and_area_calculation.png" alt="mask_and_area_calculation" width="90%"/>
<br>
</div>
<span style="font-size: 12px;">Fig. 4. Evaluation of object area with respect to the RoI (Area Ratio checking step)</span>
</div>
<br>

Anyway, this assumption is not sufficient to determine a bed fall.


### Identification of objects types in the RoI via YOLO
In fact, there are many cases in which there are objects near the bed that occupy more than the 60% of the area of 
the RoI, for example a carpet placed temporarily next to the bed, or sheets and blankets.

So, I added one more step. I used YOLOv5 to do real-time object detection and be sure that the object 
inside the area of interest was actually a person. YOLOv5 ([more details here](https://github.com/ultralytics/yolov5)) 
is a family of CNN networks for object detection that works extremely well, is fast, can be used in 
real-time even on hardware little performance like that of a Raspberry Pi 3. Furthermore, it can be 
converted into ONNX format and used directly in OpenCV: in this way, in addition to being more 
performing, it is also very simple to use and goes very well with computer vision and image processing.

YOLOv5 is a very performing network, since it can easily identify both people facing and facing back, as shown in Fig. 5.


<div class='blog-row' style="text-align:center; justify-content: center">
<div  style="text-align:center">
<img src="blog/a-computer-vision-based-bed-fall-detection-algorithm/yolo_detection.png" alt="mask_and_area_calculation" width="90%"/>
<br>
</div>
<span style="font-size: 12px;">Fig. 5. YOLOv5 detection on a person from behind.</span>
</div>
<br>


### Confirmation of bed fall detection
In some cases, there may actually be a person lying next to the bed, perhaps temporarily, to do some
cleaning for example. To limit these situations, I have set that the algorithm to activate the alarm
must have a certain confidence in detecting a person lying down for a certain period of time, for
example 30 or 60 seconds. People who perform cleaning rarely stay in the same position for many seconds
and this increases the precision of the detection.



### Results
The use of YOLO, area ration checking and the temporary confirmation has greatly improved the accuracy of Bed Fall Detection, 
calculated on a test dataset consisting of 200 falls from the bed that I recorded specifically to evaluate 
the performance of the algorithm.
The latter, in fact, works very well and achieves **an accuracy of about 87%**.
The combination of the first two steps improves a lot the precision, because while YOLO 
recognizes people on a clean and easy-to-process image, the area ratio check step confirms the detection.
In fact, it may happen that the person is standing next to the bed and that YOLO is able 
to recognize him (even if it is very difficult because due to how high the camera is placed, the image 
of a person standing is very distorted and not always the face is recognizable). However, the area 
occupied by a standing person is certainly smaller than that occupied by a person lying down and 
therefore the prediction is discarded by the area ratio checking step.


## Room for improvements
This system is based only on the use of cameras and computer vision algorithms.
The first version of the algorithm, without the use of YOLOv5, had good recall and low precision; the use 
of YOLO allowed to increase the precision, significantly lowering the false positives and achieving a 
good result.
However, the criticalities of this system are mainly two:

1. sometimes **false negatives** are found;
2. the **control area is limited to the lateral areas closest to the bed**.
<br>

### False negatives
The version of YOLOv5 currently in use on the system is the "small" one, fast but not extremely accurate. 
The tradeoff is also given by the computation capabilities of the Raspberry Pi 3, which are not very high. 
Using a more powerful version would reduce the frames that can be processed per second, making predictions
unstable.
Furthermore, the control step of the ratio of the occupied area to the RoI is based on assumptions that 
may not always be verified, such as in the case of children (who are smaller and take up less space). 
Here, YOLO could be used to distinguish the adult from the child and make different decisions; however, 
a more powerful version of YOLO is also required in this case.
One solution could be to move the architecture to the Cloud, perhaps relying on protocol-based solutions 
such as MQTT to act in real-time and have all the necessary power available.

### Management of the Region of Interest
The regions of interest were defined empirically and positioned exactly alongside the bed, in the area 
closest to it. In the event of a violent fall, the person may move a long way from the bed and the fall 
event may not be identified. Enlarging the Regions of Interest is not a good solution because clearly 
the logic of confirming the prediction should be rethought. A more effective method would certainly be 
to monitor the bed and understand how the person "leaves" the area identified as bed.
This computation should be done in parallel and therefore a higher power is required to ensure good 
performance.

Finally, there is another point to take into consideration: the regions of interest must be 
appropriately calibrated according to the characteristics of the camera, the height at which it is 
positioned and the size of the bed. This is not a trivial operation, and I have spent quite some time 
getting the configuration right.
In fact, this makes it difficult to sell Bed Fall Detection as an out-of-the-box feature of video 
surveillance cameras. Nevertheless, the solution is very suitable for custom installations, for example 
in nursing homes or hospitals. Perhaps, by specifying well in the instructions the reference measurements 
for the positioning of the camera, the functionality could be brought even to medium-low range cameras 
intended for a wider audience.


## Conclusions
A video surveillance system can be very useful, especially in contexts where people are not 
self-sufficient. Very often, the cameras on the market already offer alarm and event detection 
features, but they are generic and almost never adapt well to the shape of the house or the 
context in which people live.
Therefore, having the ability to access and process the video stream is really a great thing 
and opens up many possibilities for customizing and improving the system, without spending a lot.

Today, I have developed the Bed Fall Detection functionality for my customer, but tomorrow I 
may have to develop something even more sophisticated and useful for home surveillance. Having 
a reference architecture is certainly a very important step.

**By moving to a Cloud-based implementation, the possibilities are almost endless**: combining video 
streams and sensor data as inputs to complex deep learning algorithms is no longer a problem and 
becomes within everyone's reach.
