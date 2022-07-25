---
title: <span>Making an app with <strong>Kivy</strong></span>
description: We tried to make an Android app with Kivy and we describe our experience, highlighting the strengths and weaknesses of the framework.
author: Gioele Crispo, Stefania Avallone
img: /blog/making-an-app-with-kivy/_index.jpg
alt: Android App with Kivy 
tags: 
  - android
  - python
  - devops
createdAt: 2022-02-16T13:15:20.516Z
updatedAt: 2022-02-16T13:15:20.516Z
---

# Making an App with Kivy

<br/>

+ Introduction 
+ What is Kivy
+ What we did and obtained
+ Kivy's **Pros** and **Cons**
+ Conclusions

<br/>

## Introduction
Recently, I helped my girlfriend to make **_Kaboo_**, a word game in which multiple 
teams challenge each other at how many words they can guess. Yes, it is very similar 
to the well known "Taboo", but it has nothing to do with it. The peculiarity is 
that it is an Android app entirely developed in Python, through Kivy, a very 
interesting multi-platform framework. This post tells about our experience in using 
this framework, highlighting its strengths and weaknesses, in relation to our needs.
It is published on the <a href="https://play.google.com/store/apps/details?id=org.kames.kaboo&hl=en_US&gl=US">Play Store</a> 
(give us good reviews! 😉) and below you will find a presentation video.

<div class="blog-video-container" style="text-align:center">
<iframe class="blog-video" src="https://www.youtube.com/embed/qr9I3LjdkSw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

<br></br>

</div>

<br/>

## What is Kivy
Kivy is a multi-platform framework for building graphical user interfaces, in a simple and
intuitive way using Python.

<a href="https://kivy.org/#home">Kivy's website</a> says it runs on Linux, Windows, OS X, Android, iOS, and Raspberry Pi, using 
pretty much the same code. Natively supports most of the inputs, protocols and devices, 
including WM_Touch, WM_Pen, Mac OS X Trackpad eMagic Mouse, Mtdev, Linux Kernel HID, TUIO.

The framework immediately struck us because it is very promising, it has participated in 
several editions of the Google Summit of Code and above all it seems easy to use. 
It's not difficult to find many examples of well-made apps online using Kivy, 
including an app to generate and edit PDFs and a Monopoly clone.

<br/>

## What we did and obtained
We chose to develop a game that was not in 3D, that did not require excessive logic and that
was completely offline to break down the complexity and focus on studying the framework. 
The goal was to understand the potential of Kivy and quickly target the publication on the 
Play Store.
For several reasons, we have decided to limit publication to the Google store only; we 
anticipate that the reasons are not related to money (Google 25 € once, Apple 100 € every 
year), but depend on the compatibility of the framework and some tools we used.

One of the requirements we set ourselves was that the app has to be aesthetically pleasing and 
that it has to be useful for bringing people together and making them feel good together after the
pandemic period. My girlfriend and I had a lot of fun on the phone trying to make each other
guess words and we used this method to learn new languages as well. It seemed a good idea to 
develop this game that gave us joy and laughter and make it free in the 
Play Store.

### Building an Android package
The development of the app was not at all easy and brought more unexpected events, which 
caused the publication to be postponed.
As a working method, we like to immediately understand if things are feasible and then 
think about perfecting everything. So, right from the start we focused on understanding 
how it was possible to build an Android app through Kivy.
There is a tool, called `Buildozer`, which promises builds on all mobile platforms via a handy 
configuration file, the `buildozer.spec`. In fact, it is a wrapper over the `python-for-android` 
and `kivy-ios` libraries, and aims to make them easier to use. Well, to our detriment, we 
have found that things are never so simple. In fact, for the publication on the Play Store, 
from August 2021 the .aab format is required, which is not officially supported by
`python-for-android`.
Through online research it emerged that the functionality has been implemented only in a
development branch of `python-for-android`; therefore we had to make several changes to the
`buildozer.spec` and various tests before getting a working build. For this we have to say 
thanks to so many people who have contributed on StackOverflow and Reddit and have helped us, 
piece by piece, to solve this complicated puzzle.

Furthermore, buildozer only runs on Linux and, having only PCs with Windows available, we 
had to set up docker and WSL to build an Android app and test the application on our 
smartphones. This exploration and testing phase took a long time. Firstly, because the build 
on WSL was very slow and the build process tainted the environment giving errors. The docker 
build on Windows is also slow, but it does allow us to have a repeatable process. We set up 
a CI / CD pipeline that literally saved our lives. For this we have to say thanks to 
`ArtemSBulgakov` who made this [Action on GitHub](https://github.com/marketplace/actions/buildozer-action), 
which only supports Android. We don't know why, but the build on Github is much faster and 
in just 12 minutes it allows us to have an apk ready to be tested on our Android devices.
These activities took more than a month, counting that we could only work in certain windows 
of our free time.

### Ads with Google AdMob
As a secondary requirement, we have decided to include advertising as well. It is not 
invasive, the goal was to familiarize with the Google AdMob platform. To do this,
we have seen that the `Kivmob` [library](https://github.com/MichaelStott/KivMob) is simple 
and intuitive. It works as a wrapper on Android and iOS; however currently the methods are only 
implemented for the Android interface.
To test the functioning of the library it was therefore necessary to be able to test on 
Android.


### Kivy benefits
With these issues resolved, we focused on the development of the actual game. Regarding 
flexibility, extensibility and simplicity, Kivy has nothing to envy to more famous frameworks 
and we must admit that it surprised us a lot from these points of view.
In fact, it was quick and easy to set up our app pages. We had to explore the `kivy` and 
`kivymd` documentation a bit to understand how to use widgets and interact with core 
features, but then the path was downhill. Building custom widgets isn't difficult at all, 
and the **KV language** works fairly well.
Citing from its documentation:

<p><i>The KV language, sometimes called kvlang or the kivy language, allows you to create your
widget tree in a declarative way and to bind widget properties to each other or to 
callbacks in a natural manner. It allows for very fast prototypes and agile changes 
to your UI. It also facilitates separating the logic of your application and its User 
Interface.</i></p>

We can confirm that kv language is very powerful, allows hot-reloading and it 
succeeds perfectly in its purposes. The result we got is the following:

<div style="text-align:center">
<img src="/blog/making-an-app-with-kivy/kaboo.png" alt="kaboo" width="80%"/> 

<span style="font-size: 12px;">Fig. 1. Screenshots of the main pages of the app.</i></a></span>
<br>
</div>

<br>

However, in other aspects Kivy is still a bit immature. Let's take audio as an example.
A respectable game must have a good soundtrack and the ability to mute for anyone who 
doesn't like it 😂.

### Sounds
Kivy only offers a class called `SoundLoader`, which allows you to load an audio file and play 
it. Instead, a SoundManager is missing, which could manage all audio files together and 
implement features such as muting all audio simultaneously.
To do this, therefore, we had to implement a rudimentary SoundManager and we built a wrapper 
over the SoundLoader class. We also noticed that loading audio files (and all resources in 
general) blocks the main thread and causes a significant slowdown in loading performance.
We couldn't figure out how to avoid this behaviour and make the loading asynchronous or 
purely multithreaded. There is a library for asynchronous execution, named `asynckivy`, but 
we don't know how to integrate it with resource loading. We are not framework experts
and are probably ignoring something. Take a look at the [GitHub code](https://github.com/stefaniavallone/kaboo), 
and please tell us how to do it better.

### Internationalization
Another thing we thought of doing was providing the app in English and in Italian, as well, 
to let our friends play, who, like us, are passionate about this game.
We have been looking for a long time how to introduce internationalization in Kivy. We 
found that Python does not support it natively. You have to use a GNU tool called `xgettext` 
(and its python wrapper, `pygettext`) and then follow several manual steps before you can have 
a working example. Furthermore, everything is complicated by the fact that the strings in
a Kivy app must be sensitive to language changes, without particular drawbacks.
There is no official documentation about it, but we found a 
[very interesting blog on internationalization in Python](https://phrase.com/blog/posts/translate-python-gnu-gettext/) 
and a [working example on Kivy](https://github.com/tito/kivy-gettext-example). 
The latter was particularly illuminating; however, as described in its github repo, it only 
works for strings in KV files and not for widgets that are created dynamically. 
For these elements, such as Dialog and Modals, it is not possible to "cache" them, that is 
to create them once and show them only when needed, but it is necessary to completely recreate 
the component, with performance drops.

### App logic
The logic of the game is all in all simple and did not cause us any particular problems. We had
to implement a shared status to be able to pass information from one screen to another in our Kivy app.
We were surprised that Kivy does not provide state management tools or libraries, such as 
Redux or Vuex, as in the case with modern JavaScript frameworks.
The version we have implemented is simple and suitable only for our purposes, it is by no 
means comparable to those provided by the JS counterpart.

### Final thoughts
Finally, the last part of the development was dedicated to improving the loading times of the assets. 
We have achieved this by reducing the size of the files as much as possible, because we have already 
said we have not been able to parallelize or make the uploads asynchronous.

In conclusion, designing, implementing, packaging and optimizing this app took us about 2 and a half 
months, clearly working only in our free time (about 2 hours a day).
All in all, we have to say that it's a great result and Kivy is great for prototyping apps. 
So many things remain unexplored: we have not included any features that directly use the smartphone 
hardware such as vibration or flashlight, however, there are examples on the internet and it seems 
easy to implement.

If today we were asked to implement a test app or a proof of concept, we will certainly evaluate the 
use of Kivy, which can potentially run anywhere (even on Windows without emulators), but it is not 
and cannot be comparable to a native solution. 

<br/>

## Kivy's Pros and Cons
For what we have done and how we have done it, we can say **Kivy is a great framework**, 
although it is still immature. In this section, we want to focus on its advantages and 
disadvantages based on what our needs were.
We reiterate that we have developed a simple game, and the difficulties / facilities 
we have found using this tool may not apply to other people developing different apps.

Its main advantages are:
- **it is based on Python**, which makes it simple and intuitive; after a little 
  time of learning the mechanics of the framework, it is easy to write the entire 
  software structure quickly.
- **it is powerful and extensible**: through inheritance it is easy to extend or
  customize widgets or build different behaviors to add to predefined widgets.
- **it has great animation mechanism**: creating an animation in Kivy is very easy 
  and super intuitive; no ui framework we have tried allows the same flexibility;
- **it is multi-platform**: with almost the same code it is possible to obtain the 
  same behavior on different platforms; this is a great plus, because it allows you to 
  prototype quickly and immediately start internal tests. However, cross-platform 
  solutions are rarely comparable to native solutions, both in terms of performance 
  and functionality, so we consider the reasoning valid only for prototypes.

<br/>

The difficulties and shortcomings we have found are the following:
- **lack of an _Audio Manager_**: Kivy only provides the SoundLoader interface, so we 
  had to build a rudimentary audio manager to mutate all the audio at the same time;
- **lack of an _Internationalization Manager_**: Kivy does not provide an internationalization
  mechanism (although this is a problem that affects more Python than the framework itself);
- **lack of _Shared Status_**: Kivy does not appear to provide a precise guideline on 
  how to store and pass information from one screen to another. What we mean is the 
  lack of a "Redux" or "Vuex" type libraries or tools that you have in Angular / React 
  or Vuejs and derivatives. Sure, Python provides several ways to share information 
  between elements, but we wanted something more integrated with the framework. 
- **Not really fast**. To have a good loading performance it is necessary to sip every single 
  Kb from photos, videos and audio. We desired to have Kivy made it possible (or easier - 
  if you know how to do it) the simultaneous loading of multiple resources, without blocking 
  the main thread. Furthermore, on Android devices, to run Kivy it is needed to install a 
  complete Python distribution and executing python code that, as we know, is very slow.
- **Not really ready to be cross-platform**. `buildozer` and `python-for-android `
  do their job properly; it is not always easy to define the process to build an `apk` or
  `aab`, but once set up, the process works correctly in almost all cases. However, the 
  result is not always the one expected: on some smartphones and tablets there are no display 
  problems, while on others a white box appears at the top of the screen. It is clearly a
  problem due to resizing, in fact after a reload of the ui, the app is rendered 
  correctly (Fig. 3). However, on all devices there are some graphical glitches in the loading 
  phase (Fig. 2). Perhaps, they are due to the fact that we are using a dev branch of `python-for-android`,
  but it is unfortunately necessary to allow the production of a package in `.aab` format, 
  as discussed above.

<br/>
<div class='blog-row' style="text-align:center;">
<div class='blog-two-column'>
<img src="/blog/making-an-app-with-kivy/glitches.gif" alt="glitches" width="50%"/> 

<span style="font-size: 12px;  margin: 10px;">Fig.2. Window resizing glitches in app loading on Android.</span>
</div>
<div class='blog-two-column'>
<img src="/blog/making-an-app-with-kivy/resize-glitch.gif" alt="resize-glitch" width="65%"/> 

<span style="font-size: 12px; margin: 10px;">Fig.3. Screen sizing problems. At the first loading the app has a white box on the top of the screen; however, forcing a reload (by going to the app overview and returning to Kaboo) a screen resizing is performed and the box disappears.</span>
<br>
</div>

</div>



<br/>

## Conclusions
Kivy is a really nice framework, with a lot of potential.
On modern phones, tablets and PCs, its use is pleasant; with the right precautions from a 
software point of view, there are no drops in performance and the user experience is fluid 
and satisfying.

However, we don't feel like it is suitable for more "production-ready" use. There are several 
things that should be perfected and others that should be natively endured.

All these aspects have been partially overcome with workarounds found online or by skipping 
the problem for the moment.

Surely, most of the drawbacks we encountered in the development of this application are due 
to the fact that we do not have a thorough knowledge of the framework. Our code is
published on <a href="https://github.com/stefaniavallone/kaboo">Github</a>, so if we have 
made some mistakes, please let us know by writing to the emails crispogioele@gmail.com 
and stefaniaavallone3@gmail.com.
