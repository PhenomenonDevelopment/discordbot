const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const pass = process.env.PASSWORD;
const version = "0.0.03a";
const logs = "521873059204825172";

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://phantomdevelopment-discord-bot.herokuapp.com/`);
}, 280000);

client.on("ready", () => {
	client.user.setPresence({ game: { name: `${prefix}help | V${version}`, type: 0} });
	client.channels.get(`${logs}`).send(`Starting up....`);
	const embed = new Discord.RichEmbed()
	.setAuthor("Developer: aj2958#7948", "https://t0.rbxcdn.com/e25a771f37859b7c227944230596bae6")
	.setColor(0x00AE86)
	.addField("Created on:", `11st December 2018`)
	.setFooter(`Version: ${version}`, "https://t0.rbxcdn.com/e25a771f37859b7c227944230596bae6");
	client.channels.get(`${logs}`).send({embed});
	client.channels.get(`${logs}`).send(`Bot Successfully Started.`);
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