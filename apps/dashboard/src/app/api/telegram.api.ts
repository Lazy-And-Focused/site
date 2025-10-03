import Api from "./abstract.api";

export class Telegram extends Api {
  public readonly maxTextLength = 2000;

  public post(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public put(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public constructor() {
    super();
  }
}

export default Telegram;
