/**
 * Each form class must implements this interface
 */
export interface MyForm<T> {
  reset(): void;
  toData(): T;
}
