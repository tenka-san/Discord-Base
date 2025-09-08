const readline = require('readline');
const axios = require('axios');
const fs = require('fs');
const TOKEN = require('./config.json');
const {
  REST,
  Routes,
  Client,
  GatewayIntentBits
} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Sukses Login Sebagai ${readyClient.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN);
