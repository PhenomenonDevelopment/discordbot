const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return;
    process.exit(1);
}

module.exports.help = {
    name: "restart",
    description: "Restarts the bot",
    usage: "restart"
}