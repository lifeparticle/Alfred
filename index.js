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
	if (!channel)
		return;

	const joinMsg = new Discord.MessageEmbed()
	.setTitle(`A new member has arrived!`)
	.setDescription(`Welcome ${member}`)
	.setColor("#FF0000");

	channel.send(joinMsg);
});

client.login(process.env.token);