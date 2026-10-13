---
title: COVID Greece Dashboard
summary: A Flask web app with live COVID-19 statistics and an interactive timeline for Greece, in Greek.
year: '2020'
context: Personal project · revived 2026
tags: [Python, Flask, REST API, Chart.js, Data visualisation]
highlights:
  - Live data from a public API, cached for an hour with a 10-second timeout
  - Falls back to bundled data snapshots when the API is down
  - Interactive Chart.js timeline of cases, deaths and recoveries
repo: https://github.com/mikemich/covidgreece.com
order: 17
---

## Overview

A small dashboard that presents Greece's COVID-19 numbers clearly, in Greek. It started in 2020 on the api.covid19api.com
API. When that service shut down I revived it in 2026 on the disease.sh API, with a sturdier backend.

## What it does

- **Backend (Flask):** fetches the Greece summary and the full case history, caches responses for
  an hour, and times out after 10 seconds. If the API fails it serves bundled JSON snapshots, so
  the page never breaks.
- **Data handling:** works out total recoveries from the timeline peak, because recovery reporting
  stopped in 2021.
- **Front end:** four stat tiles (new cases today, recovered, total cases, deaths) and a Chart.js
  line chart of cases, deaths and recoveries over time, in a responsive Bootstrap 5 layout.

## Tech

Python, Flask with Jinja2 templates, requests, Chart.js and Bootstrap 5.
