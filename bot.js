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

function dhm(ms) {
days = Math.floor(ms / (24 * 60 * 60 * 1000));
daysms = ms % (24 * 60 * 60 * 1000);
hours = Math.floor((daysms) / (60 * 60 * 1000));
hoursms = ms % (60 * 60 * 1000);
minutes = Math.floor((hoursms) / (60 * 1000));
minutesms = ms % (60 * 1000);
sec = Math.floor((minutesms) / (1000));
return days + ":" + hours + ":" + minutes + ":" + sec;
}

const uptime = dhm(time)

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://phantomdevelopment-discord-bot.herokuapp.com/`);
}, 280000);

client.on("ready", () => {
	setInterval(client.user.setPresence({ game: { name: `${uptime} | V${version}`, type: 0} }), 1)
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