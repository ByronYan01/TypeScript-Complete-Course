export {};
class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }
  // 私有字段只能类内部访问，外部直接访问会报错
  getScore(): number {
    return this.score;
  }
}

const dog1 = new Player("Elton", "Steele");
// console.log(dog1.score);
// dog1.secretMethod();
console.log(dog1.getScore());
