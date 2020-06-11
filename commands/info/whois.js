    const Discord = require("discord.js")


    module.exports = {
        name: "whois",
        category: "utility",
    description: "Get information about a user",
    usage: "[command | user] or [command]",
    run: async (client, message, args) => {
    //command
    
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('Please mention the user who you want info about.');
    
    var playing = ("[ " + user.presence.activities + " ]")
     
    
    const member = message.guild.member(user);
    
  
    const ihatekids = new Discord.MessageEmbed()
          .setTitle("Who Is He?", `${user.tag}`)
          .addField("Full Username", `${user.tag}`)
      .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
          .addField("ID", user.id)
          .addField("Playing",playing, true)
          .addField("Status", `${user.presence.status}`, true)
          .addField("Joined Discord At", user.createdAt)
    .addField('Kickable', member.kickable)
        .addField('Voice Channel', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'None')
          .setColor("RANDOM")
          .setTimestamp()
          .setThumbnail(user.avatarURL())  
      message.channel.send(ihatekids)

    };
    }
       
  
    
    };