const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = 'NjIzMTgyODI1MTM4NTUyODMy.XX-w9g.hYg4LRr1cVa07L5bC9hFSqDkFqE'
const Prefix = '!';


client.on('message', function (message) {
    if (message.content == '!czesc') {
        message.channel.sendMessage('No siemka ' + message.author + ', co u ciebie?');
    }

    let args = message.content.substring(Prefix.length).split(" ");

    switch (args[0]) {
        case 'yt':
            message.channel.sendMessage('https://www.youtube.com/channel/UCP2U46M90tIRWSBA8DNkpxw?view_as=subscriber%27')
            break;
        case 'clear':
            if (!args[1]) return message.reply('Nie wiem ile wiadomości mam usunąć XD!')
            message.channel.bulkDelete(args[1]);
            break;
    }
});

client.on('ready', function () {
    console.log("Jestem gotowy!");
    client.user.setPresence({ game: { name: `Nintendo | ${client.guilds.size} guilds`, type: 'LISTENING' }, status: 'online' });
})

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                
        member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Wywalono ${user.tag}`);
        }).catch(err => {
            message.reply('Nie mam permisji!');
            console.error(err);
        });
    } else {
        message.reply('Tej osoby już z nami nie ma!');
    }
} else {
    message.reply('Nie wiem kogo mam wyrzucić!');
  }
}
});


client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!ban')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user); 
            if (member) {
                member.ban({
                    reason: 'They were bad!',
                  }).then(() => {
                    message.reply(`Zbanowano ${user.tag}`);
                }).catch(err => {
                    message.reply('Nie mam permisji!');
                    console.error(err);
                });
              } else {
                  
        message.reply('Tej osoby już z nami nie ma!');
    }
} else {
    message.reply('Nie wiem kogo mam zbanować!');
}
}
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋┇witamy na serwerze');
    if (!channel) return;
    channel.send(`Witamy na serwerze, ${member} , pamiętaj o dobrej zabawie! :D `);
});

let member = (message).mentions.members.first();
if(!member) return message.reply("Nie wiem kogo mam wyciszyć!");
let muteRole = message.guild.roles.find("nick", "Muted");
if(!muteRole) return message.reply("Nie ma  takiej  roli jak `Muted`");
let params = message.content.split(" ").slice(1);
let time = params [1];
if(!time) return message.reply("Nie wiem na ile mam go wyciszyć! Podaj czas!");

member.addRole(muteRole.id);
msg.channel.send(`Zostałeś wyciszony przez ${ms(ms(time), {long: true})} ${member.user.tag}`);

setTimeout(function() {
    member.removeRole(mute.id);
    message.channel.send(`${member.user.tag} Zostałeś unmute'owany!`)


}







)



`client.login(TOKEN);`