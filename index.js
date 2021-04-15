const Discord = require("discord.js");



const Client = new Discord.Client;

const prefix ="-t";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("message" , message => {
    if(message.author.bot) return;
    
    if(message.content == "ping"){
        message.reply("pong");
        message.channel.send("pong");
    };
    
    

    

});


Client.login(process.env.TOKEN);
