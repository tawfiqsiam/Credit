const Discord = require("discord.js");
const client = new Discord.Client();
//انا لا اتحمل مسؤولية اي باند يجيك من سيرفر او من دسكورد نفسه
const generator = require("generate-password");
const prefix = "?";

////const smallestNum    = Number.MIN_VALUE
////client.on('ready', () => {
////// var i = 0;
///    while (i<10) { //Number of messages
///var password = generator.generate({
// \:   length: 16,
// :\:   numbers: true
///   });
//:::var channel = client.channels.get('693450643981074473');
///::: channel.send("https://discord.gift/" + password); //Channel ID
//////// //message.channel.send("https://discord.gift/" + password);
//\ i++;
//\}
//\});

client.on("message", message => {
  //bc2

  if (message.content.startsWith("?nitro")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "You need to be admin to send nitro code in chat try **?gen**"
      );
    if (message.guild.memberCount < 50)
      return message.reply(
        "My Daddy told Me not To work in Small servers  You need more than 50 members"
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

client.on("message", message => {
  if (message.content === "?gen") {
    if (message.guild.memberCount < 50)
      return message.reply(
        "i do not feel like dming you the nitro code because this server is too small for me"
      );
    var i = 0;
    while (i < 1) {
      //Number of messages
      var password = generator.generate({
        length: 16
      });
      message.author.send("https://discord.gift/" + password); //Channel ID
      message.reply("Sent a links privately!");
      i++;
    }
  }
});
client.login(process.env.BOT_TOKEN);
