---
title: Peltier Thermal Therapy Device
summary: A hot-and-cold therapy device for joint and back relief, taken from concept through prototypes to a final build, a business case and a pitch.
year: '2023'
context: TU/e product design course (4WWB0) · group project
tags: [Product design, Arduino, Thermal control, Peltier, Prototyping]
highlights:
  - Heating holds 41–45 °C; Peltier cooling holds 10–14 °C
  - Arduino Nano on/off control with hysteresis and three temperature sensors
  - Full product cycle including logistics analysis, marketing campaign and final pitch
repo: https://github.com/mikemich/4WWB0-Design
order: 15
---

## Overview

A product-design project to create a device that applies controlled heat or cold to sore joints
and backs. We went through the full product cycle: concept, prototypes, a final build, a
logistics analysis, a marketing campaign and a final pitch.

## Control electronics

- An **Arduino Nano** reads three analog temperature sensors.
- A switch selects **hot** or **cold** mode.
- **On/off control with hysteresis:** a heater holds the hot side at 41–45 °C and a **Peltier
  element** holds the cold side at 10–14 °C, without chattering around the setpoint.
- Temperatures are logged over serial for testing.

<!-- TODO: add photos of the prototype and final device. -->
