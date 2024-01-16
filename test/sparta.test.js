import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fn from '../sparta.js'

describe('Spatial bounding box calculation', function () {
  describe('#bbox()', function () {
    it('should return bounding box for Barcelona', function () {
      const actual = fn(41.386549, 2.170004, 1)
      const expected = [
        41.37755272524924, 2.1580132245449786, 41.395545274750766,
        2.181994775455022
      ]
      assert.equal(Array.isArray(actual), true)
      assert.deepStrictEqual(actual, expected)
    })
  })
})
