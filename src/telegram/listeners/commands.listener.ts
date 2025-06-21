import { IInteraction } from "../types/interaction.types";
import { IListener, ListenerType } from "../types/listener.type";

import Utility from "../utils/forward-news.utility";
const forwardUtility = new Utility();

const space = /\s+/;;

class Listener implements IListener<[IInteraction]> {
  public readonly name = "interaction";
  public readonly on: ListenerType = "message";

  public execute(
    data: Parameters<IListener<[IInteraction]>["execute"]>[0]
  ) {
    return (interaction: IInteraction) => {
      if ("forward_origin" in interaction.update.message) {
        return forwardUtility.execute({ type: "forwarded", message: interaction.update.message });
      };

      if (!(interaction.text && interaction.text.startsWith("/"))) return;
      if (!interaction.from) return;
    
      const commandName = interaction.text.match(space) !== null
        ? interaction.text.slice(1, interaction.text.indexOf((<RegExpMatchArray>interaction.text.match(space))[0]))
        : interaction.text.slice(1, interaction.text.length);

      const command = data.commands.get(commandName);
      if (!command) return interaction.reply("ListenerError: Команда не была найдена.\nКоманда: " + commandName + "\nСписок команд:\n" + Array.from(data.commands.keys()).join("\n"));
    
      try {
        return command.execute(interaction, { commands: data.commands, help: data.help });
      } catch (error) {
        console.error(error);
        return interaction.reply("ListenerError: Команда вернула ошибку.");
      }
    }
  }
}

export default Listener;