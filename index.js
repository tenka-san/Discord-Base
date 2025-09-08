const readline = require('readline');
const axios = require('axios');
const fs = require('fs');
const {
  REST,
  Routes,
  Client,
  GatewayIntentBits
} = require('discord.js');

const question = (y) => {
  const rl = readline.createInterface({
    input: proccess.stdin,
    output: process.stdout
  }),
  return new Promise((resolve) => {
    rl.question(y, resolve)
  });
};
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = await question("Masukan Token Bot Discord Anda :\n");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN);
