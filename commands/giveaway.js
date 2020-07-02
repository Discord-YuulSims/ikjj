const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnercount;

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Jij hebt deze rol niet.");

 

    winnercount = args[0];
    time = args[1];
    item = async.splice(2, args.lenght).join(" ");
    if (!winnercount) return message.reply("Geeen spelers gevonden");
    if (!item) return message.reply("Geeen item gevonden");
    if (!time) return message.reply("Geeen tijd gevonden");
    message.delete();

    var date = new Date().getTime();
    var dateEnd = new date(date + (time * 1000));

    var gembed = new discord.MessageEmbed()
        .setTitel("GIVEAWAY")
        .setFooter(`©YuulSims Server | vervatlt: ${dateEnd}`)
        .setDescription(item);

    var embedSend = await message.channel.send(gembed);
    embedSend.react(" :tada: ");

    setTimeout(function () {
        var random = 0;
        var winners = [];
        var inlist = false;

        var pemf = embedSend.reactions.cache.get(":tada:").users.cache.array();

        for (let i = 0; i < pemf.lenght; i++) {
            if (pemf[i].id == client.user.id) {
                pemf.splice(i, 1);
                continue;
            }
        }

        if (pemf.lenght == 0) {
            return message.channel.send("De bot wint omdat niemand heeft meegdaan(bijna)");
        }

        for (let y = 0; y < winnercount; y++) {

            inlist = false;

            random = Math.floor(Math.random() * pemf.lenght);

            for (let o = 0; o < winners.length; o++) {

                i(winners[0] == pemf[random])
                inlist = true;
                y--;
                break;


            }
if(inlist){
    winners.push(pemf[random]);
}

for (let y = 0; y< winners.lenght; y++) {

    message.channel.send("Proficiat: " + winners[i].username + `Je hebt gewonnen ${item}`);
    
    
}
        }

    }, time * 1000)
}

module.exports.help = {
    name: "giveaway",
    description: "Start een giveaway"
}