const Discord = module.require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("526376828290596865", "xR-_drIyJJKyEv11nH8pUgfkm5EndIY3wdMD77lVEgpMW2nRc9qofei23BkqEriF6gOy");

module.exports.run = async (client, message, args) => {
	let myRole = message.guild.roles.get(args[1]);
	message.author.addRole(myRole).catch(console.error);
	message.channel.send(`Added role sucessfully`);
}

module.exports.help = {
    name: "createserver",
    description: "Announce message",
    usage: "createserver"
}