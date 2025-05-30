import { env } from "env";

import { Model } from "mongoose";
import { IInteraction } from "../types/interaction.types";
import Parser, { IModels } from "database/parse";

const actions = ["add", "update", "delete", "addmulti"];

class Utility<
  T extends {[key: string]: unknown},
  K extends IModels
> {
  public constructor(public readonly props: {
    model: Model<T>,
    parser: Parser<K>,
    sendHelp: (...data: any) => any,
    default: Readonly<{[key: string]: unknown}>,
    keys: Readonly<string[]>
    actions?: string[]
  }) {};

  public async execute(interaction: IInteraction) {
    if (!interaction.from) {
      return interaction.reply("Произошла непредвиденная ошибка.\ninteraction.from is not defined")
    };
    if (!env.get("TELEGRAM_BOT_ADMINS_ID").split(",").includes(`${interaction.from.id}`)) {
      return interaction.reply("Вас нет в списке администраторов LAF, вы не можете мной воспользоваться.");
    };
    if (!interaction.text) {
      return interaction.reply("Текст взаимодействия не найден.")
    };
    if (interaction.text.split("\n").length < 2 && interaction.text.split(" ")[1] !== "delete") {
      return this.props.sendHelp(interaction, "Ошикба 3. JSON не найден.");
    };
    if (interaction.text.split("\n")[0].split(" ").length < 2) {
      return this.props.sendHelp(interaction, "Ошибка 4. Действие не вписано.");
    };

    const action: string = interaction.text.split(" ")[1].split("\n")[0];
    let name: string = "NONE";
    
    if (!(this.props.actions || actions).includes(action)) {
      return this.props.sendHelp(interaction, "Ошибка 1. Действие не найдено.");
    };
    if (action !== "add") {
      if (interaction.text.split(" ").length < 3) {
        return this.props.sendHelp(interaction, "Ошибка 2. Имя не вписано.");
      }

      name = interaction.text.split(" ")[2].split("\n")[0];
    };
    
    try {
      if (action === "delete") {
        return interaction.reply(
          "Действие выполнено.\n" + JSON.stringify(
            await this.props.model.deleteOne({ name: name }), undefined, 2
        ));
      };

      if (action === "addmulti") {
        return interaction.reply(
          "Действие выполнено." + JSON.stringify(
            JSON.parse(interaction.text.split("\n").splice(1).join(""))
              .map(async (m: any) => {
                const member: T = { ...this.props.default, ...m };

                this.props.keys.forEach(k => {
                  if (!(k in member)) throw new Error(`Ключ ${k} не найден в JSON`);
                });

                return await this.props.model.create(member);
              }
            )
         )
        );
      };

      const json = {
        ...this.props.default,
        ...JSON.parse(interaction.text.split("\n").splice(1).join(""))
      } as T;

      if (action === "add") {
        this.props.keys.forEach(k => {
          if (!(k in json)) throw new Error(`Ключ ${k} не найден в JSON`);
        });
      };

      return interaction.reply("Действие выполнено.\n" + JSON.stringify((
        action === "add"
          ? await this.props.model.create(this.props.parser.execute(json))
          : await this.props.model.updateOne({ name: name }, json)
      ), undefined, 2));
    } catch (error) {
      return interaction.reply("Произошла непредвиденная ошибка.\n" + error);
    }
  }
}

export { Utility };

export default Utility;
