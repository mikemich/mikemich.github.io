---
title: Tuiverse – A Universe of Terminal Apps
summary: A plugin-based terminal shell in Go that wraps services like Hacker News, Reddit, Spotify, GitHub and weather into one keyboard-driven interface.
year: '2026'
context: Personal project
tags: [Go, Bubble Tea, TUI, Plugins]
order: 12
---

## What it is

One launcher that hosts **adapters**, each wrapping a service or data source in the same
consistent, keyboard-driven terminal interface. You can read Hacker News, browse Reddit,
control Spotify, triage GitHub work and check the weather without leaving the terminal or
learning five different sets of keybindings.

## Features

- A launcher with every adapter as a card, fzf-style fuzzy search, and a `:` command palette
- A consistent visual language and a persistent status bar, with truecolor degrading gracefully to 256 or 16 colours
- A plugin architecture: adapters implement a small interface and plug into the shell

Built in Go with Bubble Tea and Lip Gloss.
