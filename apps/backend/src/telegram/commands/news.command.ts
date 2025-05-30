import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";

import { KEYS, INews, DEFAULT } from "types/news.type";

import { News } from "models/news.model";
import Parser from "database/parse";
import Utility from "../utils/database.command-utility";

const helpJson = JSON.stringify(<INews>{
  name: "Продажный релизный поток #1",
  author: "FOCKUSTY",
  date: new Date().toISOString(),
  text: "Это пример текста для новостей:)",
  banner: "Этот релиз не для продажи.",
  icon: "",
  image: ""
}, undefined, 2);

const actions = ["add", "update", "delete", "addmulti"];

const help =
  "Учтите, Вы должны передавать участник в типе JSON на следующей строке.\n"
  + "Например:\n/news add\n"
  + helpJson

const addition =
  "\n\nВсе возможные вариации команды:\n" + actions.map(c => "/news " + c).join("\n")
  + "\n\nДля обновления пользователя введите: /news update {{ news name }}\n{{ JSON data }}"
  + "\n\nДля удаления пользователя введите /news delete {{ news name }}";

export const sendHelp = (interaction: IInteraction, prefix: string = "") => {
  return interaction.reply((prefix + "\n") + help + addition, { entities: [{
    offset: (prefix + "\n").length + help.length - helpJson.length,
    length: helpJson.length,
    type: "blockquote"
  }]});
}

const parser = new Parser("news");

class Command implements ICommand {
  public readonly name = "news";

  public async execute(interaction: IInteraction) {
    new Utility({
      default: DEFAULT,
      keys: KEYS,
      model: News,
      parser: parser,
      sendHelp: sendHelp
    }).execute(interaction);
  }
}

export default Command;