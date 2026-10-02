---
layout: post
title: "Reading the Hugo Book Through Its Chapter Titles"
subtitle: "What Static Site Generators in the Age of AI teaches, one chapter at a time"
excerpt: "A guided reading of the nineteen chapter titles in Static Site Generators in the Age of AI, and what each one quietly teaches about publishing, review, and keeping a website alive."
date: 2026-09-29 10:00:00 +0300
categories: ["Books", "Web Development", "Hugo", "AI Agents"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://polla.dev/ssg-book/"
---

{% include image.html url="/img/posts/2026-09-29-static-site-generators-in-the-age-of-ai/cover.webp" description="Cover of Static Site Generators in the Age of AI: Building and Maintaining Content with AI Agents" %}

The first thing I notice about this book is how few chapter titles mention a technology. Hugo appears in a few of them, but the verbs do the real work: *write*, *organise*, *understand*, *track*, *recover*, *check*, *maintain*, *migrate*. Read in order, the titles describe a person growing from someone who has a folder of notes into someone who is responsible for a living website.

This post reads the book through those titles. The aim is not a table of contents. For each group of chapters I want to ask what the title is really promising the reader, and what habit it is trying to build. The book is free to read at [polla.dev/ssg-book](https://polla.dev/ssg-book/).

## The thesis hiding in the subtitle

*Building and Maintaining Content with AI Agents.* The word that matters is **maintaining**. Most beginner material stops when the site first appears on screen. This book assumes that publishing is the easy part, and that the harder skill is staying in control of a site that changes, especially when an AI agent is making some of those changes.

The book assumes no prior HTML, Git, or command-line experience. It works because it keeps one rule throughout: the human remains responsible for what goes live.

{% include image.html url="/img/posts/2026-09-29-static-site-generators-in-the-age-of-ai/five-arcs.svg" description="The nineteen chapters fall into five arcs, from a first local site to an original publishing project" %}

## Arc 1: Build and understand a first site (Chapters 1–5)

**1. Your First Hugo Website.** The title promises ownership, not mastery. The chapter opens with the idea that you already have something worth sharing, and its sections end with *Practise recovering from a mistake* and *Stop, restart, and preserve your work*. A reader learns that a first success should be followed immediately by learning how to undo things.

**2. Write and Publish Content Locally.** Notice the word *locally*. It teaches that writing and publishing are separate acts. You can draft, preview, and even break an image reference on your own machine before anyone sees it. One section is *Display a command without running it*, a small lesson in the difference between showing code and executing it.

**3. Organise a Useful Website.** Here the book moves from a single page to information design. Section titles such as *Decide what belongs where* and *Choose stable names, addresses, and organising tools* teach that URLs are promises to readers. A page you rename today is a link someone else will find broken tomorrow.

**4. Understand the HTML Behind Your Pages.** This is the chapter that makes the later AI chapters possible. Its opening argument is that the title on screen is not just large text: the browser interprets structure. The last section, *Judge an agent's proposed change, then make your own*, shows the purpose. You learn HTML so that you can *read* a suggestion, not so that you can write everything by hand.

**5. Practical CSS for Your Hugo Site.** The title says *practical*, and the sections keep to it: *Learn only the selectors you meet here*. It is an honest rejection of the idea that a beginner must learn all of CSS first. The visible result is deliberately small: a quieter footer, more readable body text, clearer heading spacing.

## Arc 2: Record and publish (Chapters 6–7)

**6. Track and Recover Your Hugo Site with Git.** Notice that recovery sits in the title next to tracking. Git is introduced as a safety net before it is introduced as a collaboration tool. The chapter has the reader recover from a *deliberately poor CSS edit*, so the first time they use `git` to undo something, they are calm because the mistake was planned.

**7. Publish Your Hugo Site with GitHub Pages.** The section *Distinguish the source address from the website address* hints at the most common beginner confusion: the repository is not the website. Another section, *Recognise a failed build without publishing a mistake*, teaches that a pipeline which refuses to deploy is working as intended.

## Arc 3: Agents and content structure (Chapters 8–12)

**8. Work with an AI Agent on Your Hugo Site.** The first agent task is almost comically small: add one heading and three bullets to a Resources page. That is the lesson. A good first task is one you can inspect completely. The chapter then asks the reader to *give the project a short instruction file*, *ask the agent to inspect before it edits*, and *review the files, not just the summary*. A summary written by an agent describes what it believes it did. The files show what it did.

**9. Give Your Hugo Content a Consistent Structure.** The pivot here is that structure is requirements. A small shared front matter structure makes pages easier for people to compare, and it also gives the agent concrete rules to follow. Archetypes, the reusable starter files, are presented as a way to make the right thing the easy thing.

**10. Use Hugo Templates to Display Your Content.** The chapter opens with a clear promise: change a project's description once, and Hugo can use it on the project page and in the Projects list. That is the case for templates in a sentence. One section, *Diagnose a context mistake*, prepares readers for the most common template error, using a value from the wrong scope.

**11. Build Reusable Hugo Layouts.** Reuse is taught by moving *one familiar component first*. The title of section 11.6, *Check a failure that a successful build can miss*, is one of my favourites in the book. A site can build without errors and still be wrong, which is why later chapters add checks.

**12. Build a Resource Directory with JSON.** A directory of resources is a small database. The chapter lets you *add a resource without changing the template*, which is the practical meaning of separating data from presentation. The heading *Repair broken syntax, then check meaning* separates two kinds of error: JSON that does not parse, and JSON that parses but says something wrong.

## Arc 4: Contribute, check, and reach readers (Chapters 13–17)

**13. Create and Maintain Content with AI Agents.** The chapter begins by asking what an agent *may and may not* contribute. It then follows a deliberate order: put the source material where it can be read, agree what the article must contain, ask for a plan before a draft, and draft *from the source only*. The test at the end, *Test your review on an unsupported claim*, plants a claim the source does not support and asks whether the reader catches it. It is the clearest statement in the book of what "editorial judgment" means.

**14. Check Every Contribution with CI/CD.** Three rules from earlier chapters become automated checks: directory flags must be real Booleans, internal links must stay relative, and pages must carry a description. Then the reader *breaks a rule on purpose and lets the checks stop it*. The final lesson is subtle: *keep review separate from checks*. Automation catches rule violations. It cannot decide whether the content is good.

**15. Help Readers Find and Use Your Content.** Titles, descriptions, the sitemap, the feed, and a search page built from your own content. The detail I like most is *Diagnose a search that fails silently* and the closing advice to use automated tools *without trusting their scores*. Accessibility and findability are treated as things to test by hand: by keyboard, without JavaScript, at small widths.

**16. Publish in Multiple Languages.** The worked example is Kurdish Sorani, which runs right to left. That makes the chapter more than a feature tour. The reader must *find and fix the rule that assumes left to right* in their own stylesheet, a lesson in how many layout assumptions hide in code that "works". Two sections are about honesty: *translate two pages, and be honest about the rest*, and *track which translations have gone stale*.

**17. Add Interactive Features Responsibly.** A static site has no server program to receive a form submission, so the chapter has the reader *build the form properly* and then *watch it fail to send*. The working solution hands the message to the visitor's own mail program. The section *Why you cannot keep a secret in a static site* teaches a security principle in a single sentence: anything shipped to the browser is public.

## Arc 5: Maintenance and original projects (Chapters 18–19)

**18. Maintain, Migrate, and Recover.** This is the chapter the subtitle was written for. The reader finds a page that now says something untrue, updates dependencies, retires a page without breaking its address, and then *publishes a mistake on purpose* to practise recovering after it is live. The chapter also covers credentials, licensing, privacy, and cost: the questions that outlast any single change.

**19. Build Your Own Publishing Project.** The closing chapter is about scope. *Write a brief that says what you are not building.* *Choose features by what they cost to keep.* *Test the brief, and expect it to fail.* The last agent task is to give an agent *a project it has never seen*, which checks whether your instructions and structure make sense to someone with no context.

## The pattern behind the chapters

Every chapter follows the same four moves: preview the result, make one early working edit, break something deliberately, then practise independently before saving a checkpoint. After nineteen repetitions, the reader has a reflex that matters more than any Hugo command: *make a small change, look at it, and know how to undo it*.

That reflex is exactly what working with an AI agent requires. The book is therefore not really a Hugo book with an AI chapter attached. It is a book about review, with a static site as the practice ground.

*Read the book online at [polla.dev/ssg-book](https://polla.dev/ssg-book/). It is a draft in progress, and chapter details may change as it is revised.*
