const Discord = module.require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("526376828290596865", "xR-_drIyJJKyEv11nH8pUgfkm5EndIY3wdMD77lVEgpMW2nRc9qofei23BkqEriF6gOy");

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return message.reply("Sorry to stop abuse only Phenomenon#7948 can create servers");
    const guild = await client.user.createGuild('Bot Server', 'london');
    const defaultChannel = guild.channels.find(channel => channel.name === "general");
    const invite = await defaultChannel.createInvite();
    await message.channel.send(invite.url);
    const role = await guild.createRole({ name:'BotCreator', permissions:['ADMINISTRATOR'] });
    await message.channel.send(role.id);
}

module.exports.help = {
    name: "createserver",
    description: "Announce message",
    usage: "createserver"
}