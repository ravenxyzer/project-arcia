import { Events, Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            event: Events.ClientReady,
            once: true,
        });
    }

    public async run() {
        this.container.logger.info(`Logged in as ${this.container.client.user?.tag} (${this.container.client.user?.id})`);
    }
}
