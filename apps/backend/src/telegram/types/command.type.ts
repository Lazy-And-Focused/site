import { IInteraction } from "./interaction.types";

export interface ICommand<Execute = any> {
  name: string;
  execute: (interaction: IInteraction, data?: {
    commands: Map<string, ICommand>,
    help: Map<string, (interaction: IInteraction, prefix?: string) => Promise<any>>
  }) => Execute
}

export type Commands = Map<string, ICommand>;