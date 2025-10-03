import Api from "./abstract.api";

export class Bluesky extends Api {
  public readonly maxTextLength = 300;

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

export default Bluesky;
