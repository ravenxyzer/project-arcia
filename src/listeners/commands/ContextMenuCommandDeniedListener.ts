import { ContextMenuCommand, Events, Identifiers, Listener, UserError } from "@sapphire/framework";

export class ContextMenuCommandDeniedListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            name: "ContextMenuCommandDenied",
            event: Events.ContextMenuCommandDenied,
        });
    }

    public async run(error: UserError, interaction: ContextMenuCommand.Interaction) {
        switch (error.identifier) {
            case Identifiers.ArgsMissing:
                return interaction.reply("You are missing some arguments for this command. Please check usage and try again.");

            case Identifiers.ArgsUnavailable:
                return interaction.reply("Some arguments you provided are unavailable. Please check usage and try again.");

            case Identifiers.ArgumentBooleanError:
                return interaction.reply("One of the arguments must be true or false.");

            case Identifiers.ArgumentChannelError:
                return interaction.reply("Please provide a valid channel.");

            case Identifiers.ArgumentDateError:
                return interaction.reply("Invalid date format.");

            case Identifiers.ArgumentDateTooEarly:
                return interaction.reply("The date you provided is too early.");

            case Identifiers.ArgumentDateTooFar:
                return interaction.reply("The date you provided is too far in the future.");

            case Identifiers.ArgumentDMChannelError:
                return interaction.reply("Please provide a valid DM channel.");

            case Identifiers.ArgumentEmojiError:
                return interaction.reply("Invalid emoji provided.");

            case Identifiers.ArgumentFloatError:
                return interaction.reply("Please provide a valid decimal number.");

            case Identifiers.ArgumentFloatTooLarge:
                return interaction.reply("Number is too large.");

            case Identifiers.ArgumentFloatTooSmall:
                return interaction.reply("Number is too small.");

            case Identifiers.ArgumentGuildError:
                return interaction.reply("Invalid server provided.");

            case Identifiers.ArgumentGuildCategoryChannelError:
                return interaction.reply("Please provide a valid category channel.");

            case Identifiers.ArgumentGuildChannelError:
                return interaction.reply("Please provide a valid server channel.");

            case Identifiers.ArgumentGuildChannelMissingGuildError:
                return interaction.reply("This channel argument requires a server context.");

            case Identifiers.ArgumentGuildNewsChannelError:
                return interaction.reply("Please provide a valid announcement channel.");

            case Identifiers.ArgumentGuildNewsThreadChannelError:
                return interaction.reply("Please provide a valid news thread channel.");

            case Identifiers.ArgumentGuildPrivateThreadChannelError:
                return interaction.reply("Please provide a valid private thread.");

            case Identifiers.ArgumentGuildPublicThreadChannelError:
                return interaction.reply("Please provide a valid public thread.");

            case Identifiers.ArgumentGuildStageVoiceChannelError:
                return interaction.reply("Please provide a valid stage channel.");

            case Identifiers.ArgumentGuildTextChannelError:
                return interaction.reply("Please provide a valid text channel.");

            case Identifiers.ArgumentGuildThreadChannelError:
                return interaction.reply("Please provide a valid thread channel.");

            case Identifiers.ArgumentGuildVoiceChannelError:
                return interaction.reply("Please provide a valid voice channel.");

            case Identifiers.ArgumentHyperlinkError:
                return interaction.reply("Please provide a valid URL.");

            case Identifiers.ArgumentIntegerError:
                return interaction.reply("Please provide a valid integer.");

            case Identifiers.ArgumentIntegerTooLarge:
                return interaction.reply("The number is too large.");

            case Identifiers.ArgumentIntegerTooSmall:
                return interaction.reply("The number is too small.");

            case Identifiers.ArgumentMemberError:
                return interaction.reply("Could not find that member.");

            case Identifiers.ArgumentMemberMissingGuild:
                return interaction.reply("Member arguments can only be used inside a server.");

            case Identifiers.ArgumentMessageError:
                return interaction.reply("Could not find that message.");

            case Identifiers.ArgumentNumberError:
                return interaction.reply("Please provide a valid number.");

            case Identifiers.ArgumentNumberTooLarge:
                return interaction.reply("That number is too large.");

            case Identifiers.ArgumentNumberTooSmall:
                return interaction.reply("That number is too small.");

            case Identifiers.ArgumentRoleError:
                return interaction.reply("Invalid role provided.");

            case Identifiers.ArgumentRoleMissingGuild:
                return interaction.reply("Role arguments can only be used inside a server.");

            case Identifiers.ArgumentStringTooLong:
                return interaction.reply("The text you provided is too long.");

            case Identifiers.ArgumentStringTooShort:
                return interaction.reply("The text you provided is too short.");

            case Identifiers.ArgumentUserError:
                return interaction.reply("Invalid user provided.");

            case Identifiers.ArgumentEnumEmptyError:
                return interaction.reply("No valid options available for this argument.");

            case Identifiers.ArgumentEnumError:
                return interaction.reply("Invalid option provided.");

            case Identifiers.CommandDisabled:
                return interaction.reply("This command is currently disabled.");

            case Identifiers.PreconditionCooldown:
                return interaction.reply("⏳ Please wait before using this command again.");

            case Identifiers.PreconditionNSFW:
                return interaction.reply("This command can only be used in NSFW channels.");

            case Identifiers.PreconditionClientPermissions:
                return interaction.reply("I don't have permission to run this command.");

            case Identifiers.PreconditionClientPermissionsNoClient:
                return interaction.reply("Client permission check failed.");

            case Identifiers.PreconditionClientPermissionsNoPermissions:
                return interaction.reply("Missing required bot permissions.");

            case Identifiers.PreconditionRunIn:
                return interaction.reply("This command cannot be used in this context.");

            case Identifiers.PreconditionUserPermissions:
                return interaction.reply("You don't have permission to use this command.");

            case Identifiers.PreconditionUserPermissionsNoPermissions:
                return interaction.reply("You are missing required permissions.");

            case Identifiers.PreconditionUnavailable:
                return interaction.reply("This command is currently unavailable.");

            case Identifiers.PreconditionMissingMessageHandler:
                return interaction.reply("This command cannot be used as a message command.");

            case Identifiers.PreconditionMissingChatInputHandler:
                return interaction.reply("This command cannot be used as a slash command.");

            case Identifiers.PreconditionMissingContextMenuHandler:
                return interaction.reply("This command cannot be used as a context menu.");

            default:
                return interaction.reply("An unknown error occurred while running this command.");
        }
    }
}
