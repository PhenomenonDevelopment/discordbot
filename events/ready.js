const logs = "521873059204825172";
const prefix = process.env.PREFIX;
const version = process.env.VERSION;
module.exports = (client) => {
	client.channels.get(`${logs}`).send(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
	client.channels.array().sort()
	.then(wb => message.channel.send(`${wb.id}`)).catch(console.error)
	client.user.setPresence({ game: { name: `${prefix}help | V${version}`, type: 0} });
}