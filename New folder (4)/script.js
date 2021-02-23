function findRoutes(routes) {
  const trace = []; // A tracked route

  routes
    .map((currentPair) => {
      // Search ficrst point
      console.log(currentPair);

      if (!routes.find((point) => point[1] === currentPair[0])) {
        // Push first point to the route
        trace.push(currentPair[0]);
        trace.push(currentPair[1]);
      }
    })
    .map(() => {
      // Compute a route
      routes.map((currentPair) => {
        // Push next point to the route
        currentPair[0] === trace[trace.length - 1] &&
          trace.push(currentPair[1]);
      });
    });

  return console.log(trace.join(", "));
}

findRoutes([
  ["USA", "BRA"],
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["UAE", "JPN"],
]);
