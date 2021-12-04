// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the an object
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function () {
      this.complete = true;
    }
  };
  return task;
}

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
// for now, let's just make sure we see our tasks

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
