const Discord = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");

module.exports = {
  name: "invite",
  aliases: ["botinvite", "inv"],
  category: "info",
  usage: "invite",
  description: "Gives You A Link To Add The Bot To Your Server!",
  run: async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) {
      prefix = config.DEFAULT_PREFIX;
      
   
    }
     
     const embed = new Discord.MessageEmbed()
     
     
      .setColor("RANDOM")
     .setTitle("Invite Me Here!")
     .setFooter("Invite Me!")
     .setDescription("Here You Go Sir! Make Sure To Invite Me Correctly! | Invite Me: https://discord.com/api/oauth2/authorize?client_id=672555078686605333&permissions=8&scope=bot")

    message.channel.send(embed)
    
    message.delete()
  }
  
}