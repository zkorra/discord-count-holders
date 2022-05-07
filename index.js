require('dotenv').config()
const axios = require('axios')
const _ = require('lodash')
const Discord = require('discord.js')
const client = new Discord.Client({
  intents: ['GUILDS'],
})

client.on('warn', (err) => console.warn('[WARNING]', err))

client.on('error', (err) => console.error('[ERROR]', err))

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity(`Unique Owners`, {
    type: 'WATCHING',
  })

  const guild = await client.guilds.fetch(process.env.GUILD_ID)

  setInterval(async () => {
    try {
      stats = await axios
        .get(
          `https://api-v2-mainnet.paras.id/collection-stats?collection_id=${process.env.COLLECTION_ID}`
        )
        .then((response) => response.data)
    } catch (err) {
      console.log('error fetching stats: ', err)
    }

    if (stats && stats.status === 1) {
      if (!_.isEmpty(stats.data.results)) {
        if (_.has(stats.data.results, 'total_owners')) {
          const totalOwners = stats.data.results.total_owners

          guild.me.setNickname(`${totalOwners} Owners`)
        }
      }
    }
  }, 120000)
})

client.login(process.env.TOKEN)
