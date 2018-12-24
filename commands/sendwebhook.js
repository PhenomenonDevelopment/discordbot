const Discord = module.require("discord.js");
const client = new Discord.Client();
const version = process.env.VERSION;	

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	
	const mentionHook = new Discord.WebhookClient(args[1], args[2]);
	mentionHook.send(args.split(3).join(" "));
}

module.exports.help = {
    name: "about",
    description: "Gets info on the bot",
    usage: "about"
}