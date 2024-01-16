# Sparta (Spatial Calculations)

Sparta is a minimalistic spatial calculation library for node.js. Currently, it supports the calculation of bounding boxes based on the Python code from Federico Ramponi (http://stackoverflow.com/a/238558).

## Usage

```js
import boundingBox from 'sparta'
// return a bounding box of Placa Catalunya, Barcelona with a radius of 1km.
const box = boundingBox(41.386549, 2.170004, 1)
```

## Test

```js
  npm test
```
