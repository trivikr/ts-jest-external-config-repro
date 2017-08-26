const oddOrEven = async (num: number): Promise<string> =>
  num % 2 === 0 ? "even" : "odd";

export { oddOrEven };
