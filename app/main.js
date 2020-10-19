import ListController from "./Controllers/ListController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // TODO load your controllers here
  listController = new ListController()
}

window["app"] = new App();
loadState()