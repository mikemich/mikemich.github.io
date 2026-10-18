---
title: lightsysmon – System Monitor
summary: A lightweight Rust command-line tool and terminal dashboard for live CPU, memory, disk, network and process monitoring.
year: '2026'
context: Personal project
tags: [Rust, CLI, Linux, macOS, GitHub Actions]
highlights:
  - Live terminal dashboard plus plain-text, JSON and CSV output modes
  - CPU and memory threshold alerts, configurable in a TOML file
  - Automated release builds for macOS ARM64 and Linux x86_64
repo: https://github.com/mikemich/lightsysmon
featured: false
order: 16
---

## What it does

- **Subcommands:** `watch` for continuous monitoring, `snapshot` for a one-off reading, `top` for
  processes, `info` for system details, and shell completions for bash, zsh, fish and PowerShell.
- **Two front ends:** a ratatui dashboard with gauges and tables that restores the terminal cleanly
  even after a crash, and plain output as text, JSON or CSV for logging and scripting.
- **Alerts:** configurable CPU and memory thresholds, set in `~/.config/lightsysmon/config.toml`.
- **Interactive mode:** a menu when no subcommand is given.

## Tech

Rust with sysinfo for metrics, ratatui and crossterm for the dashboard, and clap for the CLI.
A GitHub Actions workflow builds and publishes binaries for every tagged release.
