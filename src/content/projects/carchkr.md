---
title: carchkr – Used-Car Check for Dutch Plates
summary: A free, client-side web app and browser extension that turns Dutch government open vehicle data into a used-car report with ranked red flags for buyers.
year: '2026'
context: Personal project · private repository
tags: [JavaScript, Automotive, Open data, Browser extension, PWA]
highlights:
  - Red-flag rules for odometer verdicts, open recalls, imports, APK history and registration blocks
  - Licence-plate extractor that recognises the 14 official Dutch plate formats in pasted ad text
  - No backend and no tracking; 27 unit tests, including one that checks the data-licence wording
featured: false
order: 10.5
---

## What it is

Paid "car reports" for the Dutch market mostly resell data the government already publishes for
free. carchkr queries that open vehicle data (CC0) straight from the browser and puts buyer red
flags on top. You enter a licence plate (kenteken), or paste the text of a car ad, and get a report.
The app is in Dutch and English.

## What it checks

- **High:** an odometer verdict of "illogical" (now or earlier), a car that can't be registered to a new owner, an export, an expired APK, a removed particle filter or tachograph tampering, and open recalls rated high-risk.
- **Medium:** imports, detected when first registration in the Netherlands came more than 31 days after first admission, an import with no odometer verdict, an APK expiring within 60 days, no liability insurance, ex-taxi use, and no odometer reading for three years or more.
- **Info:** APK rejections in the last five years and an ownership change in the last 90 days.

The report also shows the full APK history with the defects found at each inspection, and the
recalls with their risk rating. From the flags it writes questions to send the seller, always
including a request for the free official vehicle report that only the owner can order.

## Other parts

- **Plate extraction:** matches the 14 official plate formats (sidecodes). Postcodes, phone numbers and model codes are ignored. When an ad contains several plates, you pick one.
- **Browser extension:** shows a verdict card on four Dutch car-listing sites. It reads only the page you have open, sends just the plate to the open-data API and stores nothing.
- **Statistics page:** open recalls, illogical odometers and imports by brand, model and build year, built from a few aggregate queries over about 9.5 million active passenger cars.
- **Privacy and security:** nothing is stored on a server, and the plate stays in the URL fragment. A strict Content-Security-Policy lets the page connect only to itself and the open-data API, and all API data is escaped before rendering.

## Tech

Plain JavaScript ES modules, with no build step and no dependencies. It's an installable PWA, set
up to deploy as static files on Cloudflare Workers. About 1,650 lines of application code plus unit
tests for the flag logic, plate parsing, seller questions and the data-licence wording rules.
