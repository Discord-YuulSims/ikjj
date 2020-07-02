const discord = require("discord.js");

module.exports.run =  async(bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));

    var args = message.content.slice(prefix.length).spilt(/ */)

    
    if (!kickUser) return message.channel.send("Gebruiker niet gevonden op de");
     var reason = args.join(" ").slice(22);

     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Jij hebt deze rol niet.");
    if (kickUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry je kan deze gebruiker niet kicken.");

    var zekerweten= new discord.MessageEmbed()
    .setColor("GREEN")
    .setTitel("Weet je het zeker?")
    .setDescription(`Wil je ${kickUser} kicken?`);

    
    var kick = new discord.MessageEmbed()
        .setDescription("**__Kick__**")
        .setColor("#ee0000")
        .addField("Kicked gebruiker:", kickUser)
        .setFooter("©YuulSims Server")
        .addField("Gekicked door:", message.author)
        .addField("Reden:", reason);
    message.channel.send(zekerweten).then(async msg =>{

        var emoji = await zekerweten(msg.author, 30,  ["✅", "❌"]);

        if(emoji === "✅"){

            msg.delete();

            kickUser.kick(reason).catch(err =>{
                if (err) return message.reply("Er is iets fout gelopen")
            });

            message.channel.send(kick)


        }else if(emoji === "❌"){
            msg.delete();

            message.reply("kick geanuleerd").then(m => m.delete(5000));
        }
})

    
    
  
    

    
   // return;

   async function zekerweten(message, author, time, reactions)

   time *= 1000;

   for(const reaction of reactions){
       await message.react(reaction);
   }
var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

return message.awaitReaction(filter, {max:1, time: time}).then(collected =>collected.first() && collected.first().emoji.name);
}


module.exports.help = {

name: "kick",
description: "Dient voor als je iemand wil kicken.(alleen admins)"

}