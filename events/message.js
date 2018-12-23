const logs = "521873059204825172";
const prefix = process.env.PREFIX;
const version = process.env.VERSION;
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (client,on,message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
	const embed = new Discord.RichEmbed()
	.setAuthor("Command Logger")
	.setColor(0x00AE86)
	.addField("User:", message.author)
	.addField("Command:", message)
	.addField("Source:", `${message.guild} (${message.guild.id}) | #${message.channel.name}`)
	.setFooter(`Version: ${version}`);
	client.channels.get(`${logs}`).send({embed});
  } catch (err) {
    console.error(err);
  }
}