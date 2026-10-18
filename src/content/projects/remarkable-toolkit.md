---
title: rmpp – reMarkable Paper Pro Toolkit
summary: A safe toolkit for running custom software on the reMarkable Paper Pro e-ink tablet over SSH, including on-device hardware reconnaissance and a self-hosted dashboard.
year: '2026'
context: Personal project
tags: [Embedded Linux, SSH, Shell, Reverse engineering]
featured: false
order: 15
---

## What it is

The reMarkable Paper Pro runs a custom NXP-based embedded Linux, and its internals are barely
documented. This toolkit makes it easy and **safe** to run your own software on it: it talks to
the tablet over SSH and only ever writes to the user area, never the read-only root filesystem,
so it can't brick the device.

## Commands

- `rmpp probe`: **on-device reconnaissance** that maps the SoC, OS, framebuffer, input devices and installed frameworks
- `rmpp dashboard`: a custom app serving a web UI **from** the tablet, with live battery, storage and uptime and a front-light remote
- `rmpp light`, `push`, `run`, `backup` and an experimental framebuffer `screenshot`
- `rmpp doctor` for connection checks, and a guide to installing the community GUI framework safely
