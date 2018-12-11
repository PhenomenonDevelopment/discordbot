const Discord = module.require("discord.js");
const client = new Discord.Client();
var roblox = require('roblox-js');
var groupId = '3818655'
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	var args = message.content.split(/[ ]+/)
	var username = args[1]
	if (username){
    	message.channel.send(`Checking ROBLOX for ${username}`)
    	roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankNameInGroup(groupId, id)
				.then(function(rank){
					roblox.getRankNameInGroup('3818980', id)
					.then(function(comb){
						roblox.getRankNameInGroup('3819054', id)
						.then(function(mp){
							roblox.getRankNameInGroup('3844096', id)
							.then(function(corrections){
								roblox.getRankNameInGroup('3820774', id)
								.then(function(SOC){
									roblox.getRankNameInGroup('3819023', id)
									.then(function(medic){
										roblox.getRankNameInGroup('3547119', id)
										.then(function(crto){
										const embed = new Discord.RichEmbed()
										.setColor(0x00AE86)
										.addField("Username:", `${username}`)
										.addField("NRIC:", `${rank}`)
										.addField("Com.B:", `${comb}`)
										.addField("MP:", `${mp}`)
										.addField("SOC:", `${SOC}`)
										.addField("Medic:", `${medic}`)
										.addField("Corrections:", `${corrections}`)
										.addField("Profile:", `http://www.roblox.com/users/${id}`)
										.setFooter(`Version: ${version}`);
										message.channel.send({embed});
										})
									})
								})
							})
						})
					})
				})
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
			} else {
				message.channel.send("Please enter a username.")
		}
	return;
}

module.exports.help = {
    name: "whois",
    description: "View info on a user",
    usage: "whois {user}"
}