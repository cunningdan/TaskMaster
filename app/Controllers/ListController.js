import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let list = ProxyState.list
  let template = ""
  list.forEach(i => template += i.template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    _drawLists();
    ProxyState.on("list", _drawLists)
    ProxyState.on("task", _drawLists)
    _drawLists()
  }
  createList(event) {
    event.preventDefault();
    let form = event.target
    let rawList = {
      title: form.title.value
    }
    listService.createList(rawList)
    form.reset
  }
  createTask(event, listId) {
    event.preventDefault();
    let form = event.target
    let rawTask = {
      // @ts-ignore
      title: form.taskTitle.value,
      listId: listId
    }
    listService.createTask(rawTask)
    form.reset
  }
  deleteList(id) {
    listService.removeList(id)
  }
  deleteTask(id) {
    listService.removeTask(id)
  }

  //TODO: Your app will need the ability to create, and delete lists
}

