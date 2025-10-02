import Api from "./abstract.api";

export class Bluesky extends Api {
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

export default Bluesky;
