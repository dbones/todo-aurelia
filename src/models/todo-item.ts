export class TodoItem {

    constructor() {
        this.dateTime = new Date();
        this.isComplete = false;
    }

    content: string;
    dateTime: Date;
    isComplete: boolean;

}