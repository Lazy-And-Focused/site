export abstract class Api {
  protected abstract post(text: string): Promise<void>;
  protected abstract put(id: string, text: string): Promise<void>;
  protected abstract delete(id: string): Promise<void>;
}

export default Api;
