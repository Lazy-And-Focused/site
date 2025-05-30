import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";

class Command implements ICommand {
  public readonly name = "help";

  public async execute(interaction: IInteraction, data: Parameters<ICommand["execute"]>["1"]) {
    if (!interaction.text) {
      return interaction.reply("Не предвиненная ошибка. Текста запроса не найден.");
    };
    if (!interaction.from) {
      return interaction.reply("Не предвиденная ошибка. Отправитель не найден.");
    };

    if (interaction.text.split(" ").length > 1 && data) {
      const command = interaction.text.split(" ")[1];
      
      const sendHelp = data.help.get(command);

      if (!sendHelp) {
        return interaction.reply(`Команда ${command} не была найдена.`);
      }

      return sendHelp(interaction);
    };

    return interaction.reply(`Используйте /${this.name} {command name}, чтобы посмотреть команду.\nВсе возможные команды:\n/${data && data.help && Array.from(data.help.keys()).join("\n/")}`);
  }
}

export default Command;
