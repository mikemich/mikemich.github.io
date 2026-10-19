---
title: appsassin – Stray Process Finder for macOS
summary: A Go terminal app that finds the processes and apps you forgot to close on a Mac, explains why each one looks forgotten, and shuts down the ones you pick.
year: '2026'
context: Personal project · open source (MIT)
tags: [Go, macOS, Terminal UI, Processes, cgo]
highlights:
  - Finds orphaned processes, helpers left behind by apps that quit, and apps with no windows
  - Every target gets a 0–99 score, and each point comes with a reason you can read
  - Universal binary built on each release tag, installable from my own Homebrew tap
repo: https://github.com/mikemich/appsassin
featured: false
order: 25
---

## What it is

Activity Monitor lists about 700 processes, most of them macOS internals. appsassin lists only
the strays: a dev server whose terminal was closed, a helper still running after its app quit,
an app with no windows that hasn't been used for hours. You mark targets and shut them down from
a terminal UI, or let a background mode do it.

## How it works

- **Detection:** orphans are processes that launchd adopted (parent PID 1), that aren't launchd jobs and that have no terminal. Leftover helpers live inside an `.app` bundle whose main app isn't running. Window counts come from CoreGraphics through cgo.
- **Scoring:** points for being an orphan, a dev runtime, idle, long-running, memory-heavy or listening on a port, and minus points for a visible or busy app.
- **Shutting down:** a process gets `SIGTERM` and then `SIGKILL`, together with its whole process tree. Apps get a normal quit request, so they can ask about unsaved work. Just before sending a signal, appsassin checks that the PID still belongs to the same executable, so a reused PID is never hit.
- **Safety:** it never touches anything owned by root or another user, system paths, launchd jobs, XPC services, the front app or anything attached to a terminal. It needs no extra macOS permissions.
- **Stealth mode:** a low-priority background sweep every 5 minutes, installable as a LaunchAgent. It acts only on high scores, and it closes an app only after watching it go unused for 6 hours.

## Tech

Go with Bubble Tea and Lip Gloss, plus a small Objective-C part for AppKit and CoreGraphics.
About 2,500 lines. CI runs `go vet`, a gofmt check, a build and a smoke test on macOS. A
release tag builds a universal binary for Apple Silicon and Intel, publishes it, and updates the
formula in my Homebrew tap, so `brew install mikemich/tap/appsassin` works.
