
var Discord = require('discord.js');
var config = require('../bin/config.json');

module.exports = function(message, bot) {
    if (message.channel.id = config.channels.botcommands) {
        var args = message.content.split(" ");
        var guild = bot.guilds.get(config.guilds.pisscord);
        var user = guild.members.get(message.author.id);
        if (args[0] == "/roles") {

            var category_text = "";
            var embed = new Discord.RichEmbed()
            .setTitle("Available Roles");

            Object.keys(config.self_roles).forEach((role_group)=> {
                category_text = "";
                Object.keys(config.self_roles[role_group]).forEach((role)=> {
                    category_text += role+`
`;      
                });
                embed.addField(role_group, category_text, false);
            });
            message.channel.send({embed:embed});
        } else if (args[0] == '/role') {
            var role_request = args[1];
            if (config.available_roles[role_request] !== undefined) {
                user.addRole(config.available_roles[role_request], "Self role");
                message.channel.send("Role Given!");
            } else {
                message.channel.send("Invalid Role! Use `/roles` to list available roles");
            }
        }
    }
}
