import { Message } from "telegraf/typings/core/types/typegram";
import { IForward } from "../types/interaction.types";

import { News } from "database/models/news.model";
import { fromMilisecondsToDate, formatDateToDayMonthYear } from "./date-formatter.utility";

export type IUtilityMessageForForwards = ({
  type: "forwarded",
  message: IForward
} | {
  type: "will_forwarded",
  message: Message
}) & {
  name?: string,
  length?: string
}

export const messages = new Map<string, IUtilityMessageForForwards>()

class Utility {
  public async execute(message: IUtilityMessageForForwards) {
    if (message.type !== "forwarded") return this;

    const data = messages.get(`${message.message.chat.id}`)
    if (!data) return this;

    const {
      forward_origin,
      text
    } = message.message;

    const dateInMiliseconds = message.message.forward_date;

    const date = fromMilisecondsToDate(dateInMiliseconds);
    if (data.length && !Number.isNaN(Number(data.length)) && Number(data.length) > 1) {
      messages.set(`${message.message.chat.id}`, {
        ...data,
        length: `${Number(data.length)-1}`
      });
    } else {
      messages.delete(`${message.message.chat.id}`);
    }

    try {
      const news = await News.create({
        name: message.name || `Отчёт за ${formatDateToDayMonthYear(date)}`,
        author: forward_origin.type === "channel"
          ? forward_origin.author_signature
          : forward_origin.sender_user.username || forward_origin.sender_user.first_name,
        text,
        date: date.toISOString()
      });
      
      console.log(`Была создана новость: "${news.name}" с датой ${formatDateToDayMonthYear(date)}`);
    } catch (error) {
      console.log(error);
      return this;        
    }

    return this;
  }
}

export { Utility };

export default Utility;
