const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();//

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const version = process.env.VERSION;
const version = process.env.COOKIE;

app.listen(process.env.PORT);
setInterval(() => {
http.get(`${process.env.HOST}`);
}, 280000);

const rbx = require("noblox.js")
async function startApp () {
    await rbx.cookieLogin("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_F9F1EA531adk")
    // Do everything else, calling functions and the like.
    let currentUser = await rbx.getCurrentUser()
}

var blacklist = [1, 261]
var evt = rbx.onJoinRequestHandle(18)
evt.on('data', function (request) {
  rbx.getIdFromUsername(request.username).then(function (id) {
    for (var i = 0; i < blacklist.length; i++) {
      if (blacklist[i] === id) {
        evt.emit('handle', request, false);
        return;
      }
    }
//    evt.emit('handle', request, true, function () {
//      rbx.message(id, 'Welcome', 'Welcome to my group');
//    });
  });
});

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

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
  let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  //  console.error(err);
  };
})

client.login(discord_token);
