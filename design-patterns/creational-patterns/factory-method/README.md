# Design Patterns: Factory Method

This creational pattern provides an __interface to create objects__ in a superclass, but allows subclasses to alter the type of objects that will be created.

To create objects that have an analoguous purpose (e.g. transport) but notable differences (e.g. truck, boat, airplane, ...), it is possible to use a Factory class that distribute the creation of each object to subclasses.

So, each __product__ of the Factory subclasses will have the same interface as the Factory class. It is then possible to add a new attribute or method to all this products by a modification of the Factory class.