# Abhay — Data Analyst & Business Intelligence Portfolio

A modern, high-performance, responsive portfolio website built specifically for entry-level **Data Analyst**, **Junior Business Intelligence Analyst**, **SQL Analyst**, and **Power BI Analyst** roles.

---

## 🌟 Key Features

- **Recruiter-Friendly Design**: Clean analytics aesthetic (off-white / slate, deep navy typography, and teal/brand accents) with light and dark mode toggles.
- **Hero Section**: Includes headline *"Turning Data Into Insights. Helping Businesses Make Better Decisions."*, concise positioning statement, verified links, and an interactive sample analytics dashboard preview.
- **All 7 Projects Documented**:
  1. **Retail Customer Retention Analytics** (Power BI, DAX, Power Query)
  2. **Logistics Optimization for Delivery Routes** (SQL, MySQL, CTEs, paired with [fulfillment-hub](https://github.com/PortgsDace/fulfillment-hub))
  3. **Financial Risk Analysis with Python** (Python, Pandas, Anomaly Detection)
  4. **Predictive Modelling on Web-Scraped Data** (Python, Scikit-learn, Power BI)
  5. **Market Basket Analysis with Python** (Python, Pandas, Association Discovery)
  6. **Social Media Analytics for Strategic Branding** (Microsoft Excel, ROI & Correlation)
  7. **VoteSetu — Decentralized Voting Application** (React, Solidity, Ethereum, [btech-final-project](https://github.com/PortgsDace/btech-final-project))
- **Interactive Case-Study Modals**: Multi-tab deep-dives for every project covering Business Objective, Dataset Schema, Cleaning Pipeline, Technical Code/DAX/SQL, Key Findings, and Actionable Recommendations.
- **Interactive SQL Sandbox**: Live in-browser SQL query runner and Power BI DAX simulator.
- **Strict Integrity & QA Audit Table**: Complete transparency table auditing all repository links, companion repos, and internal case studies.
- **ATS Resume Download & Preview**: Downloads the authentic `Abhay_Data_Analyst_Resume.pdf` and provides an in-browser printable ATS resume view.
- **Verified Education**: B.Tech CSE (78.00%, CGPA: 7.25) and Senior Secondary Class XII (92.20%) — *10th matriculation omitted per user specification*.

---

## 🛠️ Tech Stack

- **Framework**: React 18 / 19 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom analytics tokens & dark mode
- **Icons**: Lucide React & custom SVG brand icons

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## 🚢 Deployment Instructions

### Option 1: GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete data analyst portfolio for Abhay"
   git branch -M main
   git remote add origin https://github.com/PortgsDace/Abhay-s-Portfolio.git
   git push -u origin main --force
   ```
2. Enable GitHub Pages in repository settings pointing to GitHub Actions or the `gh-pages` branch.

### Option 2: Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
