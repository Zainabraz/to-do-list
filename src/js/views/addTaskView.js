class addTaskView {
  _parentElement = document.querySelector(".add");

  constructor() {
    this._clearForm = this._clearForm.bind(this);
  }

  _btnAdd = document.querySelector(".add__btn");
  _inputField = document.querySelector(".add__field");

  _clearForm() {
    this._inputField.value = "";
  }

  addHandlerUpload(handler) {
    const self = this;
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
      self._clearForm();
    });
  }
}

export default new addTaskView();
