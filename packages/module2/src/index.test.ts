import { test, expect } from 'vitest'

import { Module1 } from 'module1'

test(`Module1`, async () => {
  expect(Module1.blabla).toBe(1)
})
