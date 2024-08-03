# Banner Generator Web App

This is a Next.js web application that generates banners with AI-generated titles and descriptions using the Google Gemini API. The images for the banners are fetched from the Pexels API.

## Features

- **AI-Generated Content**: Titles and descriptions are generated using the Google Gemini API.
- **Customize Title and Description**: User customize the title and description of each banner.
- **High-Quality Images**: Images are fetched from the Pexels API.
- **Upload Custom Images**: User can upload their own Images for the banner.
- **Responsive Design**: The web app is fully responsive and works on all devices.
- **User-Friendly Interface**: Simple and intuitive interface for generating banners.

## Getting Started

### Live Link

Skip all the hassle of setting up the project locally and try it out live [here](https://banner-ads-home.vercel.app/). Deployed using [Vercel](https://vercel.com/).

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/banner-generator.git
```

2. Navigate to the project directory:

```bash
cd banner-generator
```

3. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```env
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key
```

Replace `your_google_gemini_api_key` and `your_pexels_api_key` with your actual API keys.

### Running the Development Server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Google Gemini API](https://developers.google.com/gemini)
- [Pexels API](https://www.pexels.com/api/)
- [Vercel](https://vercel.com/)
