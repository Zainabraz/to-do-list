import icons from "../../images/check-mark.png";
import iconGreen from "../../images/check.png";
import deleteIcons from "../../images/delete.png";

class ListView {
  #parentElement = document.querySelector(".taskContainer");
  _listDownSection = document.querySelector(".listDownSection");

  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    this._showaddedList();
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  _showaddedList() {
    if (this.#data.length !== 0) {
      this._listDownSection.classList.remove("hidden");
    } else {
      this._listDownSection.classList.add("hidden");
    }
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  #generateMarkup() {
    return this.#data
      .map(
        (li) => `<li class="taskList ${li.done ? "listDone" : ""}" data-id="${
          li.id
        }">
        <div class="taskContent">
    <img src="${li.done ? iconGreen : icons}" class="checkLogo" alt="" />
    <p>${li.task}</p></div>
    <img src="${deleteIcons}" class="deleteLogo" alt="" />
</li>`
      )
      .join("");
  }
}

export default new ListView();
