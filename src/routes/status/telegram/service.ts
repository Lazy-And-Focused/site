import { start } from "telegram";

class Service {
  public constructor() {};

  public get() {
    const client = start();

    return {
      commands: client.data.commands,
      listeners: client.data.listeners,
      bot: {
        ...client.bot.botInfo
      }
    };
  }
};

export { Service };

export default Service;
