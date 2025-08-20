import { Context, NarrowedContext } from "telegraf";
import { Chat, Message, Update, User } from "telegraf/typings/core/types/typegram";

export type IForward = {
  forward_origin: { type: "channel", author_signature: string } | { type: "user", sender_user: User }
  forward_from_chat: Chat
  forward_signature: string,
  forward_date: number,
  text: string
} & Message;

export type IInteraction<T extends Context = any, K extends Update = any> =
	| Context
	| NarrowedContext<T, K>;