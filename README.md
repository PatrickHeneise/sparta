# geonode

`geonode` is a minimalistic spatial calculation library for node.js based on the python code from Federico Ramponi (http://stackoverflow.com/a/238558)

# usage
``` js
  geonode = require('geonode')
  // return a bounding box of Barcelona with a radius of 5km.
  geonode.boundingBox(41.386549,2.170004,1);
  
```

# test
``` js
  npm install mocha should
  mocha
```