import { EmbedBuilder } from "discord.js";

export class ArciaEmbedBuilder extends EmbedBuilder {
    constructor() {
        super();
        this.setColor("#de81b2");
    }

    public isSuccessEmbed() {
        this.setColor("#00ff00");
        return this;
    }

    public isErrorEmbed() {
        this.setColor("#ff0000");
        return this;
    }
}
