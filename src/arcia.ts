import "dotenv/config";
import "@sapphire/plugin-utilities-store/register";

import { ArciaClient } from "./lib/extensions/ArciaClient";

export const client: ArciaClient = new ArciaClient();

client.login(process.env.TOKEN).catch((error) => {
    client.logger.fatal("Failed to login the client:", error);
    process.exit(1);
});
