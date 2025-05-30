import { Commands, ICommand } from "./command.type";
import { IInteraction } from "./interaction.types";
import { IListener, Listeners } from "./listener.type";

export interface IDeployData {
  commands: Commands,
  listeners: Listeners,
  help: Map<string, (interaction: IInteraction) => void>
};

export interface IDeployJson {
  commands: { [key: string]: ICommand },
  listeners: { [key: string]: IListener },
  help: { [key: string]: (interaction: IInteraction) => void }
};