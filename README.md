# chatGPT-discord-bot

packages that I use: [discord.js](https://discord.js.org), [openai](https://openai.com)

## Installation

Clone the repo on your system:

```
git clone https://github.com/3raphat/simple-discord-bot-template.git
```

Then, navigate to the directory and install the npm packages:

```
npm install
```

## Configuration

Rename `.env.example` to `.env` and fill out the values:

```
TOKEN=
CLIENT_ID=
OPENAI_API_KEY=
```

### How to generate a OpenAI API key

1. Go to <https://beta.openai.com/account/api-keys>.

2. Click on `Create new secret key` button.

3. Copy the OpenAI API key, then paste it into the `OPENAI_API_KEY` in `.env` file.

## Start

```
npm run start
```

After run the bot, use `node deploy-commands.js` to deploy the slash commands.
