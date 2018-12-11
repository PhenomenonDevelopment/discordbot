const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    await message.channel.send(module.exports.help);
}

module.exports.help = {
    name: "help",
    description: "Gets help",
    usage: "help"
}