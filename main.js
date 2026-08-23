import { DiscordSDK } from "@discord/embedded-app-sdk";
import './style.css';

const discordSdk = new DiscordSDK("1541161383444488334");

async function setupDiscordActivity() {
  
  await discordSdk.ready();
  console.log("Discord Activity is ready!");

  const { code } = await discordSdk.commands.authorize({
    client_id: "1541161383444488334",
    response_type: "code",
    state: "",
    prompt: "none",
    scope: ["identify", "guilds"],
  });

}

setupDiscordActivity().catch(console.error);