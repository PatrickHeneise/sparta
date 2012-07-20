var geonode = require('../geonode');
var should = require('should');

describe('Spatial bounding box calculation', function(){
  describe('#bbox()', function(){
    it('should return bounding box for Barcelona', function(){
      geonode.boundingBox(41.386549,2.170004,1).should.be.an.instanceOf(Array);
    })
  })
})
