import List from "../Models/List.js";
import Task from "../Models/Task.js";
import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";



class ListService {
  constructor() {
    ProxyState.on("task", saveState)
  }
  removeList(id) {
    ProxyState.list = ProxyState.list.filter(p => p.id != id)
    ProxyState.task = ProxyState.task.filter(t => t.listId != id)
  }
  removeTask(id) {
    let temp = ProxyState.task
    let taskIndex = temp.findIndex(c => c.id == id)
    ProxyState.task = ProxyState.task.filter(t => t.listId != id)
    temp.splice(taskIndex, 1)
    ProxyState.task = temp
  }
  createList(rawList) {
    let list = ProxyState.list
    list.push(new List(rawList))
    ProxyState.list = list
  }

  createTask(rawTask) {
    let task = ProxyState.task
    task.push(new Task(rawTask))
    ProxyState.task = task
  }



}

export const listService = new ListService();
