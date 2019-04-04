const fs = require('fs');

/**
 * * Gathers data from runs
 */
class Runs {
  constructor() {
    this.percentages = [];
    this.getData();
    this.calculatePercentages();
    this.calculateAverageRunTime();
    this.calculateAverageWalkTime();
    this.calculateAverageRunDistance();
    this.calculateAverageWalkDistance();
  }

  /**
   * * Gets run data
   */
  getData() {
    let runData = fs.readFileSync('../data/runs.json', 'utf-8');
    runData = JSON.parse(runData);
    const { runs } = runData;
    this.runs = runs;
  }

  /**
   * * Calculates percentages of runs
   */
  calculatePercentages() {
    this.runs.forEach(run => {
      const data = {};
      data.runTime = (run.runningTime / run.totalTime) * 100;
      data.walkTime = 100 - data.runTime;
      data.runDistance = (run.distance / 100) * data.runTime;
      data.walkDistance = run.distance - data.runDistance;
      this.percentages.push(data);
    });
  }

  calculateAverageRunTime() {
    let runTime = 0;
    this.percentages.forEach(percentage => {
      runTime += percentage.runTime;
    });
    runTime /= this.percentages.length;
    this.averageRunTime = runTime;
  }

  calculateAverageWalkTime() {
    let walkTime = 0;
    this.percentages.forEach(percentage => {
      walkTime += percentage.walkTime;
    });
    walkTime /= this.percentages.length;
    this.averageWalkTime = walkTime;
  }

  calculateAverageRunDistance() {
    let runDistance = 0;
    this.percentages.forEach(percentage => {
      runDistance += percentage.runDistance;
    });
    runDistance /= this.percentages.length;
    this.averageRunDistance = runDistance;
  }

  calculateAverageWalkDistance() {
    let walkDistance = 0;
    this.percentages.forEach(percentage => {
      walkDistance += percentage.walkDistance;
    });
    walkDistance /= this.percentages.length;
    this.averageWalkDistance = walkDistance;
  }

  calculateAverageRunSpeed() {
    this.averageRunSpeed = this.averageRunDistance / (this.averageRunTime / 60);
  }

  calculateAverageWalkSpeed() {
    this.averageWalkSpeed =
      this.averageWalkDistance / (this.averageWalkTime / 60);
  }
}

module.exports = Runs;

const test = new Runs();
console.log(test.averageRunTime);
