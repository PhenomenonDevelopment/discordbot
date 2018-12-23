const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
	message.channel.send(`You have access to: ${message.member.permissions}`);
}

module.exports.help = {
    name: "about",
    description: "Gets info on the bot",
    usage: "about"
}