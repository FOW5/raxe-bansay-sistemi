const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let raxe = message.guild;
  raxe
    .fetchBans()
    .then(raxe =>
    message.channel.send(`<a:banned:807559177324331028> Bu Sunucuda Toplam Ban sayısı ${raxe.size} Bu kadar!`)
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay",
  description: "Sunucudan banlanan kişilerin sayısını gösterir",
  usage: "bansay"
};