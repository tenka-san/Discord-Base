const readline = require('readline');
const axios = require('axios');
const fs = require('fs');
const TOKEN = require('./config.json');
const {
  REST,
  Routes,
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags,
  SlashCommandBuilder
} = require('discord.js');

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });

client.once('ready' () => {
	console.log(`Sukses Login Sebagai ${readyClient.user.tag}`);
});

client.on('messageCreate', message => {
  if (!mesage.content.startWith"/") return await message.reply(`Anda Harus Menggunakan Prefix Slash(\'/\') Untuk Memulai`);
  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (message.commandName === 'start') {
	const menu = `Highway Star Bot Are Created By : https://t.me/Yuukeyd7eppeli Here To Help Your Problem\nType \'/allmenu\' To Show All Menu\n</ Highway Star Bot \>`;
    await message.reply(menu);
  } else if (message.commandName === 'allmenu') {
	const menu = `Here Is Your Menu Bruh`;
    await message.reply(menu);
  }
});

client.login(TOKEN);
