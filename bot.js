const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const pass = process.env.PASSWORD;
const version = process.env.VERSION;
const logs = "521873059204825172";

var time = process.uptime();

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://phantomdevelopment-discord-bot.herokuapp.com/`);
}, 280000);

client.on("ready", () => {
	client.channels.get(`${logs}`).send(`Bot Successfully Started.`);
	client.user.setPresence({ game: { name: `V${version}`, type: 0} });
	setInterval(() => {
		client.user.setPresence({ game: { name: `${time} | V${version}`, type: 0} });
	}, 1);
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
}); 

client.login(discord_token);