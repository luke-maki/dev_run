const fs = require('fs');

function calculatePercentages(run) {
  const runningTimePercenatge = (run.runningTime / run.totalTime) * 100;
  const walkingTimePercentage = 100 - runningTimePercenatge;
  const distanceRun = (run.distance / 100) * runningTimePercenatge;
  const distanceWalk = run.distance - distanceRun;

  const data = {
    runTime: runningTimePercenatge,
    walkTime: walkingTimePercentage,
    runningDistance: distanceRun,
    walkingDistance: distanceWalk,
  };

  return data;
}

// TODO checkout commander.js

function getPercentages() {
  let runData = fs.readFileSync('./runs.json', 'utf-8');
  runData = JSON.parse(runData);
  const { runs } = runData;
  const percentages = [];
  runs.forEach(run => {
    percentages.push(calculatePercentages(run));
  });
  return percentages;
}

function getAverages() {
  const percentages = getPercentages();
  const averages = {
    runTime: 0,
    walkTime: 0,
    runDistance: 0,
    walkDistance: 0,
  };

  percentages.forEach(percentage => {
    averages.runTime += percentage.runTime;
    averages.walkTime += percentage.walkTime;
    averages.runDistance += percentage.runningDistance;
    averages.walkDistance += percentage.walkingDistance;
  });

  // TODO figure out a better way to do this
  const entries = Object.entries(averages);
  /* eslint-disable-next-line */
  for (const [property, value] of entries) {
    averages[`${property}`] = value / percentages.length;
  }

  return averages;
}

module.exports = getAverages;
