var Discord = require('discord.js');
var config = require('../bin/config.json');

module.exports = function(message, bot) {
    var user = bot.guilds.get(config.guilds.pisscord).members.get(message.author.id);
    if (message.channel.id == config.channels.original_content_m || message.channel.id == config.channels.original_content_f) {
        if (message.attachments.array().length > 0) {
            if (!user.roles.get(config.roles.golden_shower)) {
                user.addRole(config.roles.golden_shower, "You uploaded original content!");
            }
        }
    }
}