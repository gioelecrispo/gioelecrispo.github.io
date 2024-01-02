---
title: <span><strong>S.O.L.I.D.</strong> rules to build a <strong>solid</strong> software architecture</span>
description: When building complex systems, Software Engineering should be your first thought. <b>S.O.L.I.D. principles</b> and their consequences are analyzed in depth.
author: Gioele Crispo
img: /blog/s-o-l-i-d-rules-to-build-a-solid-software-architecture/_index.png
alt: solid rules
tags: 
  - architectures
createdAt: 2020-11-11T12:15:20.516Z
updatedAt: 2021-04-09T12:15:20.516Z
---


# S.O.L.I.D. principles to build a solid software architecture

<br/>

+ Introduction 
+ What is a "*Software Architecture*"?
+ S.O.L.I.D. principles
+ Component cohesion principles
+ Component coupling principles
+ Conclusions

<br/>

## Introduction

This article is highly inspired by the work of Robert C. Martin, popularly known as Uncle Bob, in its book "*Clean Architecture*".
S.O.L.I.D., in fact, is an acronym for the first five object-oriented design principles defined by Uncle Bob, 
together with the principles of component cohesion e component coupling.
These principles are fundamental for building high quality software architectures.

<p style="margin-left:25px; border-left: 4px solid #666; padding-left:15px">
<i>But why do we have to design good software architectures and not package software that just works?</i>
</p>

It sounds like a rhetorical question, but there is much more to it. A well-designed architecture means making the system resilient to changes and benefit a lot in terms of costs.
It might appear that this problem only affects long-running projects, but it doesn't - customers are constantly asking for software changes based on marketing choices or what they have seen so far.
Agile methods were born to have software development processes that are less rigid, faster and better absorb the changes required by the customer, but they cannot absorb the costs in terms of development time if the architecture behind them is not of good quality.
Before going into the details of the basic principles for the design of a good architecture we need to 
define it and understand the disadvantages of not having one.

<br/>

## What is a "*Software Architecture*"?
In his book, Robert C. Martin defines software architecture like this:


<p style="margin-left:25px; border-left: 4px solid #666; padding-left:15px">
<i>The architecture of a software system is the "form" given to that system by those who build it. 
   By "form" we mean the division of this system into components, in the arrangement of them and 
   in the ways in which these components communicate with each other. 
   The purpose is to facilitate the development, distribution, operation and maintenance of the 
   software system contained therein.</i>
</p>



Among the various definitions, in my opinion, Uncle Bob's is the most effective. 
It clearly defines the ultimate goal of a software architecture: **to support the life cycle of 
the system, minimizing the costs of its implementation and maximizing the programmer's productivity.**

Not having a good architecture implies that the system produced will be of poor quality:
+ will have **poor maintainability**: a trivial change can impact many files and lines of code with the possibility 
  of multiplying bugs;
+ it will be **difficult to understand**: the understanding of the software suffers considerably; those who join the 
  team after the project or the developer himself after months makes a lot of effort to understand the code.
+ will enjoy **poor reusability**: it means having large blocks of code and duplicated functionality in the project.
+ will be **hardly testable**: having large components, not logically separate and inter-dependent on each other, 
  makes it very difficult to produce good test suites.

<br/>

## S.O.L.I.D. principles
Following there are the principles:

+ **Single-responsibility Principle (SRP)**: 
  A class or a module should have one and only one reason to change, meaning that a class should have only one job. 

<br/>

This principle indicates that everything that the same reason or actor to change must be cohesive, put together, 
and separated from the pieces of code that can change for different reasons or actors.

<br/>

+ **Open-closed Principle (OCP)**:
  Objects or entities should be open for extension, but closed for modification.

<br/>

To ensure good maintainability the system should be open to extensions rather than modifications. 
This is important to maintain consistency with the other parts that the part of the software 
interfaces with. Allowing extensions means taking advantage of inheritance at the class level 
and building extensible components at the architecture level.

<br/>


+ **Liskov Substitution Principle (LSP)** :
  Let q(x) be a property provable about objects of x of type T. 
  Then q(y) should be provable for objects y of type S where S is a subtype of T.

<br/>

Liskov's principle tells us how to control inheritance. But it can be transported to the architectural level by 
indicating how components must communicate with each other, through a strong definition of interfaces.

<br/>

+ **Interface Segregation Principle (ISP)**:
  A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

<br/>

This principle simply tells us to make classes and modules simple, avoiding unnecessary dependencies 
and therefore difficult to maintain in the long term.

<br/>

+ **Dependency Inversion Principle (DIP)**:
  Entities must depend on abstractions not on concretions. 
  It states that the high level module must not depend on the low level module, but they should depend on abstractions.

<br/>

This principle tells us that dependencies should all refer to abstract components and not to concrete 
components. The use of concrete classes is advisable only when they are extremely **stable**, 
that is, little prone to changes. Think of the *String* class: you are sure that it will never or almost never 
change and you can use it with confidence.

<br/>

## Component cohesion principles
First of all, we need to establish the definition of component that we are going to use. 
A component is a unit of composition with a given context and that can be deployed independently 
such as .jar or a npm module. 

+ **Reuse/Release equivalence Principle (REP)**:
  The granularity of reuse is the granularity of release. 

<br/>

Basically, it means that a component should be released as highly cohesive code units, so the elements of it would be releasable together.
Classes and modules that have been bundled together in a component should be releasable together. The fact that they share the same version number and release code and are included in the same release documentation must be logically acceptable to the author of the component and should make sense to the user. 
A user could decide whether to use the component or its new dressing based on the documentation that is provided.

<br/>

+ **Common Closure Principle (CCP)**
  We keep together in a component all the classes that are modified for the same reason and at the same time. 

<br/>

It is a component version of the Single Responsibility Principle. While the latter states that a *class* should have only one 
single reason to be modified, CCP tell us a *component* should not have more than one reason to change.
That way, we increase the maintainability of our software by having to alter just a component when the requirement specific to it changes.
Furthermore, this principle is strongly related to the OCP principle: they refer to the same "closure" meaning. The classes
should be closed to changes but open to the extensions. Since a perfect closure (the immutability of the code) is impossible,
we have to reduce the changes by adopting the strategy to put all together the classes which are correlated each one.

We can summarize the CCP and SRP principles in the following statement: 
***"Gather together those things that change simultaneously and for the same reasons."***

<br/>

+ **Common Reuse Principle (CRP)**:
  We shouldn’t force our users to depend on things that they are not going to use.

<br/>

It helps us to choose which classes and module we have to put together into a component.
This principle tell us also what not to do. this principle also tells us what not to do. 
If the user component uses only one component class and not the others, you will still need to import and depend on the whole component. 
This becomes a problem, because the user component may undergo changes (and will have to be recompiled, rebuilt and redistributed anyway) 
even if the changes affect classes that the user component does not use. We must therefore always analyze the dependencies and make sure 
that the modules to be included in a component are really inseparable.
The CRP principle is the generic version of the ISP principle, which urges us not to depend on classes containing methods we don't use.

We can summarize the CPR and ISP principles in the following statement: 
***"Don't depend on the things you don't need."***

<br/>

## Component coupling principles
Once we know how create components, we have also to put the attention on how the interact each other. 
The next principles regards the components relationship. 

+ **Acyclic Dependencies Principle (ADP)**:
  Do not allow loops to arise in the dependency graph between components.

<br/>

According to this principle, we must divide the components according to their relationships 
avoiding that one component depends on another that depends directly or indirectly on the first. 
Furthermore, the components should be independently developed and released. 
This implies that a component dependent on a certain other component or module is not forced to modify 
its code based on the changes of that module on which it depends and can use the previous version 
until it is not ready to change.

<br/>

+ **Stable Dependencies Principle (SDP)**:
  Bet on stability.

<br/>

The stability of a component is measured based on its inbound and outbound dependencies. 
If a component depends on many other components (incoming dependencies) it has many reasons to 
change and be modified according to the changes imposed by the components it depends on.
If a component is a dependency of many other components (outbound dependencies) it has many 
reasons to **NOT** change and be modified in order not to impact the components that depend on it.
So a component is stable if it has many dependencies on exit and few on input.

<br/>

+ **Stable Abstraction Principle (SAP)**:
  A component should be as abstract as it is stable.

<br/>

In the stable components we must therefore insert what must change little, that is, the "political" 
decisions to orient the system, which must not be **volatile**, however they must be **flexible**.
The best way is to use abstract classes, because they 
guarantee us an easy modifiability through extension (OCP principle).

<br/>

## Conclusions
Having these principles in mind is certainly an extra weapon to produce quality software, 
maximizing the time and effort of those who work on it. Basically, the principles all aim to isolate 
software, avoiding creating unnecessary and harmful dependencies for system maintenance. The *software* 
is by definition changeable; therefore it is necessary to be as lean and flexible as possible. 
However, too much generalization can also be harmful if it is not used correctly or is not necessary 
in relation to the domain of the system: it is a waste of resources and time. It is important to know 
how to mix these two aspects of software development correctly: using these principles wisely requires 
practice and knowledge.
