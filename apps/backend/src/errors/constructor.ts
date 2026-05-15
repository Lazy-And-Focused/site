export class ErrorConstructor<T extends string> {
  public constructor(
    public readonly prefix: string,
    public readonly errors: Record<T, string>,
  ) {}

  public execute(): Record<T, string> {
    return <Record<T, string>>(
      Object.fromEntries(
        Object.keys(this.errors).map((key, index) => [
          key,
          `${this.prefix}: ${this.errors[key]} #${index + 1}`,
        ]),
      )
    );
  }
}

export default ErrorConstructor;
