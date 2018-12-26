const Discord = module.require("discord.js");
const client = new Discord.Client();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "uf63wl4z2daq9dbb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "lzpf45xmkds90fhi",
  password: process.env.DBP,
  database: "krntwx8gh9aecxvw"
});

module.exports.run = async (client, message, args) => {
	con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err,rows) => {
		if(err) return client.channels.get('527627324146057226').send(`'err'`);
		let xp = rows[0].xp;
		message.channel.send(xp);
	});
	con.end();
}

module.exports.help = {
    name: "xp",
}