const fs = require("fs");

function addToFile(run) {
  let file = fs.readFileSync("./runs.json", "utf-8");
  file = JSON.parse(file);
  file.runs.push(run);
  file = JSON.stringify(file);
  fs.writeFileSync("./runs.json", file);
}

function addRun(date, distance, totalTime, runningTime) {
  const run = {};
  run.date = date;
  run.distance = distance;
  run.totalTime = totalTime;
  run.runningTime = runningTime;

  addToFile(run);
}

module.exports = addRun;
