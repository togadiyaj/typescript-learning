import { Person } from './person';

export class Player implements Person {
    age?: number;
    name: string;
    highScore: number;
    formatName(): string {
        return this.name.toUpperCase();
    }
}