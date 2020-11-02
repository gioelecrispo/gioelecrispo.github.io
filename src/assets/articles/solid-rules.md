# S.O.L.I.D. rules to build a solid software architecture

## Introduction
S.O.L.I.D is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin, 
popularly known as Uncle Bob.

## Principles
Following there are the principles:

+ **Single-responsibility Principle (SRP)**: 
A class should have one and only one reason to change, meaning that a class should have only one job. 

+ **Open-closed Principle (OCP)**:
Objects or entities should be open for extension, but closed for modification.

+ **Liskov Substitution Principle (LSP)** :
Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

+ **Interface Segregation Principle (ISP)**:
A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

+ **Dependency Inversion Principle (DIP)**:
Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.
