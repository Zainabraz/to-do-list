class DeleteTaskView {
  _parentElement = document.querySelector(".taskContainer");

  constructor() {
    // this.addHandlerDeleteTask();
  }

  _getListID(element) {
    return element.dataset.id;
  }

  addHandlerDeleteTask(handler) {
    const self = this;
    this._parentElement.addEventListener("click", function (e) {
      const list = e.target.closest(".taskList");
      const isDeleteClicked = e.target.closest(".deleteLogo");
      if (list && isDeleteClicked) {
        const id = self._getListID(list);
        handler(id);
      }
    });
  }
}

export default new DeleteTaskView();
