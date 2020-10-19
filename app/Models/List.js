import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";
import Task from "./Task.js"

export default class List {
  constructor(data) {
    this.title = data.title
    this.info = data.info
    this.tasks = data.tasks
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }
  get template() {
    return /*html*/ `
    <div class="col-3 card mt-5">
      <div class="card-body">
        <h5 class="card-title">${this.title} <button class="btn btn-danger text-dark"onclick="app.listController.deleteList('${this.id}')">Delete</button> </h5>
          <form onsubmit="app.listController.createTask(event, '${this.id}')">
            <div class="form-group">
              <input type="text" class="form-control" name="taskTitle" id="task"
                aria-describedby="helpId" placeholder="Task">
                <button type="submit" name="" id="" class="btn btn-primary" >Make Task </button>
            </div>
          </form>
          <h5>Tasks</h5>
          <div class="row">
            ${this.task}
          </div>
      </div>
    </div>
   `
  }
  get task() {
    let template = ""
    let task = ProxyState.task.filter(t => t.listId == this.id)
    task.forEach(t => template += t.template)
    return template
  }
}
