# Comforty - E-Commerce Marketplace

## Table of Contents
- Overview
- Features
- Technologies Used
- Installation
- Usage
- Pages Overview
- API Integration Details
- Development Process
- Deployment
- Acknowledgments

## Overview
Comforty is a fully functional e-commerce marketplace developed during a 7-day hackathon. The project leverages modern technologies such as Next.js, Sanity CMS, and third-party APIs to provide a seamless shopping experience. It includes features like dynamic product listings, a search bar, add-to-cart functionality, shipping management, dynamic data handling, and secure payment processing.

## Features
- Dynamic homepage with featured products.
- Secure payment processing using Stripe.
- Shipping rates calculation.
- Label generation.
- Order tracking.
- Cart management.
- Search functionality.

## Technologies Used
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Sanity CMS
- **Payment:** Stripe API
- **Shipping:** ShipEngine API

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the required API keys for Stripe, ShipEngine, and Sanity.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
Navigate to: [Comforty Live](https://hck02.vercel.app/)
- Use the search bar to find products.
- Add items to your cart.
- Proceed to checkout for payment.
- Track your orders post-purchase.

## Pages Overview
- **Home:** Highlights featured products.
- **Product:** Detailed view of individual products.
- **Contact:** Get in touch with customer support.
- **About:** Learn more about our marketplace.
- **Cart:** Manage your selected items for checkout.
- **FAQ:** Commonly asked questions.

## API Integration Details
### Sanity CMS
- Fetch and display product and blog data.
- Handle dynamic stock updates.

### Stripe
- Secure payment processing.
- Post-payment stock updates.

### ShipEngine
- Generate shipping labels.
- Calculate shipping rates.
- Provide real-time order tracking.

## Development Process
### Day 1: Marketplace Business Goals
- Selected "General E-Commerce" as the marketplace type.

### Day 2: Marketplace Technical Foundation
- Set up the foundational architecture for an e-commerce platform.

### Day 3: API Integration and Data Migration
- Integrated Sanity CMS, Stripe, and ShipEngine APIs.
- Migrated sample data.

### Day 4: Building Dynamic Frontend Components
- Created dynamic pages for products, blogs, and categories.

### Day 5: Testing and Backend Integration Refinement
- Conducted thorough testing.
- Refined error handling.

### Day 6: Deployment Preparation
- Set up a staging environment.

## Deployment
The project has been deployed and is live at: [Comforty Live](https://hck02.vercel.app/)

## Acknowledgments
This project was made possible by the tools and APIs provided by:
- **Sanity CMS**
- **Stripe**
- **ShipEngine**

Thank you for exploring this project! If you have any feedback or suggestions, feel free to open an issue or reach out. 

