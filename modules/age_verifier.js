var Discord = require('discord.js');
var config = require('../bin/config.json');

module.exports = function(message, bot) {
    if (message.channel.type == 'dm') {
        if (message.content.indexOf('verify') > -1) {
            if (message.attachments.array().length > 0) {
                var embed = new Discord.RichEmbed()
                .setTitle("Verification Request")
                .setColor('ORANGE')
                .setDescription(`<@${message.author.id}> Has requested age verification`)
                .setImage(message.attachments.first().url)
                .setFooter("The images contained in this message is entirely confidential. Duplication, modification, or distribution of this picture is not allowed in any form.");

                bot.guilds.get(config.guilds.pisscord).channels.get(config.channels.verification_requests).send({embed: embed});
            }
        }
    }
}