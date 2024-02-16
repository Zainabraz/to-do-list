import { v4 as uuid } from "uuid";

export const state = {
  list: [],
};

const createListObject = function (data) {
  state.list.unshift({
    id: uuid(),
    task: data,
  });
};

// createListObject("Drink Water");
// createListObject("Nap for 5 minutes");
// createListObject("Write journal");

// const init = function () {
//   const storage = localStorage.getItem('')
// };

const persistList = function () {
  localStorage.setItem("tasklist", JSON.stringify(state.list));
};

export const uploadTask = function (newTask) {
  const task = newTask.task;
  if (task === "") return;
  createListObject(task);
  persistList();
};

export const doneTask = function (id) {
  const index = state.list.findIndex((el) => el.id === id);
  if (index !== -1) {
    state.list[index].done = true;
  }
  persistList();
};

export const deleteTask = function (id) {
  //delete list
  const index = state.list.findIndex((el) => el.id === id);
  state.list.splice(index, 1);
  persistList();
};

const init = function () {
  const storage = localStorage.getItem("tasklist");
  if (storage) state.list = JSON.parse(storage);
};

init();

const clearList = function () {
  localStorage.clear("tasklist");
};
