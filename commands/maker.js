const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    try {
        
        var text = new discord.MessageEmbed()
            .setTitle("**Maker van de YuulSims Bot!**")
            .setThumbnail("https://66.media.tumblr.com/65643f553a750a1478a56784fc8b5130/950153d0f494b4f3-9f/s500x750/4de96586c9cd071a20e5c545b172e032c2e32265.gifv")
            .setFooter("©YuulSims Server")
            .setColor("#00a6ff")
            .setDescription("**__Maker__** \n De maker van de bot is Jonasvldv. Jonasvldv is de co owner van de server. \n Weetje => ||Jonas heeft de server gemaakt.|| \n\n **__verhaal__** \n Waarom heb ik nu een bot gemaakt. \n Heel simpel! Ik wou één grote bot I.P.V allemaal die kleinen. En het staat gewoon ook gewoon mooi. Maar het belangerijkste is: ik wou gewoon progammeren. \n\n **__Wie ben ik__** \n ik ben Jonas! ||dat weten jullie al.|| \n Ik woon in Belgie. \n Leeftijd ga ik iet zeggen. LOL! \n Ben een gamer en een programmeur. \n mijn lievelings youtuber is **YuulSims** \n\n **MVG** \n **__Jonas__** \n Maker/co owner   ")
        message.author.send(text);

        message.reply("de info staat in u privé berichten! :mailbox_with_mail:");

    } catch (cerror) {
        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen.");

    }


   
}

module.exports.help = {
    name: "maker",
    description: "Als je de maker van de bot wil weten"

}