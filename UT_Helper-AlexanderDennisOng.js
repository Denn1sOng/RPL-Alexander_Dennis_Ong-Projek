

import { sum, capitalize } from './functions';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('capitalize function', () => {
  test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalizes the first letter of an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalizes the first letter of a sentence', () => {
    expect(capitalize('this is a sentence.')).toBe('This is a sentence.');
  });
});
