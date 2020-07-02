const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var boticon = bot.user.displayAvatarURL;
      var botEmbed = new discord.MessageEmbed()
          .setDescription("BOT info")
          .setColor(128, 0, 255)
          .setThumbnail(boticon)
          .addField("bot naam", bot.user.username)
          .setFooter("©YuulSims Server")
          .addField("gemaakt op", bot.user.createdAt);

      return message.channel.send(botEmbed);



}

module.exports.help = {

name: "botinfo",
description: "Is info over de bot."

}