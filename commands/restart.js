const Discord = module.require("discord.js");
const client = new Discord.Client();
const logs = "521873059204825172";

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return;
	message.channel.send(`Bot Restarting.`)
	client.channels.get(`${logs}`).send(`Bot Restarting....`);
    process.exit(1);
}

module.exports.help = {
    name: "restart",
    description: "Restarts the bot",
    usage: "restart"
}