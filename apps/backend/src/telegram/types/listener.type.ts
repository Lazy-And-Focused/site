import { Guard, MaybeArray } from "telegraf/typings/core/helpers/util";
import { Update } from "telegraf/typings/core/types/typegram";
import { UpdateType } from "telegraf/typings/telegram-types";
import { Commands } from "./command.type";
import { IInteraction } from "./interaction.types";

export type ListenerType = MaybeArray<UpdateType | Guard<Update>>

export interface IListener<Event extends any[] = any> {
  name: string;
  on: ListenerType;
  execute: (data: {
    commands: Commands,
    help: Map<string, (interaction: IInteraction, prefix?: string) => Promise<any>>
  }) => (...data: Event) => Promise<any>
};

export type Listeners = Map<string, IListener>;