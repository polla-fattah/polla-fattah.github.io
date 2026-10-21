---
layout: post
title: "A Manifesto for Sovereign Personal Software"
subtitle: "Six principles, seven tests, and a way to ask whether software respects the person who uses it"
excerpt: "ToDoz was built to embody a set of principles. Here they are as a standalone manifesto, with an evaluator, an index of example tools, and recipes for leaving cloud services."
date: 2026-10-22 00:30:00 +0300
background: '/img/posts/2026-10-22-a-manifesto-for-sovereign-personal-software/banner.webp'
categories: ["Software Engineering", "AI", "Open Source"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://sovereign.polla.dev/"
---

I built [ToDoz]({% post_url 2026-10-19-todoz-personal-software-in-the-age-of-ai-agents %}) deliberately to embody a set of principles. I first wrote them down as the ToDoz Philosophy, but they have very little to do with task management.

They describe how any application should treat the person who depends on it.

So I published them as a standalone document: **[A Manifesto for Sovereign Personal Software](https://sovereign.polla.dev/).**

## From One Application to a Standard

ToDoz is the proof of concept: one application built to follow the principles, with AI used to lower the cost of building it rather than to add weight to the product. The manifesto states the principles independently of any application, so that they can be applied, and challenged, elsewhere.

The six principles are the ones behind ToDoz: sovereignty, locality, predictability, responsiveness, focused interoperability, and longevity. The manifesto expands each of them, adds sections on architecture, AI without dependency, and synchronization, and lists what sovereign software refuses to become.

Its central claim is short: **your data belongs to you, and your tools should remain useful without depending on someone else's infrastructure.**

## Seven Tests

Principles are easy to agree with and hard to apply. So the manifesto turns them into seven questions that any application, or any architectural decision, can be asked:

1. **The Offline Test (Air-Gap):** does primary functionality work with the network disabled?
2. **The 100ms Test:** do common local interactions respond within 100 milliseconds?
3. **The Longevity Test:** can users recover their raw data with standard tools if the application disappears?
4. **The Responsibility Test:** does this capability belong in this tool, or in a separate one?
5. **The Dependency Test:** does this avoid mandatory accounts, fragile dependency trees, and subscriptions?
6. **The Predictability Test:** are state transitions specified, reproducible, and testable?
7. **The Recovery and Security Test:** can users verify their backups and recover from failure?

The site includes an interactive evaluator, so you can score a tool yourself and copy the result as a Markdown report. It also generates a pull request checklist from the same seven gates.

## What Is on the Site

- **The manifesto,** with a reading and print edition and a downloadable Markdown file.
- **An index of example tools** that fit the principles, from Git and SQLite to Beancount and KiCad, with the data format each one uses.
- **The 7-gate evaluator,** described above.
- **Escape hatches,** short recipes for moving data out of cloud services into plain, durable files.

The ratings in the index are my own editorial judgments, not formal audits. The recipes are starting points, and you should test them against your own data before relying on them.

## The Site Follows Its Own Rules

A manifesto about independence should not depend on other people's servers, so the site loads nothing from third parties. The fonts and styles are hosted with the site, there are no trackers or cookies, and only two pages use any JavaScript at all.

The response-time figures in the manifesto come from long-standing usability research, and the references are listed on the page. I describe them as practical guidelines rather than laws, because they apply best to direct interaction. A CAD model that takes seconds to rebuild is not necessarily a failure, as long as the interface stays responsive and the user can cancel.

## An Opinion, Not a Standard

I want to be clear about what this is. It is a position, supported by experience and by the sources I cite. It is not an official standard, and the tests are an aid to judgment, not a certification.

If you disagree with a principle, find an error, or know a tool that belongs in the index, the source is open and I would like to hear from you.

## Final Thoughts

AI is making it cheaper to write software. That makes the question of what software should do for its owner more important, not less.

**Applications are temporary. Human information deserves a longer life.**

---

*Sovereign Personal Software is an open manifesto, released under CC BY 4.0.*

[Read the Manifesto](https://sovereign.polla.dev/) · [Reading Edition](https://sovereign.polla.dev/read/) · [Source Code](https://github.com/polla-fattah/sovereign-software)
