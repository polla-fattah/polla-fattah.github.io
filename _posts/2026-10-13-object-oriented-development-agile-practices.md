---
layout: post
title: "Why Software Engineering for AI Starts with Change"
subtitle: "The ideas behind Object Oriented Development and Agile Practices"
excerpt: "A perspective on why object-oriented design, testing, refactoring, and agile feedback matter for anyone building software around AI and data."
date: 2026-10-13 10:00:00 +0300
background: '/img/posts/2026-10-13-object-oriented-development-agile-practices/banner.png?v=2'
categories: ["Books", "Software Engineering", "Object-Oriented Design", "Agile"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://polla.dev/ood-agile-book/"
---

{% include image.html url="/img/posts/2026-10-13-object-oriented-development-agile-practices/cover.png?v=2" description="Cover of Object Oriented Development and Agile Practices: Designing, Testing and Evolving Software with AI Assistance" %}

AI projects are often introduced through models, datasets, and impressive demonstrations. Yet the difficult part of an AI-enabled system usually begins after the demonstration: a requirement changes, a data source times out, a policy becomes more complicated, or another engineer has to make a change without breaking the assumptions hidden in the code.

That is the problem behind my book *Object Oriented Development and Agile Practices*. It is not primarily a book about Java syntax, design-pattern vocabulary, or the rituals of Agile. It is about building software that can absorb change while remaining understandable, testable, and safe to extend.

AI makes this question more urgent. When an assistant can produce a plausible class, test, or refactoring in seconds, the scarce skill is no longer only writing code. It is deciding what the code should promise, recognising when a generated solution is subtly wrong, and creating a system in which those mistakes can be found before they become expensive. The book presents object-oriented design, testing, and agile feedback as the engineering discipline that gives AI-assisted development a safe shape.

The book is available at [polla.dev/ood-agile-book](https://polla.dev/ood-agile-book/), together with the manuscript, verified code companions, syllabus, and lecture slides.

## A book about the moment after “it works”

There is a stage in almost every software project when the first version works well enough to be convincing. A reservation can be made. A lending rule gives the right answer. A service returns a prediction. A test passes.

Then the second request arrives.

The system must support a new kind of user, a different approval rule, an additional notification channel, or a fallback when an external service is unavailable. The question is no longer whether the original code can produce the original result. The question is whether the design has somewhere for the new behaviour to go.

The book follows that moment repeatedly through a Campus Equipment Lending System. The domain is deliberately ordinary: equipment can be reserved, borrowed, returned, and governed by policies. That makes the engineering decisions visible. Readers can see what happens when a responsibility is placed in the wrong class, when an interface is too broad, when an inheritance hierarchy promises more than it can deliver, or when a seemingly harmless change spreads through the application.

The running system is therefore more than an example. It is a way to make design consequences accumulate. Each change leaves evidence of the decision that made it easy or difficult.

## Object-oriented design as protection against change

Object-oriented design is often taught as a set of nouns: classes, objects, inheritance, and polymorphism. In practice, its value is more demanding. A useful design protects important rules and gives each kind of change a coherent place to live.

That is why the book treats encapsulation, invariants, cohesion, coupling, and SOLID principles as practical responses to change pressure. Single Responsibility is about separating reasons to change. Open/Closed is about adding behaviour without repeatedly destabilising what already works. Dependency Inversion is about keeping volatile details from controlling the important parts of a system.

These principles are not presented as a checklist to apply mechanically. They become useful when a requirement exposes a weakness. A new policy reveals a responsibility that was hidden in a service. A second notification mechanism reveals an interface that was designed around one implementation. A test that is difficult to write reveals a dependency that the design has failed to isolate.

The book’s central lesson is simple: good design is not the absence of change. It is the ability to make change without losing the shape of the system.

## Testing is how the design learns to speak

In this book, tests are not a final inspection performed after the “real” work. They are part of discovering what the software should mean.

Test-Driven Development gives a change a small, observable boundary. Arrange–Act–Assert makes the scenario explicit. Test doubles allow a class to be examined without dragging a database, clock, network service, or unrelated policy into every test. Characterisation tests provide a safety net when the existing behaviour is poorly documented but too important to guess at.

This matters especially for AI and data systems. A model may be sophisticated, but the surrounding software still has to handle missing values, stale results, timeouts, retries, permissions, and changing business rules. The model is only one component in a chain of contracts. Tests help make those contracts visible, and they give an AI-assisted engineer something stronger than intuition with which to evaluate a proposed change.

The result is a different view of testing. A test suite is not merely evidence that the code works. It is an executable explanation of what the system promises, and a design tool for finding boundaries that are small enough to reason about.

## Agile as an engineering feedback system

Agile development is sometimes reduced to boards, stand-ups, and sprint terminology. The book takes a more practical view: an iteration is useful when it creates feedback that can change the next decision.

That means turning a requirement into an explicit story, acceptance criteria, executable tests, and a definition of done. It means making small changes that can be reviewed and reversed. It means looking at flow measures such as lead time, cycle time, work in progress, and throughput to understand how work actually moves through a team.

These practices connect the social and technical sides of engineering. A team cannot plan honestly if the work is hidden in large, ambiguous tasks. It cannot improve safely if the code has no tests. It cannot learn from delivery if every change is too large to understand. Agile becomes credible when the code, the evidence, and the conversation reinforce one another.

## Where AI assistance belongs

The book includes AI assistance because software engineers now work alongside systems that can generate code, tests, explanations, and refactoring suggestions. But the presence of AI does not remove the need for design judgment. It increases the need for it.

An AI assistant can suggest an implementation, but it does not automatically know which invariant must be protected, which compatibility promise matters, or which edge case the domain considers dangerous. The engineer still has to define the boundary, test the claim, inspect the change, and decide whether the result belongs in the system.

That is why the final part of the book treats AI as an engineering assistant rather than an authority. Prompts should expose constraints. Generated code should be checked against tests and contracts. Boundary conditions should be deliberate. Human accountability should remain clear, especially when the software supports decisions involving people, resources, or safety.

## Who can benefit from this book?

The book is written for postgraduate students and early-career software engineers who know how to make programs run but want to understand how professional systems are designed to evolve. It is particularly relevant to students working in artificial intelligence and data science, because their projects often need a reliable software layer around models, experiments, pipelines, and external services.

It can also help instructors who want a course to move beyond isolated examples. The manuscript is paired with executable Java checkpoints, lab solutions, verification records, and lecture decks so that design principles can be taught through a system that changes over time. Readers can study the reasoning, run the code, introduce a new requirement, and observe whether the architecture helps or resists.

For experienced developers, the value is less about learning that SOLID or TDD exist and more about reconnecting those ideas to the pressures that make them necessary: legacy code, delivery risk, package boundaries, handover, flow, and incomplete information.

## The perspective I hope readers take away

Reliable software is not produced by choosing the perfect architecture at the beginning. It is produced by making important assumptions visible, protecting them with tests, keeping changes small enough to understand, and learning from the evidence produced by delivery.

That perspective is the thread running through *Object Oriented Development and Agile Practices*. Object-oriented design gives change a place to go. Testing gives decisions an executable form. Agile feedback keeps the team connected to reality. Refactoring keeps yesterday’s decisions from becoming permanent obstacles. AI can accelerate the work, but engineering judgment gives it direction.

*Read the book, explore the verified code companions, and view the lecture slides at [polla.dev/ood-agile-book](https://polla.dev/ood-agile-book/).*
