const Discord = module.require("discord.js");
const levels = require("./levels.json");
typeof levels; // object

module.exports.run = async (client, message, args) => {
    await message.channel.send(`${levels[message.author.tag].money}`);
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}