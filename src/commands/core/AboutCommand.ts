import { Command } from "@sapphire/framework";
import { Time } from "@sapphire/time-utilities";
import { Message } from "discord.js";
import { ArciaEmbedBuilder } from "../../lib/extensions/ArciaEmbedBuilder";

export class AboutCommand extends Command {
    public constructor(context: Command.LoaderContext, options: Command.Options) {
        super(context, {
            ...options,
            name: "about",
            description: "Displays information about the bot.",
            cooldownDelay: Time.Second * 5,
        });
    }

    public override async messageRun(message: Message): Promise<Message> {
        const embed: ArciaEmbedBuilder = new ArciaEmbedBuilder()
            .setAuthor({ name: "Project Arcia", iconURL: message.client.user?.displayAvatarURL({ size: 128 }) })
            .setDescription(
                "Project Arcia is a multi-purpose Discord bot designed to streamline server management and enhance community interaction. Built with versatility in mind, it offers a wide range of utilities, automation tools, and interactive features to support moderators, entertain members, and improve overall server efficiency.",
            );

        return message.reply({ embeds: [embed] });
    }
}
