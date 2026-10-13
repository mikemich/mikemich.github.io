---
title: Small-Scale EV – Speed Sensing & Rolling Resistance
summary: First-year automotive project. A Hall-sensor speedometer for our team's electric car, and coast-down tests to measure its rolling resistance for the driving strategy.
year: '2022'
context: TU/e Automotive Design-Based Learning · group project
tags: [Arduino, C++, Interrupts, Vehicle dynamics, Data analysis]
highlights:
  - Interrupt-driven Hall-sensor speed measurement, shown on an LCD and speed-coded LEDs
  - Coast-down tests on an 11.95 kg car to find the rolling-resistance coefficient
  - Measured c_r ≈ 0.0252, used for the tank-to-wheel energy analysis
repo: https://github.com/mikemich/Speed-measurement-system-and-led-control
featured: false
order: 8
---

## The challenge

In the first-year automotive Design-Based Learning project, each team built and tuned a small
electric car (Group 8) to complete a driving challenge as efficiently as possible. That meant
knowing the car's speed and the forces slowing it down.

## Speed measurement system

Written in Arduino C++ with a teammate:

- A **Hall-effect sensor** on the drivetrain triggers a rising-edge interrupt. The ISR only counts
  pulses, so timing stays accurate.
- Once a second the count is converted to motor RPM, then wheel RPM through the gear ratio, then km/h.
- Speed is shown on a **16×2 LCD**, and four RGB LED drivers (bit-banged clock, data and latch)
  change colour by speed band, so the driver can see at a glance whether they are on target.

## Vehicle optimisation

The team used CFD and MATLAB simulations to optimise the gearing, powertrain, drivetrain and body
of the RC-scale car, following the V-model from requirements to verification.

## Rolling-resistance measurement

Rolling resistance and air drag make up about 80% of the resistive forces on a vehicle, so the
team needed an accurate value for the energy budget and the driving strategy.

- **Method:** coast-down tests in the Markthal on campus, with the wheels decoupled from the motor,
  while an Arduino Due logged speed over time.
- **Analysis:** from the three cleanest runs, deceleration → total resistive force (F = m·a with
  m = 11.95 kg) → rolling-resistance force → coefficient c_r as a function of speed.
- **Result:** a mean **c_r ≈ 0.0252**, which fed into the tank-to-wheel efficiency analysis and the
  most efficient driving strategy around the lap.
