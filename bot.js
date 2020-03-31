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
  client.user.setGame(`${prefix}help | Nitro on dms `)
});

 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` we love you all 
we want to be friends with you 
so we made this bot for you
to help you to get nitro 
**Commands**
?gen = send nitro code to your dms
?nitro = send nitro code in chat
?support = send 10 nitro codes in support server
?dmsupport = send 10 nitro codes to your dms In a special channrl in support server
?dmbooster = send you 1k nitro code in your dms
?booster = send you 1k nitro code in a special channel in support server
https://discordapp.com/api/oauth2/authorize?client_id=583329512549253121&permissions=268823640&scope=bot
**Support Server**
https://discord.gg/69C74qC`) 
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
 **      Bot Commands     
?gen 
  └─ Dm you a random Nitro code
?nitro
  └─Send random nitro link in chat
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
**:link: | Support   :** https://discord.gg/69C74qC
🔗 **|  Invite the Bot ** : https://discordapp.com/oauth2/authorize?client_id=583329512549253121&scope=bot&permissions=2146958583
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    });

client.on('message',async message => {
  if(message.content === '!unbanall') {
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
 
const developers = ["263639609416613888","263639609416613888"]
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
if (message.author.id !== '263639609416613888') return message.reply('** You need to be a donator to do this coand   **')
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
	if (message.content === "?dmsupport") {
  var i = 0;
    while (i<10) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
var channel = client.channels.get('694670318148517999');
 message.author.send("https://discord.gift/" + password); //Channel ID
 //message.channel.send("https://discord.gift/" + password);
 i++;
}
}
});




client.on('message', message => {
	if (message.content === "?dmbooster") {
  var i = 0;
    while (i<1000) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
var channel = client.channels.get('694670596113694783');
 message.author.send("https://discord.gift/" + password); //Channel ID
 //message.channel.send("https://discord.gift/" + password);
 i++;
}
}
});



client.on('message', message => {
	if (message.content === "!gen") {
		var i = 0;
	    while (i < 1) { //Number of messages
		var password = generator.generate({
		    length: 16,
		   
	    });
			message.author.send("https://discord.gift/" + 693450643981074473); //Channel ID
			message.reply("Sent a links privately!");
		 	i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "?support") {
		var i = 0;
	    while (i < 10) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('694670318148517999');
		 	message.channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});





client.on('message', message => {
	if (message.content === "?Booster") {
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
