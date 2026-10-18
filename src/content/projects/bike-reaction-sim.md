---
title: Cyclist Reaction-Time Simulator
summary: A browser experiment that measures how quickly cyclists notice an overtaking bike, with and without a rear-approach warning light.
year: '2025'
context: Personal project · research tool
cover: ../../assets/projects/bike-sim.jpg
tags: [JavaScript, Canvas, Simulation, Human factors, Cycling safety]
highlights:
  - Randomised trials, half with the warning light enabled and half without
  - Adjustable speeds, detection distance and closing-speed threshold
  - Detection events and reactions exported as CSV for analysis
repo: https://github.com/mikemich/Bike-reaction-time-sim
featured: false
order: 20
---

## What it is

A self-contained simulation for testing a **rear-detection warning light for bicycles**. A
top-down scene shows your bike being overtaken from behind. The approaching bike stays invisible
until it is alongside, so the only early cue is the warning light.

## How it works

- **Detection logic:** the light turns on when the other bike is behind, within the detection
  distance, and closing faster than a threshold, the same rule a real radar or ultrasonic unit would use.
- **Experiment design:** each trial randomly enables or disables the light (50/50), and the
  participant presses Space as soon as they notice the overtake.
- **Controls:** sliders for your speed, the other bike's speed, detection distance and closing-speed threshold.
- **Data:** every detection edge and reaction is logged and exported as **CSV** to compare reaction
  times with and without the light.

## Tech

One HTML file with vanilla JavaScript and Canvas 2D, and no dependencies. The simulation runs on a
`requestAnimationFrame` loop with a clamped timestep so it behaves the same on any machine.
