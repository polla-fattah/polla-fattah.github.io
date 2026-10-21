---
layout: post
title: "ToDoz and the Rise of Personal Software"
subtitle: "ToDoz is sovereign software in practice: built with AI to lower the cost of development, not to add weight to the product"
excerpt: "Why I built ToDoz to embody the principles of sovereign personal software, and how AI lowered the cost of building it without adding AI to the product."
date: 2026-10-19 10:00:00 +0300
background: '/img/posts/2026-10-19-todoz-personal-software-in-the-age-of-ai-agents/banner.webp'
categories: ["Software Engineering", "AI", "Open Source", "Productivity"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://todoz.polla.dev/"
---

For most of my career, the question "Should I build my own task manager?" had an obvious answer: **No.**

Excellent applications already exist. Todoist, Notion, ClickUp, and others offer mature features, polished interfaces, and extensive integrations. Building something comparable would require considerable effort, and maintaining it would become another responsibility.

So I adapted my workflow to the software available. I accepted its subscription model, synchronization approach, and the features its developers decided I needed. That was a reasonable compromise when building software was expensive.

But AI coding agents are changing the economics of software development. A single developer can now implement applications that previously required much more time and effort. This raises an interesting question:

**If building software is becoming more affordable, why must we always adapt ourselves to someone else's idea of how our software should work?**

That question led me to build [ToDoz](https://todoz.polla.dev/).

## Why ToDoz Exists

I built ToDoz to put a set of ideas into practice. I believe software should keep working without a network, store my data in formats I control, behave predictably, and stay small enough to understand. Those ideas are the principles of [Sovereign Personal Software]({% post_url 2026-10-22-a-manifesto-for-sovereign-personal-software %}), and ToDoz is the application I built to test whether they could survive contact with a real product.

So the requirements came from the philosophy: my tasks available without an internet connection, synchronization through infrastructure I can operate myself, and no dependence on subscriptions or AI services.

ToDoz is an open-source task manager built with Flutter, SQLite, and a lightweight self-hosted synchronization service. It provides familiar features, including projects, subtasks, priorities, recurring tasks, reminders, filters, and multiple views. But it is not an attempt to outperform established productivity applications.

**It is an attempt to show that software can respect its owner and still be useful.**

## The Philosophy ToDoz Is Built On

The application follows six principles that guide both its architecture and its boundaries. I first wrote them down as [The ToDoz Philosophy](https://todoz.polla.dev/philosophy), and the standalone [manifesto]({% post_url 2026-10-22-a-manifesto-for-sovereign-personal-software %}) states them independently of any single application.

**1. Sovereignty: Your data belongs to you.**

Personal information should not depend entirely on a commercial account or subscription. ToDoz stores task data locally and supports self-hosted synchronization and portable exports. Users should retain control over where their information resides and how it can be recovered.

**2. Locality: The device comes first.**

Core task-management operations should work without internet access. The native application reads and writes locally, while synchronization happens separately when connectivity is available. The network enhances the experience; it should not be required for ordinary interactions.

**3. Predictability: Not everything needs AI.**

Recurring schedules, reminders, and filters should behave according to defined, testable rules. A task scheduled for the first Wednesday of every month should not depend on an AI model interpreting the instruction differently tomorrow. AI may help users express intentions, but deterministic software should validate and execute them.

**4. Responsiveness: Respect the user's attention.**

Creating or completing a task should feel immediate. ToDoz targets under 100 milliseconds for feedback on common local interactions. Equally important, unnecessary notifications, complexity, and features should not interrupt the user's work.

**5. Focused Interoperability: Separate responsibilities, connect information.**

A task manager and a knowledge-management system serve different purposes. Tasks manage commitments and execution; notes and diaries preserve ideas, explanations, and reflection. Rather than building everything into one application, ToDoz aims to work alongside tools such as Obsidian through links and open formats.

The principle is simple: **separate responsibilities, not information.**

**6. Longevity: Information should outlive applications.**

Software comes and goes, but personal records may remain valuable for decades. Widely supported formats, documented exports, backups, and migration capabilities help ensure that information does not disappear when an application becomes obsolete.

These principles are more important than the technologies currently implementing them.

## AI in the Build, Not in the Product

AI coding agents lowered the cost of building ToDoz. They did not change what ToDoz is. The application contains no AI in its essential operations: recurring schedules, reminders, and filters run on deterministic, testable rules, and everything works with every AI service switched off.

That separation matters. Used inside a product, AI adds dependencies, unpredictable behavior, and running costs. Used to build the product, it reduces development effort and leaves the software lighter. **I used AI to make ToDoz cheaper to build, not heavier to run.**

Cheap code also tempts developers to add features, and features are where bloat begins. The ability to add a feature is never sufficient reason to add it. For ToDoz, deciding what the application should *not* do was as important as deciding what it should do.

## Engineering Still Matters

AI coding agents can accelerate implementation, generate interfaces, develop database schemas, and assist with testing. But they can also produce plausible code containing subtle defects. Synchronization, recurring schedules, authentication, and data recovery all involve engineering decisions that cannot be validated merely because generated code compiles or appears to work.

This experience reinforced an idea I have been considering for some time:

**When code becomes cheaper to produce, the ability to make sound engineering decisions becomes more valuable.**

The challenge increasingly shifts from writing every line of code to defining requirements, selecting architectures, evaluating trade-offs, and verifying correctness.

## Independence Comes With Responsibility

Personal software provides freedom, but that freedom carries obligations. Self-hosting means taking responsibility for security, backups, updates, and infrastructure. Local-first synchronization introduces challenges involving conflicts, disconnected devices, and data consistency. AI assistance does not eliminate these problems.

ToDoz itself has limitations. Some platform capabilities and integrations still require further testing, and its self-hosted synchronization is not end-to-end encrypted. I prefer acknowledging these limitations rather than presenting AI-assisted development as a shortcut to production-ready software. This is also why I believe personal software should remain focused. Even when implementing features becomes inexpensive, maintaining them does not become free.

## A New Possibility for Personal Software

Traditional software economics encouraged developers to build applications for large markets. Engineering costs had to be distributed across enough customers to make development worthwhile. AI-assisted development is beginning to change that calculation.

A researcher might build a specialized reference manager. A teacher might develop a tool for a particular teaching workflow. A small organization might create software around its internal processes. These applications do not necessarily need thousands of users to justify their existence. Their value may come entirely from how well they serve their intended users.

This does not mean everyone should abandon commercial applications. Mature products provide capabilities, reliability, and support that personal projects may never match. But it means we increasingly have another choice.

## What This Means for Software Engineering

As someone involved in teaching software engineering, I find this shift particularly significant. Students sometimes view requirements, architecture, testing, and documentation as secondary to programming. Yet as AI makes generating code easier, these disciplines become even more important. Developers must understand enough to evaluate what AI produces, identify incorrect assumptions, recognize security risks, and take responsibility for the resulting systems.

Perhaps the defining engineering skill of the AI era will not be how quickly someone can produce code, but **how reliably they can turn an intention into software that behaves correctly and remains maintainable.**

## Final Thoughts

I do not claim ToDoz is better than Todoist or any other established application. For many users, it will not be. Its significance to me is different.

It is a working demonstration that the principles can be implemented in a real application, and that AI can lower the cost of building such software without adding weight to it. AI made its development practical. The principles made it worth developing carefully. Perhaps the most important consequence of AI-assisted development is not that we will produce more software, but that more people will be able to shape the software they use.

**Software no longer always needs a large market to justify its existence. Sometimes, one person with a sufficiently clear idea is enough.**

---

*ToDoz is an open-source, AI-assisted personal task manager.*

[Explore ToDoz](https://todoz.polla.dev/) · [Source Code](https://github.com/polla-fattah/ToDoz) · [The ToDoz Philosophy](https://todoz.polla.dev/philosophy) · [Sovereign Personal Software](https://sovereign.polla.dev/)
