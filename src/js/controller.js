// const uuid = require("uuid");
import * as model from "./model.js";
import listView from "./views/listView.js";
import addTaskView from "./views/addTaskView.js";
import deleteTaskView from "./views/deleteTaskView.js";
import iconGreen from "../images/check.png";
import deleteIcons from "../images/delete.png";
import "core-js/stable";
import "regenerator-runtime/runtime";
import doneTaskView from "./views/doneTaskView.js";

const controlList = function () {
  listView.render(model.state.list);
  //rendering recipe
};
// controlList(model.state.list);
// controlList(model.state.list[1]);
// console.log(model.state.list);

const controlAddTask = function (newTask) {
  model.uploadTask(newTask);
  listView.render(model.state.list);

  //upload new task
};
const controlDoneTask = function (id) {
  model.doneTask(id);
  doneTaskView.render(model.state.list);
};
const controlDeleteTask = function (id) {
  console.log(id);
  model.deleteTask(id);
  listView.render(model.state.list);
};

const init = function () {
  listView.addHandlerRender(controlList);
  addTaskView.addHandlerUpload(controlAddTask);
  doneTaskView.addHandlerClick(controlDoneTask);
  deleteTaskView.addHandlerDeleteTask(controlDeleteTask);
};
init();
