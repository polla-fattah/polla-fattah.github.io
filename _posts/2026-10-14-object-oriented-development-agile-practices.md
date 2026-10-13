---
layout: post
title: "Designing Software That Can Change"
subtitle: "A chapter-by-chapter tour of Object Oriented Development and Agile Practices"
excerpt: "A tour of my book Object Oriented Development and Agile Practices, from object-oriented foundations and SOLID to testing, refactoring, flow metrics, continuous delivery, and responsible AI assistance."
date: 2026-10-14 10:00:00 +0300
background: "https://polla.dev/ood-agile-book/images/front-image.png"
categories: ["Books", "Software Engineering", "Object-Oriented Design", "Agile"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://polla.dev/ood-agile-book/"
---

{% include image.html url="https://polla.dev/ood-agile-book/images/front-image.png" description="Cover of Object Oriented Development and Agile Practices: Designing, Testing and Evolving Software with AI Assistance" %}

Many software engineering books begin with language syntax and end with a collection of patterns. *Object Oriented Development and Agile Practices* begins with a different question: *how do we design software that can keep changing without becoming harder to understand?* The answer is a connected practice of object-oriented design, automated testing, refactoring, and short feedback loops.

The book was written for postgraduate students and software engineers who need to move beyond working code toward maintainable, extensible systems. Its running example is a realistic Campus Equipment Lending System in Java. As the system grows, each new requirement becomes an opportunity to examine responsibilities, interfaces, tests, package boundaries, delivery practices, and engineering judgment.

The complete manuscript, code companions, syllabus, and lecture slides are available at [polla.dev/ood-agile-book](https://polla.dev/ood-agile-book/).

## Part 1: Foundations and object-oriented principles (Chapters 1–6)

**1. Developing Software That Can Change.** The opening chapter introduces the central problem: a program can work today and still be difficult to change tomorrow. Students distinguish system assumptions from class responsibilities, inspect invariants, and begin the lending system with a deliberately small change.

**2. Object-Oriented Development Beyond Syntax.** Object orientation is treated as more than classes, getters, and setters. Encapsulation, invariants, collaboration, and UML class models help turn a requirement into a design that protects what must remain true.

**3. Agile Development and the Nature of Change.** Agile is presented as a way to manage uncertainty through feedback, not as a ceremony checklist. User stories, acceptance criteria, backlogs, and sprint planning give changing requirements a form that can be discussed and tested.

**4. From Requirements to an Iteration.** This chapter connects a user story to technical tasks, executable tests, and a Definition of Done. Arrange–Act–Assert provides a concrete bridge from a requirement to an implementation that can be reviewed.

**5. Responsibilities, Extension, and Substitutability.** Single Responsibility, Open/Closed, and Liskov Substitution are explored through change pressures and code smells. Static analysis with PMD makes the design discussion visible instead of leaving it at the level of slogans.

**6. Interfaces, Dependencies, and Composition.** Interface Segregation and Dependency Inversion lead to role interfaces, constructor injection, and composition over inheritance. The goal is not abstraction for its own sake, but modules that can change independently because their contracts are clear.

## Part 2: Testing, creation, and changing behaviour (Chapters 7–9)

**7. Testing as a Design Practice.** Test-Driven Development is introduced as a design rhythm: Red, Green, Refactor. The chapter covers test doubles—dummies, stubs, fakes, and mocks—using JUnit and Mockito, while also showing how tests reveal whether an interface is cohesive.

**8. Creating and Connecting Objects.** Factory Method, Abstract Factory, and Builder patterns are studied as responses to object-creation problems. Dependency injection and a small educational container show how construction decisions affect the rest of an application.

**9. Designing Changing Behaviour.** Strategy, State, Observer, and Command answer four recurring questions: what varies, who owns a transition, who needs to know about a change, and when should an action be evaluated? The patterns are tied to changing business behaviour rather than memorised as templates.

## Part 3: Architecture, packages, and legacy systems (Chapters 10–11)

**10. From Classes to Application Structure.** A good class design still needs a coherent application structure. Layered architecture, domain-driven design concepts, package cohesion, and package coupling provide a vocabulary for deciding where responsibilities belong and which dependencies are allowed.

**11. Refactoring and Legacy Code.** Legacy code is code that is difficult to change safely, not merely code that is old. Characterisation tests, seams, Extract Method, Move Method, and small reversible steps create an escape route from a system that cannot yet be redesigned wholesale.

## Part 4: Flow, delivery, and AI assistance (Chapters 12–15)

**12. Measuring Progress, Flow, and Technical Health.** The book separates velocity from throughput and introduces lead time, cycle time, work in progress, work-item age, and Little’s Law. These measures are used to learn about a delivery system, not to turn engineering into a vanity scoreboard.

**13. Integration, Delivery, and Feedback.** Continuous integration, contract tests, boundary testing, feature flags, and controlled rollouts make delivery an engineering discipline. The emphasis is on feedback that is fast enough to influence the next decision and evidence strong enough to support a release.

**14. Responding to Change and Handing Over.** The final delivery chapters address architecture decision records, retrospectives, handover evidence, and the difference between a small change and a clean design. Technical decisions become more useful when the reasoning behind them survives the original author.

**15. AI as a Software Engineering Assistant.** AI assistance is treated as a capability that still requires engineering judgment. The chapter covers prompt design, boundary-condition validation, evidence checking, and human accountability. An AI-generated suggestion is only a proposal until tests, contracts, and review show that it belongs in the system.

## Appendices and practical companions

Six appendices support the main progression. They cover programming readiness and notation, reproducible tools and setup, engineering templates, project checkpoints and a glossary, critical reading and project evidence, and software engineering for AI and data components.

Each chapter also has a code, explanations, and solutions companion. The companions provide executable Java listings, step-by-step walkthroughs, lab solutions, verification records, fault experiments, and delta checkpoints that show exactly what changed from one stage to the next. The lecture decks follow the same 13-week teaching arc, from foundations and agile planning through SOLID, TDD, patterns, architecture, refactoring, flow metrics, delivery, and engineering reflection.

## The idea that runs through all fifteen chapters

Three habits connect the book: design for change, test as a design practice, and iterate with empirical feedback. Object-oriented principles protect responsibilities and invariants. Tests make those decisions executable. Agile flow makes the work visible. AI can accelerate parts of the process, but accountability remains with the engineer who accepts the change.

*Read the book, explore the verified code companions, and view the lecture slides at [polla.dev/ood-agile-book](https://polla.dev/ood-agile-book/).*
