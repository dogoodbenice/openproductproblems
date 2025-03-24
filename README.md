
# Open Product Problems

A curated collection of real-world product challenges to sharpen your product management skills and prepare for interviews.

## About this Project

Open Product Problems provides a platform for product managers, aspiring PMs, and product teams to practice with authentic product scenarios. The problems span various industries, difficulty levels, and product areas to provide a comprehensive training ground for product professionals.

## Features

- Browse through a collection of product problems
- Filter problems by difficulty and categories
- View detailed problem descriptions and suggested approaches
- Access community solutions
- Submit your own solutions and problems
- Mobile-friendly responsive design

## Local Development

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Setup

1. Clone the repository
```sh
git clone https://github.com/yourusername/open-product-problems.git
```

2. Navigate to the project directory
```sh
cd open-product-problems
```

3. Install dependencies
```sh
npm install
# or
yarn install
```

4. Start the development server
```sh
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173/`

## Deploying to GitHub Pages

This application is configured to be easily deployed to GitHub Pages. Follow these steps to deploy your own instance:

### 1. Create a GitHub Repository

If you haven't already, create a new repository on GitHub.

### 2. Configure your project

1. In your project's `package.json`, add the following:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install the `gh-pages` package:

```sh
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

### 3. Build and Deploy

Run the following command to build and deploy your application:

```sh
npm run deploy
# or
yarn deploy
```

This will create a `gh-pages` branch in your repository with the built application.

### 4. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. In the "Source" section, select the `gh-pages` branch
4. Save the changes

Your site should now be published at `https://yourusername.github.io/your-repo-name`

### 5. Custom Domain (Optional)

If you want to use a custom domain:

1. In the GitHub Pages settings, enter your custom domain
2. Create a `CNAME` file in the `public` folder of your project with your domain name
3. Update your DNS settings with your domain provider

## Notes on GitHub Pages SPA Routing

This project uses the HashRouter for production builds to ensure proper routing on GitHub Pages. The 404.html file and redirect script in index.html handle client-side routing for the single-page application.

## Contributing

We welcome contributions! If you'd like to:

- Submit a problem: Use the "Share a Problem" feature or open an issue
- Submit a solution: Use the "Share a Solution" feature or open a pull request
- Report bugs or request features: Open an issue

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Created by Suraj Rai - [Website](https://www.surajr.com/)
