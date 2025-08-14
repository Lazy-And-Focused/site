import { Message } from "telegraf/typings/core/types/typegram";

import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";

import { messages } from "../utils/forward-news.utility";

const UTILS: {[key: string]: Map<any, any> } = {
  "news": messages
};

const FORWARD_TYPES = Object.keys(UTILS);
const SPACE = "\n";

export const sendHelp = (interaction: IInteraction, prefix: string = "") => {
  return interaction.reply(prefix + "\n");
}

class Command implements ICommand {
  public readonly name = "forward";

  public async execute(interaction: IInteraction) {
    if (!interaction.text) return sendHelp(interaction, "Ошибка: текст не найден.");
    if (interaction.text.split(SPACE).length < 2) return sendHelp(interaction, "Ошибка: количетсво аргументов меньше одного.");
    
    const [ forwardType, name, length ] = interaction.text.split(SPACE).slice(1);

    if (!FORWARD_TYPES.includes(forwardType)) return sendHelp(interaction, "Ошибка: тип взаимодействия " + forwardType + " не найден.");

    UTILS[forwardType].set(`${interaction.chat.id}`, {
      message: interaction.message as Message,
      type: "will_forwarded",
      length, name
    });

    return interaction.reply("Я прочитаю Ваши следующие переотправленые сообщения!");
  }
}

export default Command;
