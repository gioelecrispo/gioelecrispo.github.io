---
title: <span>The importance of <strong>Semantics</strong> - Text Chunks of better quality</span>
description: I have used several text chunkers based on token counting, but no one satisfied me... therefore I built my own one. Discover how I managed to have <b>better quality text chunks</b>! 
author: Gioele Crispo
img: /blog/the-importance-of-semantics-text-chunks-of-better-quality/_index.jpg
alt: Text chunks
tags: 
  - nlp
  - python
  - artificial-intelligence
createdAt: 2023-07-11T11:11:20.000Z
updatedAt: 2022-07-11T11:11:20.000Z
---

# The importance of Semantics: Text Chunks of better quality

<br/>

+ Introduction 
+ What is Chunking
+ **Chunkipy**: library and algorithm description
+ Comparison with other libraries
+ Conclusions

<br/>

## Introduction
In the realm of natural language processing, quite often there is the need to break down text into smaller, 
more manageable pieces. This becomes particularly crucial when dealing with lengthy documents. 
In fact, neural networks typically have an **input size limit defined by the number of tokens**.
Clearly, better the quality of the text, better the results.
This becomes even more critical when working with less powerful networks like BERT, which lack the ability of error 
correction and sentence reconstruction seen in more complex models like ChatGPT.

Given this, rather than relying on token-based chunkers that merely divide at a predetermined token count, 
without consideration for semantic coherence, I tried to follow a different approach, designing my own algorithm.
The idea of developing a new personalized chunking algorithm came out from the difficulty of finding
the definitive algorithm which could meet all my needs.
Therefore, after writing it and verifying its validity, I decided to build a library, thinking that it could be useful to other people.

It leverages sentence segmentation models to construct 
text chunks with enhanced semantic meaning, ensuring readability and understanding.

I have the pleasure to introduce you `chunkipy`! Here you can find its:
 - [Pip page](https://pypi.org/project/chunkipy/)
 - [Github repository](https://github.com/gioelecrispo/chunkipy)
 
<br/>

Before to dive deep into the algorithm description, let's briefly introduce what chunking means. 

## What is Chunking
Chunking is the process of **breaking down a piece of text into smaller pieces**.

It is truly an easy concept, but with main implications for the downstream task one will apply later.

Lots of different techniques and approaches exist, for example:
 - **token-based chunkers**, that divide at a predetermined token count;
 - **separator-based or pattern-based chunkers**, that divide when a separator is found or pattern is verified;
 - **semantic-based chunkers**, that use neural networks to determine how and when to divide the text;
 - **hybrid chunkers**, that combine some or all of these techniques to get the best result.

<br> 
Naturally, the techniques that rely on neural networks are slower compared to the separator/pattern ones; for this reason, 
it is convenient to mix the strategies and get the best result possible.

`chunkipy` belongs to the latest category, using a neural network and some heuristic to preserve the semantic integrity of the content.


### Chunking: main applications
The importance of chunking becomes evident when considering its myriad applications. Let me introduce the two most relevant ones: 

#### Vector Search
One such application is **Vector Search**. By dividing text into chunks with coherent meanings, vector search 
engines can more effectively match user queries with relevant content. 
This not only enhances the accuracy of search results but also improves user experience. In fact, when a chunk is retrieved after a search,
the user can enjoy the reading of that piece of text without falling into incomplete sentences which could undermine the meaning. 

Furthermore, vector search benefits greatly from well-defined text chunks. 
Document representations constructed from these semantically meaningful segments can capture the essence of the content more accurately. 
This leads to improved clustering and similarity measures, enhancing the quality of information retrieval.

#### Named Entity Recognition
**Named Entity Recognition** (NER) is a critical task in natural language processing that involves identifying and classifying named entities
within a body of text. These entities can be anything from names of people, organizations, locations, dates, quantities, and more.
NER has gained immense importance in today's information-driven world.

With the proliferation of digital content across social media, news articles, research papers, and more, extracting 
structured information from unstructured text has become indispensable. NER enables automated systems to analyze and 
categorize vast amounts of data, facilitating information retrieval, knowledge extraction, and decision-making processes in various fields.

Therefore, **chunking plays a pivotal role in NER** and is fundamental for its accuracy and efficiency.

In fact, chunking assists NER by breaking down text into smaller, meaningful segments. 
When identifying named entities, it's crucial to consider the context in which these entities appear. 
By chunking text effectively, NER models can focus on smaller sections, thus improving their ability to recognize and 
classify named entities accurately within that specific context.
<br/>

## Chunkipy: library and algorithm description

The library offers some useful features:
- **Token estimation**: unlike many text chunking libraries, `chunkipy` offers the possibility of
  providing a token estimator function, in order to build the chunks taking into account the tokenizer
  that will use those chunks.
- **Split text into meaningful sentences**: in its default configuration, `chunkipy`,
  in creating the chunks, avoids cutting sentences, and always tries to have a complete and syntactically correct sentence.
  This is achieved through the use of the `stanza` library, which utilizes semantic models to cut text
  into meaningful sentences.
- **Smart Overlapping**: `chunkipy` offers the possibility to define an `overlap_percentage` and create overlapping chunks to
  preserve the context along chunks. The overlap also preserve sentences.
- **Flexibility in choosing split strategies**: Additionally, `chunkipy` offers complete flexibility
  in choosing how to split, allowing users to define their own text splitting function or choose from a list
  of pre-defined splitting strategies. I will deepen this point later.

<br>

### Installation and Usage
`chunkipy` can be installed through pip with the following command:

```bash
pip install chunkipy
```

The main class in `chunkipy` is `TextChunker`. You can use the default settings or specify custom parameters for the **chunk size**,
whether to split by **characters or tokens**, **overlap_percent** to define the overlapping percentage,
the **tokenizer function** to use (if `tokens` is set to `True`), and the list of **split strategies** to apply.
The method `chunk` gets a text as input and returns a list of chunks.

Below is an example of usage and chunks obtained with `chunkipy`. 
Note that it is a basic usage example, with the default tokenizator and splitting strategies.
The generated chunks are below 50 tokens length, as `chunk_size` is set to 50, and they overlap for no more of 30% (being `overlap_percent` = 0.3).
It is computed on the `chunk_size` value, therefore the overlap size is about 16 tokens.


```python
from chunkipy import TextChunker 
text_chunker = TextChunker(50, tokens=True, overlap_percent=0.3)

# Set up test input
text = "In this unit test, we are evaluating the overlapping functionality." \
       "This is a feature of the TextChunker class, which is important for a proper context keeping. The " \
       "goal is to ensure that overlapping chunks are generated correctly. For this purpose, we have chosen a " \
       "long text that exceeds 100 tokens. By setting the overlap_percent to 0.3, we expect the " \
       "generated chunks to have an overlap of approximately 30%. This will help us verify the effectiveness " \
       "of the overlapping feature. The TextChunker class should be able to handle this scenario and " \
       "produce the expected results. Let's proceed with running the test and asserting the generated chunks " \
       "for proper overlap. "

# Generate chunks with overlapping
chunks = text_chunker.chunk(text)

# Print the resulting chunks
for i, chunk in enumerate(chunks):
    print(f"Chunk {i + 1}: {chunk}")
```

This outputs:

```
Chunk 1: In this unit test, we are evaluating the overlapping functionality. This is a feature of the TextChunker class, which is important for a proper context keeping. The goal is to ensure that overlapping chunks are generated correctly. For this purpose, we have chosen a long text that exceeds 100 tokens.
Chunk 2: For this purpose, we have chosen a long text that exceeds 100 tokens. By setting the overlap_percent to 0.3, we expect the generated chunks to have an overlap of approximately 30%. This will help us verify the effectiveness of the overlapping feature.
Chunk 3: This will help us verify the effectiveness of the overlapping feature. The TextChunker class should be able to handle this scenario and produce the expected results. Let's proceed with running the test and asserting the generated chunks for proper overlap.
```

<br> 

From the obtained chunks, it is evident that no sentence is cut in the half; overlap is kept under the threshold limit and applied only if possible.
Also, the heuristic implemented makes sure to put as much text as possible in each chunk in order to lower the number of chunks generated.
It is really important when one cares about the cost of handling an enormous number of chunks, like I did in several project.


### Sentence Segmentation
At the core of this library lies the concept of **sentence segmentation**. By identifying natural sentence boundaries, 
the library ensures that chunks are constructed based on linguistic structure, enhancing semantic coherence.

The code is a function named `split_by_sentences` that takes a text input and aims to split it into individual sentences 
based on language detection using the `langdetect` library and sentence tokenization provided by the `stanza` library.
Here is the code:

```python
import stanza
from stanza import DownloadMethod
import langdetect

def split_by_sentences(text):
    lang = langdetect.detect(text)
    sentence_tokenizer = stanza.Pipeline(lang=lang, processors='tokenize', download_method=DownloadMethod.REUSE_RESOURCES)
    return [s.text + " " for s in sentence_tokenizer(text).sentences]
```

It is a straightforward function; but let's give a look to this line, the most interesting:
```python
sentence_tokenizer = stanza.Pipeline(lang=lang, processors='tokenize', download_method=DownloadMethod.REUSE_RESOURCES)
```
This code initializes a stanza pipeline specific to the detected language (lang) and it is configured to tokenize 
the text into sentences (processors='tokenize') using the specified language. The use of a language detector is
fundamental to correctly segment the text into sentences, respecting the peculiarities of the languages.  
The `DownloadMethod.REUSE_RESOURCES` ensures that previously downloaded resources are reused rather than redownloading them.


### Other Splitting Strategies and Recursive Adaptation

Beyond **sentence segmentation**, the library offers alternative splitting strategies. 
These strategies adapt recursively to the content's linguistic intricacies, ensuring the resulting chunks remain 
semantically relevant regardless of the text's complexity.

By default, `chunkipy` uses `stanza` are main text splitting method; however, if `stanza` produces
sentences with a number of tokens greater than the chunk size, other split strategies are used.
Here the list of predefined strategies, sorted by priority (the first one is executed first,
if the chunk of text is larger than the chunk size, it is further split using a lower priority
strategy).

| Priority | Name | Effect                                                               |
|:--------:| :--- |:---------------------------------------------------------------------|
|    0     | `split_by_sentences` | It uses `stanza` to split the text into meaningful sentences.        |
|    1     | `split_by_semicolon` | It splits the text using the semicolon and space `; `  as separator. |
|    2     | `split_by_colon` | It splits the text using the colon and space `: ` as separator.      |
|    3     | `split_by_comma` | It splits the text using the comma and space `, ` as separator.      |
|    4     | `split_by_word` | It splits the text using the space ` ` as separator.                 |

<br>

`Chunkipy` allows defining your own strategies, therefore you can design your custom chunkers, emphasizing and valuating
your business needs.

Here is an example on how one could define a different set of splitting strategies while creating the `TextChunker` class:

```python
from chunkipy import TextChunker

def split_by_arrow(text):
    return [t for t in text.split("->") if t != '' and ' ']

text = "This is a tokenized text -> with custom split strategy."

# Create a TextChunker object with custom split strategy
text_chunker = TextChunker(chunk_size=8, tokens=True,
                           split_strategies=[split_by_arrow])  # you can define more
print(text_chunker.chunk(text))
```

This outputs:

```
["This is a tokenized text", " with custom split strategy."]
```

### Define a custom tokenizer
By default, the tokenization used is the space ` ` separator, to count the words in a sentence.
If you are working with neural network, it makes sense to define and use that tokenizer to count the tokens.
You can define a custom tokenizer counter function by inheriting from the `TokenEstimator` class and overriding the
`estimate_tokens` like shown in the example below, designed for the `tiktoken` tokenizer.

```python
class OpenAITokenEstimator(TokenEstimator):

    def __init__(self, encoding_name):
        self.tokenizer = tiktoken.get_encoding(encoding_name)

    def estimate_tokens(self, text):
        return len(self.tokenizer.encode(text))
```

This class has to be passed as argument of the `TextChunker` constructor, as shown here:

```python
text_chunker = TextChunker(512, tokens=True, token_estimator=OpenAITokenEstimator())
```
<br>


### Chunks Building

The process of chunk building involves aggregating sentences with coherent meanings. 
This approach allows for more contextually aware chunks, improving overall readability and understanding.

This function, named `_build_chunks`, takes in `text_parts_and_counts` as input: it is a list of tuples containing text 
parts and their respective element counts. The function aims to construct chunks of text based on certain size constraints
(`chunk_size`). Let's give a look at the code:

```python
def _build_chunks(self, text_parts_and_counts):
    chunks = []

    chunk_element_count = 0
    chunk = []

    for text_part, element_count in text_parts_and_counts:
        if chunk_element_count + element_count <= self.chunk_size:
            # there is still space in the chunk, add the sentence and increase the counter
            chunk_element_count += element_count
            chunk.append(text_part)
        else:  
            # there is not enough space for another sentence in the chunk. 
            # chunk is formed and added to the chunks array; the new sentence is added
            # to the new chunk and the counter initialized again
            chunks.append("".join(chunk).strip())
            chunk_element_count = 0
            chunk = []
            
            chunk_element_count += element_count
            chunk += text_part
            
    chunks.append("".join(chunk).strip())
    return chunks
```

Here's a breakdown of what the function does:

1. **Initialization**: Initializes various variables, i.e.:
   - `chunks`, an empty list to store generated chunks, 
   - `chunk_element_count`, tracks the number of elements in the current chunk, 
   - `chunk`, represents the current chunk being formed,
   <br>

2. **Iterating Through Input**: It iterates through each tuple in `text_parts_and_counts`, which contains a text part and its associated count of elements.

3. **Chunk Formation**:
   - If adding the text from the current `text_part` to the existing chunk keeps the total element count within the specified `chunk_size`, it adds the `text_part` to the chunk.
   - If the addition of the current `text_part` causes the `chunk_element_count` to exceed `chunk_size`, it appends the constructed chunk (joining the text parts together) to the chunks list, resets the `chunk_element_count` and `chunk` variables, and continues forming new chunks.
   <br>
   
4. **Appending the Final Chunk**: After the loop ends, it appends the remaining contents of the chunk (if any) to the chunks list.
5. **Return**: Finally, it returns the list of constructed chunks.

<br> 

### Overlapping

To maintain context between adjacent chunks, a controlled overlapping technique is employed. 
This ensures that critical information is not lost due to arbitrary segment boundaries.

The system aims to ensure that the last text parts of each segment do not exceed the maximum token limit defined for overlap.
For example, if the `chunk_size` is set to 100 and the `overlap_percentage` is 0.1, the maximum number of overlapping tokens is 10.
Consequently, if there are sentences or text parts that fit within this token limit, they are added at the beginning of the next segment.
If not, they are skipped to maintain a good ratio between overlap and content.

The code for overlapping is handled in the `_build_chunks` function, which is updated as follows:

```python
def _build_chunks(self, text_parts_and_counts):
    chunks = []

    chunk_element_count = 0
    chunk = []
    overlap_count = 0         # keep track of how many tokens are in the overlapping section
    overlapping = deque()     # keep track of the overlapping sentences

    for text_part, element_count in text_parts_and_counts:
        if chunk_element_count + element_count <= self.chunk_size:
            chunk_element_count += element_count
            chunk.append(text_part)
            if self.overlap_size > 0:  # this code is executed only if overlapping is enabled
                while (overlap_count + element_count > self.overlap_size) and overlapping:
                    # while overlapping deque is not empty and its total token count (including the new element)
                    # is higher than the overlap_size, remove the first (i.e. the oldest) text part
                    _, first_overlapping_count = overlapping.popleft()
                    overlap_count -= first_overlapping_count
        else:
            chunks.append("".join(chunk).strip())
            chunk_element_count = 0
            chunk = []
            if self.overlap_size > 0:  # this code is executed only if overlapping is enabled
                # add the overlapping text to next chunk and reset the counter taking into account the overlapping too
                overlapping_text = "".join([t[0] for t in overlapping])
                chunk_element_count = overlap_count
                chunk = [overlapping_text]
                overlap_count = 0
                overlapping = deque()

            chunk_element_count += element_count
            chunk += text_part

        if element_count <= self.overlap_size:
            # add the element to the overlapping deque, if its total token count is under the limit
            overlap_count += element_count
            overlapping.append((text_part, element_count))

    chunks.append("".join(chunk).strip())
    return chunks
```

Two more variables are used and initialized:
   - `overlap_count`, keeps track of the count of overlapping elements,
   - `overlapping`, a deque to manage overlapping text parts).
   
<br>

It manages overlapping text parts based on the `overlap_size`.

When an `element_count` is less than or equal to the specified `overlap_size`, it keeps track of the overlapping elements
and manages the `overlap_count` accordingly.
Overlapping elements that exceed the `overlap_size` are removed from the beginning of the `overlapping` deque.
This is performed while iterating each tuple in `text_parts_and_counts` to keep the algorithm complexity linear with the input.

## Comparison with other libraries
`chunkipy` was built taking into consideration my own needs, not to compete with other libraries. However, the comparison comes out naturally, 
to justify why to build a library from the scratch instead of using one already built.
Many chunking libraries exist and all of them have their pros and cons, and as a consequence, it is barely impossible to compare them each other. 

Anyway, I would still mention `langchain`, which is widely used and often taken as reference for many engineers. 

### langchain
`langchain` is without any doubt a masterpiece. It is a solid library built by the NLP community to promote an easy 
use of cutting-edge technologies, making them available and straightforward for everyone.
Being focused on NLP, one of its core feature is indeed **text chunking** or **splitters**. 

Let's restrict our focus area on the text splitters that count tokens and that are compatible with OpenAI models, 
which are they most used and relevant nowadays.
There are many text splitters based on token counting, complete list could be found at this
[documentation page](https://python.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/split_by_token).

Looking at that doc page, the logical choice would be the langchain's `CharacterTextSplitter.from_tiktoken_encoder`; but, as pointed out by the 
documentation itself, it does not use any semantic feature to split the text and the `tiktoken` library tokenizer is only used to merge splits. 
Going deeper in the code, it is clear that the separator used to split text is `\n\n`. 
It means that split can be larger than chunk size measured by `tiktoken` tokenizer. 

The more robust alternative suggested by Langchain is to use `RecursiveCharacterTextSplitter.from_tiktoken_encoder` 
([documentation here](https://python.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter)) 
to make sure splits are not larger than chunk size of tokens allowed by the language model,
where each split will be recursively split if it has a larger size.

In fact, the `RecursiveCharacterTextSplitter`, like `chunkipy`, uses a recursive strategy to split text.
The default list of separators is `["\n\n", "\n", " ", ""]`. 
This has the effect of trying to keep all paragraphs (and then sentences, and then words) together as long as possible, 
as those would generically seem to be the strongest semantically related pieces of text.
Like `chunkipy`, you could define different splitting strategies or counting function,
though `RecursiveCharacterTextSplitter` only accepts character separators or regex, while
`chunkipy` allows using more sophisticated function to split the text.


## Conclusions
`chunkipy` is a hybrid-approach based chunker that capitalizes on sentence segmentation models for constructing text chunks of 
superior quality. Compared to other libraries, it produces chunks that are not only more comprehensible but also improve the results
of downstream tasks, like vector search or named entity recognition.

Also, it is very flexible, allowing for custom text splitting strategies, including very complex pattern or custom heuristics.
Clearly, it is not perfect, and it could be optimized or improved with more features. 

I was happy to learn that the library is widely used in my current company and in the previous one 
by my colleagues, who appreciated the work done in this field. I hope this could help other people with similar needs.
If you want to contribute, if you find a bug or have a feature request, 
please open an issue on [GitHub](https://github.com/gioelecrispo/chunkipy/issues).

