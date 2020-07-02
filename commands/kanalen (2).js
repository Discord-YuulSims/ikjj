const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var icon = message.guild.iconURL;
    message.delete();
    var regels = new discord.MessgaEmbed()
        .setTitle("**kanalen**")
        .setThumbnail(icon)
        .setColor("#81f542")
        .setFooter("©YuulSims Server")
        .setDescription("\n **Er zijn heel veel kanalen op de server.** \n\n **__INFO__** \n **welkom** | voor het welkoms bericht. kan je ook krijgen door => !?kanalen \n **regels** | Dit zijn de regels. Hopelijke leef je ze na. \n **mensen-nieuw** | Wanneer ieand de server joind. Party! En wanneer iemand de server verlaat. \n\n **MEDEDELING** \n **youtube** | Wanneer YuulSims een nieuwe video upload. \n **server** | Wanneer er een update is over de server of over de bot. \n **rol-aanvraag** | Wanneer je een rol wilt anvragen. Kijk welke rollen door => !?rollen \n  **review** | Wanneer je een review wil achter laten. \n **idee** | Wanneer je een idee hebt voor de server. \n\n **__TEKSTKANALEN__** \n **algemeen** | Voor alles! \n **game-chat** | als je over games wilt praten. \n **vragen** | Als je vragen hebt. Maak eerste voor alle vragen een ticket aan.(!?ticket) \n\n **__SIMS__** \n Als je het niet ziet is omdat je de rol simmer niet heb. \n **sims-chat** | Als je over de sims wilt chatten. \n **sims-build** | Als je je pratiche huizen willaten zien. \n **sims-vragen** | Als je vragen hebt over de sims. Hier moet je geen ticket voor aan te maken. \n\n **__SPRAAKKANALEN__** \n **Algemeen** | Als je over iets wil praten. \n **YuulSims** | Is als algemeen te druk is. \n **livestream** | Als je live wilt gaan of er één bekijken. \n **sims** | Als je over de sims wilt praten.(alleen de rol simmer.) \n\n **__BOT__** \n\n **bot-chat** | Als je een commando van de bot wil uitvoeren. \n **poll** | Kunnen jullie stemmen. \n **warn_kick_ban** | Is voor de staff \n\n **__TICKETS__** \n **ticket-klaar** | Wanneer er een ticket klaar is. \n\n **__level_markt__** \n **beloningen** | Voor te zien welke beloningen er zijn. \n **aanvragen** | Om een beloning aan te vragen. **")
    message.channel.send(regels);


}

module.exports.help = {

    name: "kanalen",
    description: "Is voor het welkoms bericht.(alleen admins)"

}