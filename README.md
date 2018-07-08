# Restaurant Reviews App - Stage 1
---
#### This project consists of three stages, and the goal is to incrementally convert a static webpage to a mobile-ready web application.

## Project Overview: Stage 1

### Run locally
Download the repository: click download ZIP on the right of the screen and extract the zip file to your computer or clone the repository using Git.
Navigate to where you unzipped the file or cloned the repository.
In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. However, if you don't have Python installed, navigate to Python's website to download and install the software.
Set up yor server with Python
In a terminal, check the version of Python you have:

python -V

If you have Python 2.x, spin up the server with

python -m SimpleHTTPServer 8000

This project uses port 8000.
For Python 3.x, you can use python3 -m http.server 8000 or py -m http.server 8000

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Visit the site
With your server running, in your browser, navigate to the site: http://localhost:8000

Check out the website! For bonus points: in Dev Tools, disconnect the internet or set the throttling to a low Internet speed to check out the offline experience of the app!

## Tasks of stage 1 
### Responsiveness and Accessibility
In Stage One, we took a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use.

The project follows best practices of A11Y, implementing ARIA and semantic HTML. 

