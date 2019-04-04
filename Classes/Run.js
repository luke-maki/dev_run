const fs = require('fs');
const path = require('path');

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
    const pathway = path.join(__dirname, '../data/runs.json');
    const run = {};
    run.date = this.date;
    run.distance = this.distance;
    run.totalTime = this.totalTime;
    run.runningTime = this.runningTime;
    let file = fs.readFileSync(pathway, 'utf8');
    file = JSON.parse(file);
    file.runs.push(run);
    file = JSON.stringify(file);
    fs.writeFileSync(pathway, file);
  }
}

module.exports = Run;
