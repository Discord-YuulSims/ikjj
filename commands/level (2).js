
const discord = require("discord.js");
const levelfile = require("../Data/levels.json");

module.exports.run = async (bot, message, args) => {

    var idUser = message.author.id;

    if (!levelfile[idUser]) {

        levelfile[idUser] = {

            xp: 0,
            level: 0

        };
        var User = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));

    }

       // Verkrijg level van de gebruiker.
       var levelUser = levelfile[idUser].level;
       // Verkrijg xp van de gebruiker.
       var xpUser = levelfile[idUser].xp;
       // Bereken volgend level op basis van de xp.
       var nextLevelXp = levelUser * 200;
   
       var whenNextLevel = nextLevelXp - xpUser;

       var embedLevel = new discord.RichEmbed()
       .setTitle(message.author.username)
       .setDescription("Proficiat met je level.")
       .setColor("#29e53f")
       //.setThumbnail("https://vignette.wikia.nocookie.net/disneyemojiblitz/images/9/94/Rainbow_Star.png/revision/latest?cb=20170112170239")
       .setFooter("©YuulSims Server")
       .setThumbnail(message.author.displayAvatarURL)
       .addField("level: ", levelUser, true)
       .addField(`Nog zoveel xp tot het volgende level: `, whenNextLevel);


   message.channel.send(embedLevel);


}

module.exports.help = {

    name: "level",
    description: "Als je je level wil zien."

}