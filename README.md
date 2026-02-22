# Recruiter Finder

A modern recruiter contact discovery web application that helps users find publicly available hiring contacts and company career pages by simply searching for a company name.

The project combines a curated recruiter contact dataset with live company lookup to create a fast, clean, and interactive search experience without requiring login, signup, or backend infrastructure.

---

## Live Demo

https://recruiterfinder.vercel.app

---

## Features

* Live company search
* Verified Hiring Contact badge system
* Expandable company information cards
* Copy-to-clipboard email functionality
* Company logos with automatic fallback handling
* Company location lookup (live data enrichment)
* Optional company phone number display
* Smooth animations and modern UI
* Fully client-side application
* No authentication required

---

## How It Works

The application uses a **hybrid data architecture**:

### 1. Local Dataset (`data.json`)

Contains verified public hiring contacts including:

* Recruitment email addresses
* Hiring team information
* Official career page links
* Public company phone numbers (where available)

Companies in this dataset are marked with a **Verified Hiring Contact** badge.

### 2. Live Company Lookup

Company information is dynamically fetched using:

* **Clearbit Company Autocomplete API**

  * Company name
  * Domain
  * Logo

### 3. Location Enrichment

Company headquarters location is retrieved using:

* **OpenStreetMap Nominatim API**

  * Organization-level location data

This hybrid approach allows real-time discovery while maintaining verified recruiter information.

---

## Tech Stack

* HTML5
* CSS3 (modern responsive UI + animations)
* Vanilla JavaScript (ES6)
* Client-side JSON database
* Clearbit Company Autocomplete API
* OpenStreetMap Nominatim API
* Vercel (deployment)

No backend server or authentication system is required.

---

## Project Structure

recruiter-finder/

│
├── index.html
├── style.css
├── script.js
├── data.json
├── LICENSE
└── README.md

---

## Running the Project Locally

Because the application loads data using `fetch()`, it must run through a local web server.

### Using VS Code (Recommended)

1. Install the **Live Server** extension in VS Code
2. Open the project folder
3. Right click `index.html`
4. Select **Open with Live Server**

The application will open at:

http://127.0.0.1:5500

---

## Deployment

The website is deployed using **Vercel**.

Every push to the `main` branch automatically triggers a new deployment.

### Deployment Workflow

1. Update project locally
2. Commit changes
3. Push to GitHub
4. Vercel automatically redeploys

---

## Data Disclaimer

All recruiter contact information displayed is sourced from publicly available company hiring pages.
This project does not scrape, collect, or distribute private personal data.

---

## Future Improvements

* Smart search ranking
* Fuzzy search support
* Dark mode toggle
* Company popularity indicators
* Dataset expansion tools
* Admin verification workflow

---

## Author

Built as a frontend portfolio project demonstrating modern UI/UX design, asynchronous JavaScript, API integration, and real-world deployment workflow.
