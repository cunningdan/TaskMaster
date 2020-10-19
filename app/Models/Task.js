import { generateId } from "../Utils/GenerateId.js";


export default class Task {
  constructor(data,) {
    this.listId = data.listId
    this.id = data.id || generateId();
    this.title = data.title
  }
  get template() {
    return /*html*/ `
    <div class="col-12">
      <h5> ${this.title} <button class="text-dark btn btn-danger float-right mt-3" onclick="app.listController.deleteTask('${this.id}')">Delete Task</button> </h5>
      </div>
    `
  }
}