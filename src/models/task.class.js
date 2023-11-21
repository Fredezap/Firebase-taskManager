import { LEVELS } from "./levels.enum";

export class Task {
    id = '';
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(id, name, description, completed, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            completed: this.completed,
            level: this.level
        }
    }
}