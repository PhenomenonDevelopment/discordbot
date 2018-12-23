const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
	let perms = message.member.permissions;
	const embed = new Discord.RichEmbed()
	.setAuthor("Developer: aj2958#7948", "https://t0.rbxcdn.com/e25a771f37859b7c227944230596bae6")
	.setColor(0x00AE86)
	.addField("ADMINISTRATOR:", perms.has("ADMINISTRATOR"))
	.addField("MANAGE_CHANNELS:", perms.has("MANAGE_CHANNELS"))
	.addField("MANAGE_CHANNELS:", perms.has("MANAGE_CHANNELS"))
	.addField("MANAGE_GUILD:", perms.has("MANAGE_GUILD"))
	.addField("MANAGE_CHANNELS:", perms.has("MANAGE_CHANNELS"))
	.setFooter(`Version: ${version}`);
	message.channel.send({embed});
	message.channel.send(`You have access to: ${message.member.permissions}`);
}

module.exports.help = {
    name: "about",
    description: "Gets info on the bot",
    usage: "about"
}