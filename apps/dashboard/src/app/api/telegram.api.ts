import Api from "./abstract.api";

export class Telegram extends Api {
  public readonly maxTextLength = 2000;

  protected post(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  protected put(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  protected delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public constructor() {
    super();
  }
}

export default Telegram;
