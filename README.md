# Fabriq Data Website - Repository Documentation

## Project Overview

This is a static HTML website for **Fabriq**, a data consultancy company focused on technology leadership, process transformation, and engineering services. The website is built on the **GenAI** template (an AI Content Writing & Copywriting HTML5 Landing Page Template by Marvel Theme) and customized for Fabriq's data transformation and AI readiness services.

**Domain**: `fabriqdata.com` (configured via CNAME file)

**Company Focus**: Data consultancy specializing in:
- Data transformation and AI readiness
- Centralized and connected data
- Self-serve access and semantic framework
- Data activation, ML and AI readiness
- Modern data stack implementation

---

## Technology Stack

### Core Technologies
- **HTML5** - Static HTML pages
- **CSS3** - Custom styling (35,975 lines in main stylesheet)
- **JavaScript (Vanilla)** - Custom functionality
- **Bootstrap 5.3.0-alpha3** - CSS framework for responsive design
- **PHP** - Contact form backend (minimal usage)

### JavaScript Libraries & Plugins
1. **AOS (Animate On Scroll) v2.3.4** - Scroll animations
2. **Swiper 9.2.3** - Touch slider/carousel
3. **VenoBox 2.0.4** - Lightbox/popup for videos and images
4. **Typed.js** - Typing animation effect
5. **Headroom.js** - Sticky navbar behavior
6. **PostHog** - Analytics tracking (API key: `phc_PIa24j6n4B2noaTSB5C6TEcTHjgSBvZn58NI9AMI095`)

### CSS Framework
- **Bootstrap 5** - Grid system, components, utilities
- **Custom CSS** - Extensive custom styling in `style.css`
- **Google Fonts** - Space Grotesk font family

---

## File Structure

```
fabriqdata.com/
├── index.html                    # Main homepage (customized for Fabriq)
├── index-2.html                  # Alternative homepage variant
├── index-dark.html               # Dark theme variant
├── about.html                    # About page
├── contact.html                  # Contact page
├── blog.html                     # Blog listing page
├── article.html                  # Blog article page
├── use-cases.html                # Use cases page
├── use-cases-details.html        # Use case details page
├── pricing-plan.html             # Pricing page
├── login.html                    # Login page
├── register.html                 # Registration page
├── forgot-password.html          # Password recovery page
├── 404.html                      # Error page
├── *-lite.html                   # Light theme variants of all pages
├── CNAME                         # GitHub Pages domain configuration
│
├── assets/
│   ├── css/
│   │   ├── plugins.css           # Third-party plugin styles (AOS, Swiper, VenoBox)
│   │   ├── style.css             # Main stylesheet (35,975 lines)
│   │   └── style.css.map         # Source map
│   │
│   ├── js/
│   │   ├── plugins.js            # Bundled third-party JavaScript libraries
│   │   └── main.js               # Custom JavaScript functionality
│   │
│   ├── php/
│   │   └── contact_email.php     # Contact form handler (needs email config)
│   │
│   └── images/
│       ├── fabriq_logo.png       # Company logo
│       ├── main_theme.jpg        # Hero section image
│       ├── favicon.svg           # Site favicon
│       │
│       ├── fabriq/               # Fabriq-specific images
│       │   ├── Data engineering and consulting v2.png
│       │   └── engagement model.png
│       │
│       ├── illustrations/         # Feature illustrations (blue/dark/yellow variants)
│       ├── shapes/               # Decorative SVG shapes
│       ├── tools-images/         # Integration logos (Google, Instagram, Slack, etc.)
│       ├── screens/              # Screenshot images
│       ├── team/                 # Team member photos
│       ├── review/               # Review/testimonial images
│       ├── brands/               # Brand logos
│       ├── blog/                 # Blog images
│       ├── icons/                # Icon files
│       └── thumbnails/           # Thumbnail images
```

---

## Key Features & Sections

### Homepage (`index.html`)

1. **Hero Section**
   - Main headline: "We assist in data transformation and AI readiness"
   - Animated typing text with multiple strings:
     - "Centralised and connected data"
     - "Self-serve access and semantic framework"
     - "Data activation, ML and AI readiness"
   - Call-to-action buttons linking to email (`hello@fabriqdata.com`)
   - Main theme image

2. **Features Section** (6 main features with IDs `feature-1` through `feature-6`)
   - **Feature 1**: "Is it the right time for a modern data platform?"
   - **Feature 2**: "The transformation journey"
   - **Feature 3**: "Consulting & Strategic Services"
   - **Feature 4**: "Technology and Engineering services"
   - **Feature 5**: "Data as managed service"
   - **Feature 6**: "About team"

3. **Use Cases Section**
   - Integration logos display (Google, Instagram, Slack, Pinterest, Facebook, Spotify, YouTube, AdWords, Stripe)
   - Text: "Existing tech stack investments leveraged with Fabriq's out-of-the-box integrations for over 100+ tools and platforms."

4. **Footer**
   - Company branding
   - Navigation links to feature sections
   - Email contact button
   - Copyright: "© 2023 fabriq labs, Inc"

### Navigation
- Fixed top navbar with scroll behavior
- Logo: "Fabriq" text + logo image
- Menu items: Home, "Know more" (links to #features)
- "Get started" button (email link)

---

## Customization Points

### Branding
- **Company Name**: Fabriq
- **Logo**: `assets/images/fabriq_logo.png`
- **Email**: `hello@fabriqdata.com` (used in multiple CTA buttons)
- **Domain**: `fabriqdata.com`

### Color Scheme
The template uses CSS custom properties (variables) defined in `style.css`:
- Primary: `#6a4dff` (purple/blue)
- Yellow accent: `#e6f85e`
- Dark backgrounds: Various shades of dark blue (`#11121c`, `#171825`, etc.)
- Light backgrounds: Light blue variants

### Contact Form
- **Location**: `assets/php/contact_email.php`
- **Current recipient**: `marveltheme@gmail.com` (needs to be updated to Fabriq email)
- **Form fields**: name, email, phone, message
- **Validation**: Basic email validation and required field checks

### Analytics
- **PostHog** integration in `index.html` (head section)
- API key is hardcoded in the HTML

---

## JavaScript Functionality

### Main Features (`assets/js/main.js`)

1. **AOS (Animate On Scroll)**
   - Initialized with custom settings
   - Offset: 120px
   - Duration: 600ms
   - Easing: cubic-bezier(0.77, 0, 0.175, 1)
   - Animate once: true

2. **Typing Animation**
   - Uses Typed.js library
   - Applied to elements with class `.typed-animation`
   - Type speed: 80ms
   - Back speed: 40ms
   - Loop: true

3. **Video Popup**
   - VenoBox for video lightbox functionality
   - Selector: `.video-play-btn`

4. **Pricing Switch**
   - Toggle between pricing tiers
   - Uses class toggling

5. **Review Carousels**
   - Swiper.js implementation
   - Multiple carousel types:
     - Standard review carousel
     - Rolling carousel (continuous scroll)
     - Reversed rolling carousel

6. **Contact Form**
   - AJAX form submission
   - XMLHttpRequest to PHP backend
   - Success/error message display

7. **Sticky Navbar**
   - Headroom.js for scroll-based navbar behavior
   - Pins/unpins based on scroll direction
   - Auto-collapse on mobile when scrolling

---

## Dependencies Summary

### External Libraries (Bundled in `plugins.js`)
- Bootstrap 5.3.0-alpha3
- Swiper 9.2.3
- AOS 2.3.4
- VenoBox 2.0.4
- Typed.js
- Headroom.js

### External Services
- PostHog Analytics
- Google Fonts (Space Grotesk)

### Server Requirements
- **PHP** (for contact form functionality)
- **Web server** (Apache/Nginx) or static hosting (GitHub Pages, Netlify, etc.)

---

## Deployment

### GitHub Pages
- **CNAME file** present, pointing to `fabriqdata.com`
- Static HTML files can be served directly
- PHP contact form will need server-side processing (not available on GitHub Pages)

### Recommended Hosting Options
1. **Static hosting** (GitHub Pages, Netlify, Vercel) - For static files only
2. **Traditional web hosting** - If PHP contact form is needed
3. **Serverless functions** - For contact form (Netlify Functions, Vercel Functions)

### Contact Form Considerations
- Current PHP form requires server-side PHP support
- Alternative: Use third-party form service (Formspree, Netlify Forms, etc.)
- Or convert to JavaScript-based solution with API endpoint

---

## Page Variants

The site includes both regular and "lite" (light theme) versions:
- `*-lite.html` files are light theme variants
- Regular files use dark theme by default
- `index-dark.html` is an explicit dark theme variant

---

## Custom Content Highlights

### Service Offerings (from homepage)
1. **Data Platform Readiness Assessment**
   - User acquisition and lifetime value management
   - Data resource discovery and access
   - Real-time reporting capabilities
   - Data system infrastructure updates
   - Customer understanding

2. **Transformation Journey**
   - Single source of truth
   - Modern data stack with connected data
   - Insights & access with semantic core and APIs
   - ML & AI readiness

3. **Consulting Services**
   - Use case prioritization
   - Technical deep dives
   - Infrastructure reviews
   - Data roadmap and strategy
   - Architecture and pipeline building

4. **Technology & Engineering**
   - Core data model and architecture
   - Tools selection
   - Implementation
   - SQL querying and API access

5. **Managed Services**
   - Team maintenance support
   - Roadmap updates
   - New capability implementation
   - Infrastructure management
   - Training

6. **Team**
   - Entrepreneurial experience
   - Data engineering expertise
   - Product/platform development
   - Growth experience across industries
   - Past client deployments

---

## Important Notes

1. **Contact Form Email**: The PHP contact form currently sends to `marveltheme@gmail.com` - needs to be updated to Fabriq's email address.

2. **PostHog Analytics**: Analytics tracking is active with a hardcoded API key.

3. **Email Links**: All "Get started" and "Connect with us" buttons use Gmail compose links pointing to `hello@fabriqdata.com`.

4. **Large CSS File**: The `style.css` file is 35,975 lines - consider optimization or splitting for better maintainability.

5. **Template Origin**: Based on GenAI template - some template branding may still exist in unused pages.

6. **No Build Process**: This is a static site with no build/compilation step required.

---

## Future Modification Recommendations

1. **Update Contact Form**: Change recipient email in `contact_email.php`
2. **Optimize CSS**: Consider splitting or minifying the large stylesheet
3. **Add Build Process**: Consider adding a build tool (Webpack, Vite) for optimization
4. **Environment Variables**: Move API keys and configuration to environment variables
5. **Form Service**: Consider replacing PHP form with a service like Formspree for easier deployment
6. **Image Optimization**: Optimize images for web performance
7. **SEO Enhancement**: Add more comprehensive meta tags and structured data

---

## Contact Information

- **Email**: hello@fabriqdata.com
- **Domain**: fabriqdata.com
- **Company**: fabriq labs, Inc

---

*Last Updated: Based on repository analysis*
*Template: GenAI by Marvel Theme (v1.1)*

