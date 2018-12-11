const Discord = module.require("discord.js");
const prefix = process.env.PREFIX;
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(kUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person can not be kicked!");
	let kickedEmbed = new Discord.RichEmbed()
	.setDescription("User kicked", `https://t1.rbxcdn.com/f1b43e5eb3871f49f0293b3dd1d0f4b7`)
	.setColor("#ff921e")
	.addField(`Bot-Prefix:`, `${prefix}`)
	.addField(`Kick [user]:`, `Kicks the specified user`)
	.addField(`Ping:`, `Returns ping to the bot`)
	.addField(`About:`, `Returns information about the bot.`)
	.setFooter(`Version: ${version}`);
}

module.exports.help = {
    name: "kick",
    description: "kicks a user",
    usage: "kick [user]"
}