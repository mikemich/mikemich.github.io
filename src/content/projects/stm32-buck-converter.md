---
title: STM32 Buck Converter Control
summary: Firmware for a group-built DC-DC buck converter, with complementary PWM and dead-time, voltage and current sensing, UART telemetry and no-load protection.
year: '2025'
context: TU/e Challenge-Based Learning · group project
tags: [STM32, Embedded C, Power electronics, PWM, ADC]
role: 'Wrote all of the control firmware: PWM gate drive, sensing, protection and telemetry.'
highlights:
  - 50 kHz complementary PWM on TIM1 with configurable dead-time
  - Input voltage through a resistor divider and current from a LEM sensor on two ADCs
  - No-load protection that shuts down the PWM and flags the fault over UART
repo: https://github.com/mikemich/WET-CBL-9
featured: true
order: 1
---

## Overview

In a Challenge-Based Learning project our group built a DC-DC buck converter. I wrote the
control firmware for an **STM32F303K8** microcontroller, configured in STM32CubeMX and written in C on the HAL.

## What the firmware does

- **Gate drive:** complementary PWM from advanced timer TIM1 (CH2 and CH2N) at 50 kHz with
  configurable dead-time, so the high-side and low-side switches never conduct at the same time.
- **Sensing:** ADC1 measures the input voltage through a resistor divider (scaled in firmware back
  to the real voltage), and ADC2 reads a LEM current sensor.
- **Protection:** when the measured voltage shows the converter is running without a load, the duty
  cycle drops to zero, a fault output is raised and a warning is sent over UART. PWM resumes after a hold-off.
- **Telemetry:** live voltage and current readings over USART2 at 115200 baud.

## What I'd do next

Finish the current-sensor filtering (a moving average was started), and close the loop with a
voltage or MPPT controller. A perturb-and-observe duty-cycle sweep is already sketched in the code.
