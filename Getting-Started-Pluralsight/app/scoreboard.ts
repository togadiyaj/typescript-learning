import {Result} from "./result";

export class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';
        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
        }
        const scoreElement: HTMLElement = <HTMLElement>document.getElementById('scores');
        scoreElement.innerHTML = output;
    }
}