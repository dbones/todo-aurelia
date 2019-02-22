import { TodoItem } from "../models/todo-item";

export class Todo {
    items: Array<TodoItem> = []
    newItemContent: string;


    addItem(){
        if(!this.newItemContent) return;
        let todo = new TodoItem();
        todo.content = this.newItemContent; 
        this.items.push(todo);
        this.newItemContent = "";
    }

    deleteItem(item: TodoItem, index: number) {
        if(!item) return;

        this.items.splice(index, 1)

        //this.items = this.items.filter(i => { 
        //    return i === item
        // });
    }

    copyItem(item: TodoItem) {
        if(!item) return;
        this.newItemContent = item.content;
    }

    completeItem(item: TodoItem) {
        if(!item) return;
        item.isComplete = true;
    }

}


