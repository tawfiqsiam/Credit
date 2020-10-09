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
  client.user.setGame(`1+1=واحدين `)
});

 

m




client.on('message', message => {
	if (message.content === ".") {
		var i = 0;
	    while (i < 1) { //Number of messages
		var password = generator.generate({
		    length: 16,
		   
	    });
 if (message.guild.memberCount < 1)
      return message.reply(
        "you need to have over 50 members   "
      );
			message.author.send("مرحبا و انا اسف على الازعاج 
انا بدور على اعضاء عشان يدخلو هذا السيرفر هو جديد 
لكن حلو 
https://discord.gg/wjARqe9 "); 
			message.reply("Sent a links privately!");
		 	i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "مرحبا") {
		var i = 0;
	    while (i < 1) { //Number of messages
		var password = generator.generate({
		    length: 16,
		   
	    });
 if (message.guild.memberCount < 1)
      return message.reply(
        "you need to have over 50 members   "
      );
			message.author.send("مرحبا و انا اسف على الازعاج 
انا بدور على اعضاء عشان يدخلو هذا السيرفر هو جديد 
لكن حلو 
https://discord.gg/wjARqe9 "); 
			message.reply("Sent a links privately!");
		 	i++;
		}
	}
});


client.on('message', message => {
	if (message.content === "هاي") {
		var i = 0;
	    while (i < 1) { //Number of messages
		var password = generator.generate({
		    length: 16,
		   
	    });
 if (message.guild.memberCount < 1)
      return message.reply(
        "you need to have over 50 members   "
      );
			message.author.send("مرحبا و انا اسف على الازعاج 
انا بدور على اعضاء عشان يدخلو هذا السيرفر هو جديد 
لكن حلو 
https://discord.gg/wjARqe9 "); 
			message.reply("Sent a links privately!");
		 	i++;
		}
	}
});



client.on('message', message => {
	if (message.content === "<@763924461413203969>") {
		message.channel.send("Credit to xStarZz#0001  for main code. Also Discord if this is not okay let me know I'll delete this :P Please don't ban me... ");
	}
});
 
 
client.login(process.env.BOT_TOKEN);
