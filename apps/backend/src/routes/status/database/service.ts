import { status } from "database/connect";

class Service {
  public constructor() {};

  public get() {
    return status;
  }
};

export { Service };

export default Service;
