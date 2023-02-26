# AIBio

AIBio is a social media bio generator that uses OpenAI's GPT-3 API to generate professional and catchy bios for various social media platforms like LinkedIn, Twitter, Facebook, and Instagram. The project is built using Next.js and Tailwind CSS.

![image](https://user-images.githubusercontent.com/1321311/221399259-9f97f83e-0c13-45e6-b226-4a7a38e4264b.png)

Please check the [demo](https://ai-cl5v551zv-deepakb.vercel.app/) app on vercel platform

## Features

- Generate custom social media bios based on user-provided information and preferred vibe
- Choose from a range of moods such as Professional, Casual, and Creative and many more
- Supports various social media platforms like LinkedIn, Twitter, Facebook, and Instagram
- Support inbuilt characters limit feature for each platform
- Dark mode feature with next-themes and tailwindcss `dark` mode

## Installation

To run AIBio on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/AIBio.git`
2. Install dependencies: `npm install`
3. You will also need to obtain an API key for OpenAI's GPT-3 language model, which you can do by following the instructions on the OpenAI website. Once you have your    API key, create a .env.local file in the root directory of the project, and add the following line, replacing YOUR_API_KEY with your actual API key:
   `OPENAI_API_KEY=YOUR_API_KEY`
4. Start the development server: `npm run dev`
5. Navigate to `http://localhost:3000` in your browser

## Usage

To use AIBio, simply enter your information and preferred mood on the website's homepage, select the social media platform you want to generate a bio for, and click on the "Craft your bio" button. The generated bio will appear on the screen, and you can copy and paste it into your social media profile.


## Credits

AIBio is built using the following technologies and APIs:

- Next.js
- Tailwind CSS
- OpenAI GPT-3 API

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deepakb/ai-bio&env=API_KEY&project-name=AIBio&repo-name=ai-bio)
