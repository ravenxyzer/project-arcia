import { LogLevel, SapphireClient } from "@sapphire/framework";
import { Time } from "@sapphire/time-utilities";
import { Developers } from "../utils/Constants";

const logLevel = process.env.NODE_ENV === "production" ? LogLevel.Info : LogLevel.Debug;

export class ArciaClient extends SapphireClient {
    public constructor() {
        super({
            allowedMentions: {
                parse: ["users", "roles"],
                repliedUser: false,
            },
            caseInsensitiveCommands: true,
            caseInsensitivePrefixes: true,
            defaultCooldown: { delay: Time.Second * 5, filteredUsers: Developers },
            defaultPrefix: "a!",
            disableMentionPrefix: true,
            regexPrefix: /^(hey +)?arcia[,! ]/i,
            intents: [
                "AutoModerationConfiguration",
                "AutoModerationExecution",
                "DirectMessagePolls",
                "DirectMessageReactions",
                "DirectMessageTyping",
                "DirectMessages",
                "GuildBans",
                "GuildEmojisAndStickers",
                "GuildIntegrations",
                "GuildInvites",
                "GuildMembers",
                "GuildMessageReactions",
                "GuildMessageTyping",
                "GuildMessages",
                "GuildPresences",
                "GuildScheduledEvents",
                "GuildVoiceStates",
                "Guilds",
                "MessageContent",
            ],
            loadApplicationCommandRegistriesStatusListeners: true,
            loadDefaultErrorListeners: false,
            loadMessageCommandListeners: true,
            logger: { level: logLevel },
        });
    }

    public override async login(token?: string) {
        return super.login(token);
    }

    public override async destroy() {
        return super.destroy();
    }
}
