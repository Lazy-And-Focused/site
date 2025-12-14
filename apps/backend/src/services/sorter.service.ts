const SORT_TYPES = ["desc", "asc"];

export type QuerySort = {
  length: string;
  offset: string;
  sortBy: string;
  sortType: string;
};

export class Sorter {
  public constructor(public readonly sortBy: string[]) {}

  public execute(query: QuerySort) {
    const filter =
      query.length === "-1"
        ? { skip: Number(query.offset) }
        : { limit: Number(query.length), skip: Number(query.offset) };

    const sortBy = this.sortBy.includes(query.sortBy)
      ? query.sortBy
      : this.sortBy[0];

    const sortType = SORT_TYPES.includes(query.sortType)
      ? query.sortType
      : SORT_TYPES[0];

    return {
      filter,
      sort: {
        [sortBy]: sortType,
      },
    };
  }
}

export default Sorter;
