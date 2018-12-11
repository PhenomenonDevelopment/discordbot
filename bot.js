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
	client.channels.get(`${logs}`).send(`Bot Successfully Started.`);
	client.user.setPresence({ game: { name: `${prefix}help | V${version}`, type: 0} });
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

var Connection = require('tedious').Connection;  
var config = {  
    userName: process.env.SQLUSER,  
    password: process.env.SQLPASS,  
    server: process.env.SQLHOST,
	database: "d2f96qlf22nhsn",
	port: `5432`,
    options: {encrypt: true}  
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
	client.channels.get(`${logs}`).send(`SQL Connection Success.`);
});  

client.login(discord_token);