import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with Pong!"),

	async execute(interaction: ChatInputCommandInteraction) {
		const sent = await interaction.reply({
			content: "Pinging...",
			fetchReply: true,
		});
		await interaction.editReply(
			`:ping_pong: Pong!\n:stopwatch: Uptime: ${Math.round(
				interaction.client.uptime / 60000
			)} minutes\n:sparkling_heart: Websocket heartbeat: ${
				interaction.client.ws.ping
			}ms.\n:round_pushpin: Rountrip Latency: ${
				sent.createdTimestamp - interaction.createdTimestamp
			}ms`
		);
	},
};
