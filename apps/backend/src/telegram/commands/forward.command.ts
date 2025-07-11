import { Message } from "telegraf/typings/core/types/typegram";

import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";

import { messages } from "../utils/forward-news.utility";

const UTILS: { [key: string]: Map<any, any> } = {
  news: messages,
};

const FORWARD_TYPES = Object.keys(UTILS);
const SPACE = "\n";

const help =
  "\n\nИспользуйте в качестве разделителя перенос строки." +
  "\n\nКоличество аргументов: три: `forwardType`, name и `length`." +
  "\n\nОни идут последовательно, `forwardType` — тип переотправленного сообщения, например: `news`." +
  "\n\n`name` — название записи, обычно для того, что будет записывать в БД, иначе можете оставить пустым." +
  "\n\n`length` — количество переотправленных сообщений для прочтения." +
  "\n\n`name` поддерживает даты, можно написать: `Переотправленное сообщение за {date}`";

export const sendHelp = (interaction: IInteraction, prefix: string = "") => {
  return interaction.reply((prefix + help).replaceAll(".", "\\."), {
    parse_mode: "MarkdownV2",
  });
};

class Command implements ICommand {
  public readonly name = "forward";

  public async execute(interaction: IInteraction) {
    if (!interaction.text)
      return sendHelp(interaction, "Ошибка: текст не найден.");
    if (interaction.text.split(SPACE).length < 2)
      return sendHelp(
        interaction,
        "Ошибка: количетсво аргументов меньше одного.",
      );

    const [forwardType, name, length] = interaction.text.split(SPACE).slice(1);

    if (!FORWARD_TYPES.includes(forwardType))
      return sendHelp(
        interaction,
        "Ошибка: тип взаимодействия " + forwardType + " не найден.",
      );

    UTILS[forwardType].set(`${interaction.chat.id}`, {
      message: interaction.message as Message,
      type: "will_forwarded",
      length,
      name,
    });

    return interaction.reply(
      "Я прочитаю Ваши следующие переотправленые сообщения!",
    );
  }
}

export default Command;
