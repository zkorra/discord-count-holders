# Discord Count Holders

A simple discord bot for counting and interval updates unique NFT holders from a collection listed in Paras marketplace.

the idea is a bot will interval fetch Paras API every x minutes and then get total owners which already calculated by Paras.

## Installation

Before getting started, you need to create a discord bot first.

### Required Environment Variables
There are 3 required variables for running the bot.
- `COLLECTION_ID` If the collection is minted via Paras's contract you can get it in URL, or if the collection has own contract you can use the address name directly.
- `TOKEN` Discord bot token
- `GUILD_ID` Get it from your Discord's server

Clone the repo, run `yarn install` and `yarn start`
