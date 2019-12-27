var Discord = require('discord.js');
var bot = new Discord.Client();
var config = require('./bin/config.json');
var token = require('./bin/token.json').token;
var modules = [];

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  modules.forEach(function(mod) {
    mod(msg,bot);
  });
});

Object.keys(config.modules).forEach(function(mod_name){
  var mod = config.modules[mod_name];
  if (mod == true) {
    console.log(`Module: ${mod_name}, Enabled`);
    modules.push(require(`./modules/${mod_name}`));
  }
});

bot.login(token);