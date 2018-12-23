const Discord = module.require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("526376828290596865", "xR-_drIyJJKyEv11nH8pUgfkm5EndIY3wdMD77lVEgpMW2nRc9qofei23BkqEriF6gOy");

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	var str = args
    var array = str.split(" "); 
	mentionHook.send(array);
}

module.exports.help = {
    name: "announce",
    description: "Announce message",
    usage: "announce [msg]"
}