const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"
var guilds = {};
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
  client.user.setGame(`${prefix}help | Nitro 2.0 `)
});

 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` Hello There 
this bot was made to give real nitro codes to people who really want it 
and for free

**Commands**
   Bot Commands     
?gen 
  └─ send nitro codes in your dms
?nitro
  └─ Sends nitro codes in the chat 

══════════ஜ۩۞۩ஜ════════════ 
link | Support   : https://discord.gg/umUmQTZ
link |  Invite the Bot  : https://discord.com/oauth2/authorize?client_id=516269471204245504&permissions=0&scope=bot
**Support Server**
https://discord.gg/umUmQTZ `) 
}).catch(console.error)
})
 

    
    client.on("message", message => {
  if (message.content === "?help") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`

══════════ஜ۩۞۩ஜ════════════  
This is an Unchecked Nitro Gen
 **      Bot Commands     
?gen 
  └─ Dm you a random Nitro code
?nitro
  └─Send random nitro link in chat
the other commands will be ready to use soon
?support
  └─ send 10 nitro codes in support server
?booster
  └─ send 1000 nitro codes in special channel for the server boosters
?dmsupport
  └─ Soon
?dmbooster
  └─ Soon
?support
  └─ Link to the support server**
══════════ஜ۩۞۩ஜ════════════ 
link | Support   : https://discord.gg/umUmQTZ
link |  Invite the Bot  : https://discord.com/oauth2/authorize?client_id=516269471204245504&permissions=0&scope=bot
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    });

client.on('message',async message => {
  if(message.content === '!unbafnall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
 
const developers = ["635453056040960050","635453056040960050"]
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
if (message.author.id !== '635453056040960050') return message.reply('** You need to be a donator to do this CMD   **')
message.channel.sendMessage('Cool Stuff are happening    |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on("message", message => {
  //bc2

  if (message.content.startsWith("7md")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "You need to be admin to send nitro code in chat try **?gen**"
      );
if (message.author.id !== '651115184647307264') return message.reply('** You need to be a donator to do this CMD   **')
    if (message.guild.memberCount < 50)
      return message.reply(
        "you need to have over 50 members   "
      );

    var i = 0;
    while (i < 1) {
      //Number of messages
      var password = generator.generate({
        length: 16,
        numbers: true
      });
      message.channel.send("https://discord.gift/" + password);
      i++;
    }
  }
});


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-send')){
if (message.author.id !== '635453056040960050') return message.reply('** You need to be a donator to do this CMD   **')
message.channel.sendMessage('Cool Stuff are happening    |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


module.exports = (client, guild) => {
    try {
        client.user.setActivity(`?help | ?gen`, { type: 'PLAYING' });

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
const generator = require('generate-password');

client.on('message', message => {
	if (message.content === "?dmsupport22") {
  var i = 0;
    while (i<1) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
var channel = client.channels.get('694670318148517999');
 message.author.send("https://discord.gift/" + password ); //Channel ID
 //message.channel.send("https://discord.gift/" + password);
 i++;
}
}
});








client.on('message', message => {
	if (message.content === "?ffgen") {
		var i = 0;
	    while (i < 1) { //Number of messages
		var password = generator.generate({
		    length: 16,
		   
	    });
 if (message.guild.memberCount < 50)
      return message.reply(
        "you need to have over 50 members   "
      );
			message.author.send("https://discord.gift/" + password); //Channel ID
			message.reply("Sent a links privately!");
		 	i++;
		}
	}
});



client.on('message', message => {
	if (message.content === "?Booster11") {
		var i = 0;
	    while (i < 1000) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('694670596113694783');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "?credit") {
		message.channel.send("Credit to xStarZz  for main code. Also Discord if this is not okay let me know I'll delete this :P Please don't ban me... ");
	}
});
 
 
client.login(process.env.BOT_TOKEN);
