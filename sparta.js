/** minimal spatial calculation library
 * based on Federico Ramponi's python code (http://stackoverflow.com/a/238558)
 *
 * Semi-axes of WGS-84 geoidal reference
 * Earth radius at a given latitude, according to the WGS-84 ellipsoid [m]
 * Bounding box surrounding the point at given coordinates,
 * assuming local approximation of Earth surface as a sphere
 * of radius given by WGS84
 *
 * copyright 2012 patrick heneise
 *
 * @author Patrick Heneise, @PatrickHeneise
 */

const WGS84_a = 6378137.0 // Major semiaxis [m]
const WGS84_b = 6356752.3 // Minor semiaxis [m]

function deg2rad(degrees) {
  return (Math.PI * degrees) / 180.0
}

function rad2deg(radians) {
  return (180.0 * radians) / Math.PI
}

function WGS84EarthRadius(lat) {
  const An = WGS84_a * WGS84_a * Math.cos(lat)
  const Bn = WGS84_b * WGS84_b * Math.sin(lat)
  const Ad = WGS84_a * Math.cos(lat)
  const Bd = WGS84_b * Math.sin(lat)
  return Math.sqrt((An * An + Bn * Bn) / (Ad * Ad + Bd * Bd))
}

function boundingBox(latitudeInDegrees, longitudeInDegrees, halfSideInKm) {
  const lat = deg2rad(latitudeInDegrees)
  const lon = deg2rad(longitudeInDegrees)
  const halfSide = 1000 * halfSideInKm

  // Radius of Earth at given latitude
  const radius = WGS84EarthRadius(lat)
  // Radius of the parallel at given latitude
  const pradius = radius * Math.cos(lat)

  const latMin = lat - halfSide / radius
  const latMax = lat + halfSide / radius
  const lonMin = lon - halfSide / pradius
  const lonMax = lon + halfSide / pradius

  const bbox = [
    rad2deg(latMin),
    rad2deg(lonMin),
    rad2deg(latMax),
    rad2deg(lonMax)
  ]

  return bbox
}

export default boundingBox
export { boundingBox }
