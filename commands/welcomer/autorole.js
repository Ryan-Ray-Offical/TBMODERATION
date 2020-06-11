const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setautorole",
  category: "welcomer",
  usage: "setautorole <RoleID>",
  description: "Set the AutoRole For Welcomer!",
  run: (client, message, args) => {
    
    
    //Now we gonna use quick.db
    
    db.set(`autorole_${message.guild.id}`)
    
    message.channel.send(`Auto Role Successfuly Updated!`)
  }
}