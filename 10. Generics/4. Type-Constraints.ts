export {};
// 类型约束
// Type constraint using the 'extends' keyword
interface Identifiable {
  id: number;
}

// Generic function with a type constraint
// T extends Identifiable 表示 T 只能是满足该接口的类型，因此 T 至少有 id 这个键，类型为 number
// extends 只是“包含至少这些属性”的约束，不会禁止其他键
function mergeObjects<T extends Identifiable, U extends Record<string, any>>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

// Example usage
const object1 = { id: 1, name: "Object 1" };
const object2 = { id: 2, description: "Object 2" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
// Outputs: { id: 1, name: 'Object 1', description: 'Object 2' }
