const Discord = module.require("discord.js");
const client = new Discord.Client();
var roblox = require('roblox-js');

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	try {
		roblox.login({username: process.env.RBUSER, password: process.env.RBPASS})
	message.channel.send(`Logged in Successfully to roblox account: ${process.env.RBUSER}`);
	} catch (err) {
		message.channel.send(`Returned error: ${err}`);
	}
}

module.exports.help = {
    name: "logintest",
    description: "Log Into the account",
    usage: "logintest"
}