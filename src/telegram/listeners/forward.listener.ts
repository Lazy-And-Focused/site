import { IForward, IInteraction } from "../types/interaction.types";
import { IListener, ListenerType } from "../types/listener.type";

import Utility from "../utils/forward-news.utility";

const forwardUtility = new Utility();

class Listener implements IListener<[IInteraction]> {
  public readonly name = "forward";
  public readonly on: ListenerType = "message";

  public execute() {
    return async (interaction: IInteraction) => {
      const message = interaction.update.message as IForward;

      const forwarded = "forward_origin" in message;
      if (!forwarded) return;

      return forwardUtility.execute({ type: "forwarded", message });
    };
  }
}

export default Listener;