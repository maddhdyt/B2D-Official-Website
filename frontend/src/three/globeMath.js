import * as THREE from "three";

export const EARTH_RADIUS = 3;

export const cities = [
  { name: "Jakarta", lat: -6.2, lon: 106.8 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Tokyo", lat: 35.68, lon: 139.69 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
  { name: "Dubai", lat: 25.2, lon: 55.27 },
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "New York", lat: 40.71, lon: -74.01 },
  { name: "San Francisco", lat: 37.77, lon: -122.42 },
  { name: "Sao Paulo", lat: -23.55, lon: -46.63 },
];

export const routes = cities.slice(1).map((city) => [cities[0], city]);

export function latLngToVector3(lat, lon, radius = EARTH_RADIUS) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export function createRouteCurve([start, end], index) {
  const startPoint = latLngToVector3(start.lat, start.lon, EARTH_RADIUS * 1.012);
  const endPoint = latLngToVector3(end.lat, end.lon, EARTH_RADIUS * 1.012);
  const midpoint = startPoint
    .clone()
    .add(endPoint)
    .normalize()
    .multiplyScalar(EARTH_RADIUS + 0.28 + (index % 3) * 0.08);

  return new THREE.QuadraticBezierCurve3(startPoint, midpoint, endPoint);
}
