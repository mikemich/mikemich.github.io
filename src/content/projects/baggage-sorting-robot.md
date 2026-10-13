---
title: Automated Luggage-Sorting Conveyor
summary: A T-shaped conveyor that identifies and routes luggage for airports, with Arduino low-level control and Raspberry Pi high-level logic talking over serial.
year: '2024'
context: TU/e embedded systems project · team of students
tags: [Embedded, Arduino, Raspberry Pi, C, Python]
highlights:
  - T-shaped layout with 2 belts, 5 sensors and an elevator that rejects faulty items
  - C on the Arduino for real-time control, Python on the Raspberry Pi for decisions
  - Team development on GitHub with pull-request reviews
order: 16
---

## Overview

An embedded-systems team project (April–June 2024) to automate baggage sorting at an airport:
items travel along a conveyor, are detected and classified by sensors, and are routed to the
right destination. Faulty items are rejected by an elevator.

## System

- **Mechanics:** a T-shaped conveyor with two belts and an elevator for rejected items.
- **Sensing:** five sensors along the line to detect and classify items.
- **Two-level control:** an Arduino running C handles the low-level, timing-critical control
  (motors, sensors), and a Raspberry Pi running Python makes the high-level routing decisions. The
  two communicate over a serial link.
- **Teamwork:** the code lived in a shared GitHub repository, with features merged through
  reviewed pull requests.
- Delivered with documentation, an interim presentation and a final pitch.

<!-- TODO: add photos and the parts you personally built. -->
