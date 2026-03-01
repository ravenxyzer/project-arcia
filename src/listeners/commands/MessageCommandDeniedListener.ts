import { Events, Identifiers, Listener, UserError } from "@sapphire/framework";
import { Message } from "discord.js";

export class MessageCommandDeniedListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            name: "MessageCommandDenied",
            event: Events.MessageCommandDenied,
        });
    }

    public async run(error: UserError, message: Message) {
        switch (error.identifier) {
            case Identifiers.ArgsMissing:
                return message.reply("You are missing some arguments for this command. Please check usage and try again.");

            case Identifiers.ArgsUnavailable:
                return message.reply("Some arguments you provided are unavailable. Please check usage and try again.");

            case Identifiers.ArgumentBooleanError:
                return message.reply("One of the arguments must be true or false.");

            case Identifiers.ArgumentChannelError:
                return message.reply("Please provide a valid channel.");

            case Identifiers.ArgumentDateError:
                return message.reply("Invalid date format.");

            case Identifiers.ArgumentDateTooEarly:
                return message.reply("The date you provided is too early.");

            case Identifiers.ArgumentDateTooFar:
                return message.reply("The date you provided is too far in the future.");

            case Identifiers.ArgumentDMChannelError:
                return message.reply("Please provide a valid DM channel.");

            case Identifiers.ArgumentEmojiError:
                return message.reply("Invalid emoji provided.");

            case Identifiers.ArgumentFloatError:
                return message.reply("Please provide a valid decimal number.");

            case Identifiers.ArgumentFloatTooLarge:
                return message.reply("Number is too large.");

            case Identifiers.ArgumentFloatTooSmall:
                return message.reply("Number is too small.");

            case Identifiers.ArgumentGuildError:
                return message.reply("Invalid server provided.");

            case Identifiers.ArgumentGuildCategoryChannelError:
                return message.reply("Please provide a valid category channel.");

            case Identifiers.ArgumentGuildChannelError:
                return message.reply("Please provide a valid server channel.");

            case Identifiers.ArgumentGuildChannelMissingGuildError:
                return message.reply("This channel argument requires a server context.");

            case Identifiers.ArgumentGuildNewsChannelError:
                return message.reply("Please provide a valid announcement channel.");

            case Identifiers.ArgumentGuildNewsThreadChannelError:
                return message.reply("Please provide a valid news thread channel.");

            case Identifiers.ArgumentGuildPrivateThreadChannelError:
                return message.reply("Please provide a valid private thread.");

            case Identifiers.ArgumentGuildPublicThreadChannelError:
                return message.reply("Please provide a valid public thread.");

            case Identifiers.ArgumentGuildStageVoiceChannelError:
                return message.reply("Please provide a valid stage channel.");

            case Identifiers.ArgumentGuildTextChannelError:
                return message.reply("Please provide a valid text channel.");

            case Identifiers.ArgumentGuildThreadChannelError:
                return message.reply("Please provide a valid thread channel.");

            case Identifiers.ArgumentGuildVoiceChannelError:
                return message.reply("Please provide a valid voice channel.");

            case Identifiers.ArgumentHyperlinkError:
                return message.reply("Please provide a valid URL.");

            case Identifiers.ArgumentIntegerError:
                return message.reply("Please provide a valid integer.");

            case Identifiers.ArgumentIntegerTooLarge:
                return message.reply("The number is too large.");

            case Identifiers.ArgumentIntegerTooSmall:
                return message.reply("The number is too small.");

            case Identifiers.ArgumentMemberError:
                return message.reply("Could not find that member.");

            case Identifiers.ArgumentMemberMissingGuild:
                return message.reply("Member arguments can only be used inside a server.");

            case Identifiers.ArgumentMessageError:
                return message.reply("Could not find that message.");

            case Identifiers.ArgumentNumberError:
                return message.reply("Please provide a valid number.");

            case Identifiers.ArgumentNumberTooLarge:
                return message.reply("That number is too large.");

            case Identifiers.ArgumentNumberTooSmall:
                return message.reply("That number is too small.");

            case Identifiers.ArgumentRoleError:
                return message.reply("Invalid role provided.");

            case Identifiers.ArgumentRoleMissingGuild:
                return message.reply("Role arguments can only be used inside a server.");

            case Identifiers.ArgumentStringTooLong:
                return message.reply("The text you provided is too long.");

            case Identifiers.ArgumentStringTooShort:
                return message.reply("The text you provided is too short.");

            case Identifiers.ArgumentUserError:
                return message.reply("Invalid user provided.");

            case Identifiers.ArgumentEnumEmptyError:
                return message.reply("No valid options available for this argument.");

            case Identifiers.ArgumentEnumError:
                return message.reply("Invalid option provided.");

            case Identifiers.CommandDisabled:
                return message.reply("This command is currently disabled.");

            case Identifiers.PreconditionCooldown:
                return message.reply("⏳ Please wait before using this command again.");

            case Identifiers.PreconditionNSFW:
                return message.reply("This command can only be used in NSFW channels.");

            case Identifiers.PreconditionClientPermissions:
                return message.reply("I don't have permission to run this command.");

            case Identifiers.PreconditionClientPermissionsNoClient:
                return message.reply("Client permission check failed.");

            case Identifiers.PreconditionClientPermissionsNoPermissions:
                return message.reply("Missing required bot permissions.");

            case Identifiers.PreconditionRunIn:
                return message.reply("This command cannot be used in this context.");

            case Identifiers.PreconditionUserPermissions:
                return message.reply("You don't have permission to use this command.");

            case Identifiers.PreconditionUserPermissionsNoPermissions:
                return message.reply("You are missing required permissions.");

            case Identifiers.PreconditionUnavailable:
                return message.reply("This command is currently unavailable.");

            case Identifiers.PreconditionMissingMessageHandler:
                return message.reply("This command cannot be used as a message command.");

            case Identifiers.PreconditionMissingChatInputHandler:
                return message.reply("This command cannot be used as a slash command.");

            case Identifiers.PreconditionMissingContextMenuHandler:
                return message.reply("This command cannot be used as a context menu.");

            default:
                return message.reply("An unknown error occurred while running this command.");
        }
    }
}
