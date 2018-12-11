const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(kUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person can not be kicked!");
	let kickedEmbed = new Discord.RichEmbed()
	.setDescription("User kicked", `https://t1.rbxcdn.com/f1b43e5eb3871f49f0293b3dd1d0f4b7`)
	.setColor("#ff921e")
	.addField("Kicked user:", `${kUser} with the ID: ${kUser.id}`)
	.addField("Kicked by:", `<@${message.author.id}> with the ID: ${message.author.id}`)
	.addField("Kicked at:", message.createdAt)
	.addField("Kicked for:", `${KREASON}`)
	.addField("Kick sent in:", message.channel)
	.setFooter(`Version: ${ver} | ${phase}`, "https://t5.rbxcdn.com/f8832ec3c74c163a525741f7aa171505");
	let reportChannel = message.guild.channels.find(`name`, "moderation-logs");
	if(!reportChannel) return message.channel.send("Couldn't find moderation-logs channel!");
	message.delete().catch(O_o=>{});
	message.channel.send(`${kUser} was kicked successfully`);
	message.guild.member(kUser).kick(`${KREASON}`)
	reportChannel.send(kickedEmbed);
}

module.exports.help = {
    name: "kick",
    description: "kicks a user",
    usage: "kick [user]"
}