const fs = require('fs');

/**
 * * Creates a run
 */
class Run {
  constructor(date, distance, totalTime, runningTime) {
    this.date = date;
    this.distance = distance;
    this.totalTime = totalTime;
    this.runningTime = runningTime;
  }

  /**
   * * Add run to runs file
   */
  addRunToFile() {
    const run = {};
    run.date = this.date;
    run.distance = this.distance;
    run.totalTime = this.totalTime;
    run.runningTime = this.runningTime;
    let file = fs.readFileSync('../data/runs.json', 'utf-8');
    file = JSON.parse(file);
    file.runs.push(run);
    file = JSON.stringify(file);
    fs.writeFileSync('../data/runs.json', file);
  }
}

module.exports = Run;
