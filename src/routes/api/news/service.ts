import { News } from "database/models/news.model";
import Parser from "database/parse";

const parser = new Parser("news");

class Service {
  public constructor() {}

  public async getAll(query: { length: string, offset: string }) {
    const filter = query.length === "-1"
      ? { skip: Number(query.offset) }
      : { limit: Number(query.length), skip: Number(query.offset) };

    return (await News.find({}, {}, { sort: { date: "desc" }, ...filter })).map(n => parser.execute(n));
  }

  public async getOne(name: string) {
    return parser.execute(await News.findOne({name: name}));
  }
}

export { Service };

export default Service;
