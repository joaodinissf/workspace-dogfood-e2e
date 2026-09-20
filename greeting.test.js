import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from './greeting.js';

test('greets a named person', () => {
  assert.equal(greeting('Ada'), 'Hello, Ada!');
});
