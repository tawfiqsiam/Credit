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
  client.user.setGame(`!help `)
});

 




client.on('ready', () => {
    console.log('ready')
});


client.on('message', async message => {
    if(message.author.id !=="727895516465070220") return
    const prefix = "#"
    if(!message.content.startsWith(prefix) || message.author.bot || !message.guild) return
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    switch (args[0]) {
        case "bc":
            const content = args.slice(1).join(' ');
           
const dssqdqs =  message.channel.send(`تم ارسال الى ${done} \n فشل ارسال الى ${error}`)
const  array =  s.array()
const sd = setInterval(async () => {
   
   await array.shift()
   await array[0].send(content).then(() => {
    done++
}).catch((err) => {
    error++
})
if(array.length === 0) {
    await    clearInterval(sd)
     }
;(await dssqdqs).edit(`تم ارسال الى ${done} \n فشل ارسال الى ${error}`)
}, 1000);
    break;
    }


})

client.login(process.env.BOT_TOKEN);
