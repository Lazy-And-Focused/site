import Api from "./api";

export class BlueskyApi extends Api {
  public readonly maxTextLength: number = 300;

  public post({ text }: { text: string }): Promise<unknown> {
    throw new Error(JSON.stringify({text}));
  }

  public put({ id, text }: { id: string, text: string }): Promise<unknown> {
    throw new Error(JSON.stringify({id, text}));
  }
  
  public delete({ id }: { id: string }): Promise<unknown> {
    throw new Error(JSON.stringify({id}));
  }
}

export default BlueskyApi;
