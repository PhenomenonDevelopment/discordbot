const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const logs = "521873059204825172";
const version = process.env.VERSION;

const Sharder = require('eris-sharder').Master;
const sharder = new Sharder(`${discord_token}`, "./bot.js", {
  stats: false,
  debug: false,
  guildsPerShard: "1500",
  name: "Phenomenon",
  webhooks: {
    shard: {
      id: "526426368834011156",
      token: "Ia3vDF5Mm_ijVhW2Cu4uTPfiaTIaEaegtpDXMANgrk9jx4enipArQvpH0Z8kLgpo30Ky"
    },
     cluster: {
      id: "526426368834011156",
      token: "Ia3vDF5Mm_ijVhW2Cu4uTPfiaTIaEaegtpDXMANgrk9jx4enipArQvpH0Z8kLgpo30Ky"
    }
  },
  clientOptions: {
      messageLimit: 150,
      defaultImageFormat: "png"
  }
});

sharder.on("stats", stats => {
  console.log(stats);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://phantomdevelopment-discord-bot.herokuapp.com/`);
}, 280000);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
  if (!file.endsWith(".js")) return;
	const event = require(`./events/${file}`);
	let eventName = file.split(".")[0];
	client.on(eventName, event.bind(null, client));
	delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
}); 

client.login(discord_token);