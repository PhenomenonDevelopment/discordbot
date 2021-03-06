const Discord = module.require("discord.js");
const rbx = require("noblox.js")
var groupId = 3503317;
var maximumRank = 20;

module.exports.run = async (client, message, args) => {
  var username = args[0]
        if (username){
          message.channel.send(`Checking ROBLOX for ${username}`)
          rbx.getIdFromUsername(username)
        .then(function(id){
          rbx.getRankInGroup(groupId, id)
          .then(function(rank){
            if(maximumRank <= rank){
              message.channel.send(`${id} is rank ${rank} and not promotable.`)
            } else {
              message.channel.send(`${id} is rank ${rank} and promotable.`)
              roblox.promote(groupId, id)
              .then(function(roles){
                message.channel.send(`Promoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
              }).catch(function(err){
                message.channel.send("Failed to promote.")
              });
            }
          }).catch(function(err){
            message.channel.send("Couldn't get him in the group.")
          });
        }).catch(function(err){
          message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
        });
        } else {
          message.channel.send("Please enter a username.")
        }
      return;
}

module.exports.help = {
    name: "promote",
    description: "",
    usage: "promote username"
}
