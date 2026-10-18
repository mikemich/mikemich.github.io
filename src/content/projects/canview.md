---
title: canview – CAN Bus Analyzer
summary: A terminal tool for watching a vehicle CAN bus live and decoding its signals from a DBC file.
year: '2026'
context: Personal project
cover: ../../assets/projects/canview.svg
tags: [Rust, CAN bus, SocketCAN, DBC, Automotive]
highlights:
  - Live capture over SocketCAN, candump log replay at adjustable speed, and a demo mode
  - Own DBC parser decoding Intel and Motorola byte order with scaling and units
  - Per-ID message rates, a signal view and a bus-load sparkline in the terminal
repo: https://github.com/mikemich/canview
featured: true
order: 2
---

## Why

Inside a car, the ECUs talk over CAN. Tools like candump show raw frames and commercial tools
like CANalyzer decode them, but I wanted something lightweight that does both in a terminal and
works on any Linux machine with a CAN interface.

## What it does

- **Three frame sources behind one async interface:** live capture from a SocketCAN interface
  (including virtual `vcan`), replay of `candump` logs with a speed multiplier, and a demo mode
  that generates traffic.
- **DBC decoding:** a hand-written parser for DBC files that extracts signals bit by bit in both
  Intel (little-endian) and Motorola (big-endian) byte order, then applies scale, offset and units.
  It ships with a sample vehicle database covering engine, transmission, ABS, airbag and HVAC messages.
- **Terminal UI (ratatui):** a live frame stream, a per-ID table with message count and colour-coded
  frequency, a decoded-signals pane, a bus-load sparkline and a help overlay.
- **CLI:** `canview live can0`, `canview replay log.txt --speed 2`, `canview demo`, each with an optional `--dbc` file.

## Tech

Rust with tokio for async I/O, the `socketcan` crate, ratatui and crossterm for the UI, and clap
for the command line. About 1,300 lines across CAN, DBC and UI modules.
