const Discord = require("discord.js");
const Bot = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
]})

Bot.on("messageCreate", async message => {
    message.channel.send("spam");
});

Bot.login("token de votre bot");