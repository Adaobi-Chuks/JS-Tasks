class Tasks {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.completed = false;
    }

}

class Mytasks {
    tasks;
    constructor() {
        this.tasks = [];
    }

    addTask(title, dueDate) {
        const myTask1 = new Tasks(title, dueDate);
        this.tasks.push(myTask1);
    }

    displayTask() {
        this.tasks.forEach((myTasks, index) => {
            console.log(`${index}: ${myTasks.title} ${myTasks.dueDate} ${myTasks.completed}`);
        });
    }

    taskCompleted(index){
        this.tasks[index].completed = true;
    }
    
}
const myTasks = new Mytasks();

myTasks.addTask("learn javaScript", (new Date()));
myTasks.addTask("learn Typescript", (new Date()));
myTasks.addTask("Practise JavaScript", (new Date()));

myTasks.taskCompleted(1)
myTasks.displayTask();