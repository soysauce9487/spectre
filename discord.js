const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '安安') {
        msg.reply('安安你好');
    }
});

client.on('message', msg => {
    if (msg.content === '晚餐吃什麼') {
        msg.reply('跟Toyz吸大麻，開玩笑，監獄公道伯欸');
    }
});

client.login(token);
