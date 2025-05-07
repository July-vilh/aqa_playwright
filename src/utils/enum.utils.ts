// тут методы для енамов
// рандомный выбор из дроп-давна

export function getRandomEnumValue<T extends object>(enumObject: T): T[keyof T]{
  const value = Object.values(enumObject);
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
}