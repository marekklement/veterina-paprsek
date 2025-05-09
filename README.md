# Veterina Paprsek Website

This repository contains the source code for the [Veterina Paprsek](https://www.veterinapaprsek.cz) website - a veterinary clinic located in Prague 5, Stodůlky.

## Technical Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Content Management**: [Netlify CMS](https://www.netlify.com/)
- **Deployment**: [Netlify](https://app.netlify.com/)
- **Custom Theme**: "veterina" (custom-built theme for this project)
- **Languages**: HTML, CSS, JavaScript
- **Content Format**: Markdown and JSON

## Local Development

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (for Netlify CMS preview)

### Setup and Run

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/veterina-paprsek.git
   cd veterina-paprsek
   ```

2. Start the Hugo development server:
   ```
   hugo server -D
   ```

3. View the site at http://localhost:1313/

### Content Structure

- **Content**: All content is stored in the `content/` directory, organized by sections:
  - `aktuality/`: News and updates
  - `kolektiv/`: Team members
  - `popup.md`: Popup notifications for the main page

- **Data**: Dynamic data like service schedules are stored in `data/sluzby.json`

## Content Management with Netlify CMS

The site uses Netlify CMS for content management, allowing non-technical users to update content through a user-friendly interface.

- **Admin Panel**: Available at https://www.veterinapaprsek.cz/admin/
- **Authentication**: Uses Netlify Identity for secure access

### Managed Content Types

- Main page popup notifications
- Team members
- News/updates
- Service schedules

## Deployment

The site is deployed on Netlify with continuous deployment:

1. Changes pushed to the master branch trigger automatic builds
2. Netlify builds the site using Hugo and deploys it
3. Content editors can publish changes directly through the CMS

### Deployment Configuration

- **Build Command**: `hugo --minify`
- **Publish Directory**: `public`
- **Hugo Version**: Set in Netlify build settings

## Useful Links

- **Live Website**: [www.veterinapaprsek.cz](https://www.veterinapaprsek.cz)
- **Admin Panel**: [www.veterinapaprsek.cz/admin](https://www.veterinapaprsek.cz/admin)
- **Hugo Documentation**: [gohugo.io/documentation](https://gohugo.io/documentation/)
- **Netlify CMS Documentation**: [https://docs.netlify.com/](https://www.netlifycms.org/docs/intro/)

## Benefits of Using Netlify

This project leverages Netlify for several key advantages:

- **Continuous Deployment**: Automatic builds from Git
- **Content Management**: Integrated Netlify CMS for easy content updates
- **Form Handling**: Contact form submissions without server-side code
- **Identity Service**: User authentication for the admin panel
- **Fast Global CDN**: Optimized content delivery
- **SSL Certificates**: Automatic HTTPS with Let's Encrypt
- **Branch Previews**: Test changes before merging to production

## Contact

For questions about the website, contact:
- **Email**: ordinace@veterinapaprsek.cz
- **Phone**: +420 777 033 353
- **Address**: Hostinského 1076/8, 155 00 Praha 5