const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.channel.send('pong');
	}
});

client.on('guildMemberAdd', member => {

	const channel = member.guild.channels.cache.find(channel => channel.name === "general")
	if (!channel) return;

	const joinembed = new Discord.MessageEmbed()
	.setTitle(`A new member just arrived!`)
	.setDescription(`Welcome ${member} we hope you enjoy your stay here!`)
	.setColor("#FF0000");

	channel.send(joinembed);
});

client.login(process.env.token);