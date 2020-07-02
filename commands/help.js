const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    try {
        var icon = message.guild.iconURL;
        var text = new discord.MessageEmbed()
            .setTitle("**YuulSims Sever Bot Commando's.**")
            .setThumbnail(icon)
            .setFooter("©YuulSims Server")
            .setColor("#00ffb7")
            .setDescription("**__Algemeen__** \n **!?hallo** Zeg hallo tegen de bot. \n **!?ping** Laat de responstijd zien. \n **!?idee** Laat een idee achter voor de server. \n **!?level** Laat zien welke level je bent. \n **!?report** Als je vindt dat iemand de regels overtreedt. \n **!?review** Laat een review van iemand of iets achter. \n\n **__Infomatie__** \n **!?botinfo** Laat info over de bot zien. \n **!?help** Laat dit bericht zien. \n **!?maker** Is voor de zien wie de bot heeft gemaakt. \n**!?serverinfo** Laat info over de server zien. \n\n **__server__** \n **!?welkom** Als je het welkoms bericht wil zien. \n **!?kanalen** Om te zien welke kanalen er zijn. \n\n **__Minigames__** \n **!?rps** Speel blad steen schaar. \n **later meer** \n\n **__Ticket__** \n **!?ticket** Maak een ticket aan. \n **!?close** Sluit het ticket. \n\n **__Alleen Admins__** \n **!?ac** Maak een mooi berichtje. \n **!?ban** Om iemand van de server te verbannen. \n **!?clear** Om berichtjes te verwijderen. \n **!?giveaway** Voor een winactie. \n **!?kick** Om iemand van de server te gooien. \n **!?prefixs** Als de bot zijn prefixs varanderd moeten worden. \n **!?tban** Als iemand tijdelijk verbannen moet worden. \n **!?mute** Als iemand gemuted moet worden. \n **!?warn** Als we iemand moeten waarschuwen. ")
        //"**YuulSims Bot** \n\n **__Wat kan ik?__** \n\n **__ALgemeen__** \n **!?ac** Maak een announcement aan.";

        message.author.send(text);

        message.reply("Al de commando's staan in je privé berichten! :mailbox_with_mail:");

    } catch (cerror) {
        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen.");

    }


    /* var commandList = [];
 
     bot.commands.forEach(element => {
 
         var item = {
 
             name: command.help.name,
             description: command.help.description
 
         };
 
         commandList.push(item);
 
     });
 
    var prefix = botconfig.prefix;
    var repsonse = "";
 
 */
    /*var commandsList = [];

    bot.commands.forEach(command => {

        var item = {

            name: command.help.name,
            description: command.help.description,
            // category: command.help.category

        }

        commandsList.push(item);

    });

    // console.log(commandsList);

    var prefix = botConfig.prefix;
    var response = "";

    for (var i = 0; i < commandsList.length; i++) {

        response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \r\n`;

    }

    message.author.send(response).then(() => {

        message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");

    }).catch(() => {

        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");

   }); */
}

module.exports.help = {

    name: "help",
    description: "Krijg je dit bericht."

}