import { ICommand } from "../types/command.type";
import { IInteraction } from "../types/interaction.types";

class Command implements ICommand {
  public readonly name = "start";

  public async execute(interaction: IInteraction) {
    return interaction.reply("Привет! Я бот от LAF, скорее всего, если ты обычный пользователь, то ты не сможешь мной воспользоваться, извини.")
  }
}

export default Command;
