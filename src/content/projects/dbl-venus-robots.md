---
title: Venus Exploration Robots
summary: Two autonomous robots that explore a simulated Venus surface, avoid craters and mountains, and bring rock samples back to the lab.
year: '2023'
context: TU/e Design-Based Learning · group project
tags: [Robotics, Embedded, OpenCV, ESP-NOW, State machines]
featured: true
order: 5
---

## The challenge

Design two cooperating robots that search an unknown "Venus" terrain for rock samples and return
them to a lab base, without driving into craters, off the boundary or into mountains.

## System design

- **Vision:** OpenCV object detection to find samples.
- **Sensing:** infrared and ultrasound sensors to tell rocks from mountains, and light sensors to
  detect black craters and the boundary of the terrain.
- **Communication:** the two robots coordinate over **ESP-NOW**, a low-latency peer-to-peer wireless protocol.
- **Software architecture,** split into modules:
  - Motion control for driving the wheels
  - Sensor control to turn raw readings into obstacles and boundaries
  - Communication between the two robots
  - An autonomy state machine for high-level decisions
  - Grip control for the claw that picks up samples
- **Hardware:** boundary and obstacle sensor testing, a custom claw, and base detection for the return trip.

## My part

I presented the team's design progress, which covered the route algorithm and communication
protocol, boundary and obstacle detection, and the claw.

<!-- TODO: say which modules you personally built, and add photos of the robots. -->
