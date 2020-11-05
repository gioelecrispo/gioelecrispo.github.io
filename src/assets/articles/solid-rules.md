# S.O.L.I.D. rules to build a solid software architecture

<br/>

+ Introduction 
+ S.O.L.I.D. principles
+ Component cohesion principles
+ Component coupling principles
+ Conclusions

<br/>


## Introduction


This article is highly inspired by the work of Robert C. Martin, popularly known as Uncle Bob, in its book "*Clean Architecture*".
S.O.L.I.D., in fact, is an acronym for the first five object-oriented design (OOD) principles defined by Uncle Bob, 
together with the principles of component cohesion.

## S.O.L.I.D. principles
Following there are the principles:

+ **Single-responsibility Principle (SRP)**: 
A class should have one and only one reason to change, meaning that a class should have only one job. 

+ **Open-closed Principle (OCP)**:
Objects or entities should be open for extension, but closed for modification.

+ **Liskov Substitution Principle (LSP)** :
Let q(x) be a property provable about objects of x of type T. 
Then q(y) should be provable for objects y of type S where S is a subtype of T.

+ **Interface Segregation Principle (ISP)**:
A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

+ **Dependency Inversion Principle (DIP)**:
Entities must depend on abstractions not on concretions. 
It states that the high level module must not depend on the low level module, but they should depend on abstractions.

## Component cohesion principles
First of all, we need to establish the definition of component that we are going to use. 
A component is a unit of composition with a given context and that can be deployed independently such as .jar or a npm module. 

+ **Reuse/Release equivalence Principle (REP)**:
The granularity of reuse is the granularity of release. 

<br/>
Basically, it means that a component should be released as highly cohesive code units, so the elements of it would be releasable together.
Classes and modules that have been bundled together in a component should be releasable together. The fact that they share the same version number and release code and are included in the same release documentation must be logically acceptable to the author of the component and should make sense to the user. 
A user could decide whether to use the component or its new dressing based on the documentation that is provided.

<br/> <br/>

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

## Component coupling principles
Once we know how create components, we have also to put the attention on how the interact each other. 
The next principles regards the components relationship. The most We ha

## Conclusions

