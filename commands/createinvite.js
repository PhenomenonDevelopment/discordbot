const Discord = module.require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("526376828290596865", "xR-_drIyJJKyEv11nH8pUgfkm5EndIY3wdMD77lVEgpMW2nRc9qofei23BkqEriF6gOy");

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	client.channels.get(args[1]).createInvite()
	.then(invite => createInvite()
	.then(it => message.channel.send(`${it.code}`)).catch(message.channel.send(error))
}

module.exports.help = {
    name: "createinvite",
    description: "Announce message",
    usage: "createinvite"
}