import Api from "../api";

import agent from "./bluesky.agent";

export class Bluesky extends Api {
  public readonly maxTextLength: number = 300;

  public post({ text }: { text: string }): Promise<unknown> {
    return agent.post({
      text,
      createdAt: new Date().toISOString()
    });
  }

  public put(): Promise<unknown> {
    throw new Error("PUT method is not possible");
  }
  
  public delete({ id }: { id: string }): Promise<unknown> {
    throw new Error(JSON.stringify({id}));
  }
}

export default Bluesky;
