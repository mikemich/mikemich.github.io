---
title: Air Particle & Heat Simulation
summary: A real-time SPH fluid simulation in C with 12,000 air particles, metal heat conduction, convection and interactive wind, heat and obstacle tools.
year: '2026'
context: Personal project
tags: [C, SDL2, CFD, Heat transfer, Simulation]
highlights:
  - 12,000-particle Smoothed Particle Hydrodynamics solver with an O(N) spatial-hash neighbour search
  - 'Coupled heat transfer: conduction through metal, air–metal convection and buoyancy'
  - Velocity, pressure, temperature and density views, with vortex shedding behind obstacles
featured: true
order: 5
---

## What it is

An interactive air-flow and heat-transfer sandbox written from scratch in C with SDL2. You
place wind emitters, metal blocks, heat sources and walls, and watch the air respond in real
time: hot air rising into convection columns, metal bars conducting heat, and vortices
shedding in the wake of obstacles.

## Physics

- **SPH** (Smoothed Particle Hydrodynamics) with a 16 px kernel and a spatial hash grid for O(N) neighbour lookups
- **Pressure** from density deviation against rest density (Becker & Teschner model)
- **Viscosity** impulses between converging particle pairs
- **Buoyancy**: a temperature-dependent vertical force, so hot air rises
- **Heat diffusion** through metal objects (Laplacian on the object grid each frame)
- **Air–metal convection**: particles touching metal exchange heat in both directions
- **Heat sources**: fixed-temperature cells that keep energising touching particles
- Small turbulence noise for realistic mixing

## Visualisation

Cycle between **velocity** (hue = direction, brightness = speed), **pressure**
(compression vs rarefaction), **temperature** (black → white-hot at 1300 K) and **density**.

## Try this

Put a heat source at the bottom, a metal bar on top of it and an obstacle mid-screen, then
switch to the temperature view: you'll see convection columns, cooling at the top and
vortex shedding behind the obstacle.

<!-- TODO: add a screenshot or GIF of the simulation running. -->
