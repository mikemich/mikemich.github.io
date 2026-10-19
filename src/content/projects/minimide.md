---
title: minimide – Hackable Code Editor
summary: A small, Atom-style desktop code editor in about 6,700 lines of JavaScript, with plugins, LSP, a terminal and git built in.
year: '2026'
context: Personal project · open source (MIT)
tags: [JavaScript, Electron, CodeMirror, LSP, Desktop app]
cover: ../../assets/projects/minimide.jpg
highlights:
  - A 16-module core; every feature, including built-ins, is a plugin on the same public API
  - Language Server Protocol client with presets for TypeScript, Python, Rust, Go and C/C++
  - Sandboxed renderer, with all system access through a single preload bridge
  - Release CI that builds installers for macOS, Windows and Linux
repo: https://github.com/mikemich/minimide
featured: false
order: 14
---

## The idea

*The editor you can read in an afternoon.* Atom showed that an editor built entirely from
plugins is a joy to customise, but it grew too big to understand. minimide keeps that idea in a
codebase small enough to read end to end.

## Architecture

- **Small core:** commands, keymaps, config, a workspace with split panes and tabs, the editor,
  fuzzy matching, schema-driven settings, and a package loader that gives each plugin a scoped API.
- **Everything else is a plugin:** the 13 built-in packages load through the same API that third-party
  plugins use, and editing a plugin or config file reloads it live.
- **Security model:** the renderer has no Node.js access. Every system call goes through one preload
  bridge with context isolation and sandboxing, and plugins load from a custom `mide://` protocol.

## Features

- **LSP client:** completions, diagnostics, hover, go-to-definition, references, rename, code actions and formatting
- **Integrated terminal** (xterm.js and node-pty) and a **task runner** for npm, Make and Cargo
- **Git:** branch switcher, file status, and gutter change markers from its own Myers diff implementation
- File tree, fuzzy finder, command palette, project-wide regex find and replace, Markdown preview and three themes

## Published plugins

I also wrote and published three small third-party plugins against the public plugin API. Each
runs sandboxed and asks for no permissions:

- **[Insert](https://github.com/mikemich/minimide-insert):** inserts a UUID, the date or time, a timestamp, a random password or lorem ipsum, from a picker that previews each one
- **[Word Goal](https://github.com/mikemich/minimide-word-goal):** shows the word count of the current file against a goal in the status bar
- **[Pomodoro](https://github.com/mikemich/minimide-pomodoro):** a 25/5-minute focus timer in the status bar, with configurable lengths

## Tech

Electron, CodeMirror 6 and Lezer, xterm.js, esbuild and electron-builder, with GitHub Actions
building and publishing installers on every tagged release. The plugin API is fully documented.
