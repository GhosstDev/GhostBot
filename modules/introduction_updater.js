var Discord = require('discord.js');
var config = require('../bin/config.json');

module.exports = function(message, bot) {
    if (message.channel.id == config.channels.introductions) {
        var user = bot.guilds.get(config.guilds.pisscord).members.get(message.author.id);
        if (!user.roles.get(config.roles.member)) {
            user.addRole(config.roles.member, "Thank you for introducing yourself!")
            user.createDM(function(channel){
                channel.send(`Thank you for introducing yourself! Remember to verify yourself as 18+ to post media and view the orginal content channels!
                
                To do so, send me a picture of a valid photo id with your birthdate, the picture of you, (Address, name, and other identifying information can be omitted), and hold up a piece of paper with the current date, your full username (including the tag) and the server name "The Pisscord" included. Your real face and the face on your photo id must be visible.

                In the file comment type "verify" 
                that's all you have to do`);
            });
        }
    }
}