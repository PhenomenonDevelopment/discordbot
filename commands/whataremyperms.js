const Discord = module.require("discord.js");
const client = new Discord.Client();
const logs = "521873059204825172";
const prefix = process.env.PREFIX;
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	const listedChannels = []; 
	message.member.permissions.forEach(channel => { 
		listedChannels.push(channel.name);
	});
	message.channel.send(`You have access to: ${listedChannels.join(',')}`);
}

module.exports.help = {
    name: "about",
    description: "Gets info on the bot",
    usage: "about"
}