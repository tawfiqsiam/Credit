const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "yeet"

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log(`Logged in as [ ${client.user.id}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  client.user.setGame(`${prefix}help`)
});

 
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    
    
    if (command === `${prefix}help`) {
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [ Bc Bot ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**${prefix}bc | A Dm To all if your server members **'` ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField(`**${prefix}bco | A Dm To The online members only**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcf | A Dm To The offline members only**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcrole | A Dm To members with a specific Role**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
               .addField('=-=- [ Thx For Using the bot https://discordapp.com/api/oauth2/authorize?client_id=593504139195973642&permissions=268823640&scope=bot ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`By StarZz#7658`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});


 client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : Reserved `); 
 message.delete(); 
};     
});


client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bco")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Reserved `); 
 message.delete(); 
};     
});

client.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bcf")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : Reserved `); 
 message.delete(); 
};     
});

client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '634134173896015893') return;

  let types = [
    'jpg',
    'jpeg',
    'PNG',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for pictures only :angry:`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, هذا الروم مخصص للصور فقط :angry:`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})

client.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("Ping the role  | *bcrole @ everyone text");
        return;
    }
    if(!args[1]) {
      message.channel.send("Ping the role | *bcrole @ everyone text");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`This message has been sent to ${message.guild.memberCount} Members `);
        message.guild.members.forEach(mi => {
          mi.send(
          "Message  :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("There is no role woth this name-_- ");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "Message  :" + "\n" +
        "**" + `${args[1]}` + `By Server : ${message.guild.name}`
          );
        });
      message.channel.send(`**This Message Has been sent to ${message.guild.members.filter(m => m.roles.get(role.id)).size} Members **`);
    }
});

const developers = ["618681842362744832","503878435056123915"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('-abc')){
                if (message.author.id !== '618681842362744832') return message.reply('** This command for the bot owner. **')
               message.channel.sendMessage('Sending q dm to all of the users   |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });

module.exports = (client, guild) => {
    try {
        client.user.setActivity(`yeethelp`, { type: 'PLAYING' });

        let bots = 0;
        let people = 0;
        guild.members.forEach(mem => {
            if (mem.user.bot) { bots += 1; }
            else {
                people += 1;
            }
        });

        let logChannel = client.config.logChannel;

        let embed = new Discord.RichEmbed()
            .setColor(client.config.embedColor)
            .setTitle(`Just __joined__ ${guild.name}`)
            .setDescription(`**${guild.owner.user.username}#${guild.owner.user.discriminator}** is the owner of the guild.\nGuild has **${guild.members.size}** members.\n\n`)
            .addField("People: ", people, true)
            .addField("Bots: ", bots, true)
            .setTimestamp();

        client.channels.get(logChannel).send(embed);
    } catch (err) {
        console.log(err);
    }
}
 
client.login(process.env.BOT_TOKEN);
