import { ProxyState } from '../AppState.js'
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function saveState() {
  if (ProxyState.hasOwnProperty("task")) {
    localStorage.setItem("TaskMaster", JSON.stringify({ lists: ProxyState.list, task: ProxyState["task"] }));
    return
  }
  localStorage.setItem("TaskMaster", JSON.stringify({ lists: ProxyState.list }));
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    ProxyState.list = data.lists.map(l => new List(l));
    if (ProxyState.hasOwnProperty("task")) {
      ProxyState["task"] = data.task.map(t => new Task(t))
    }
  }
}
