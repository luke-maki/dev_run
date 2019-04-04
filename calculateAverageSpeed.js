const getAverages = require('./calculateAverages');

function calculateAverageRunningSpeed() {
  const averages = getAverages();
  const averageSpeed = averages.runDistance / (averages.runTime / 60);
  return averageSpeed;
}

function calculateAverageWalkingSpeed() {
  const averages = getAverages();
  const averageSpeed = averages.walkDistance / (averages.walkTime / 60);
  return averageSpeed;
}

module.exports = {
  runningSpeed: calculateAverageRunningSpeed,
  walkingSpeed: calculateAverageWalkingSpeed,
};
