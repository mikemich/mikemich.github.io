---
title: ScienceDaily – One Paper a Day
summary: A native SwiftUI app for iOS and Mac that serves one recent arXiv paper a day, condensed to read over coffee, with home-screen widgets.
year: '2026'
context: Personal project
tags: [Swift, SwiftUI, iOS, macOS, WidgetKit]
highlights:
  - One SwiftUI codebase for iPhone and Mac, plus home and lock-screen widgets
  - Optional AI summaries via Claude, OpenAI or on-device Apple Intelligence
  - Reads Abstract, Introduction and Conclusion straight from the PDF on-device
repo: https://github.com/mikemich/scienced
featured: false
order: 17
---

## What it does

Every day the app picks one recent paper from the topics you choose (astro, quantum, AI/ML,
CS, maths, biology, materials, complexity, econ/finance). The pick is deterministic per day, so
the app and the widget always agree.

- **TL;DR mode**: a plain-English summary of what they found and why it matters.
- **Sections mode**: the paper's own Abstract, Introduction and Conclusion, extracted from the PDF on-device.
- **AI summaries are optional**, with your choice of engine: Claude, OpenAI, or fully on-device
  Apple Intelligence. API keys live in the Keychain, and summaries are cached.
- Small, medium, large and lock-screen **widgets**, and a history of past papers.

## Tech

SwiftUI and WidgetKit with an App Group shared between the app and widget, an arXiv Atom API
client with XML parsing, and a seeded RNG for the daily pick.
