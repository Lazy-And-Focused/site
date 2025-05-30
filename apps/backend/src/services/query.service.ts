interface ParsedQs {
  [key: string]: undefined | string | ParsedQs | (string | ParsedQs)[];
}

class QueryService<T extends any[] | Readonly<any[]>> {
  public constructor(public readonly existsQuery: T) {};

  public parse(
    query: ParsedQs,
    defaultQuery: Record<T[number], string>
  ) {
    return Object.fromEntries(this.existsQuery.map((q: T[number]) => {
      return [q, query[q] || defaultQuery[q]]
    })) as Record<T[number], string>;
  }
}

export { QueryService }

export default QueryService;