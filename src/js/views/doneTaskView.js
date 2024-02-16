import icons from "../../images/check-mark.png";
import iconGreen from "../../images/check.png";

class DoneTaskView {
  _parentElement = document.querySelector(".taskContainer");

  #data;

  render(data) {
    this.#data = data;
  }

  _checkList(element) {
    const img = element.querySelector("img.checkLogo");

    element.classList.toggle("listDone");

    if (img.src === icons) {
      img.src = iconGreen;
    } else if (img.src === iconGreen) {
      img.src = icons;
    }
  }

  _getListID(element) {
    return element.dataset.id;
  }

  addHandlerClick(handler) {
    const self = this;

    this._parentElement.addEventListener("click", function (e) {
      const list = e.target.closest(".taskList");
      // const isParagraphClicked = e.target.tagName === "P";
      const isImageClicked = e.target.closest(".checkLogo");
      if (list && isImageClicked) {
        self._checkList(list);
        const id = self._getListID(list);
        handler(id);
      }
    });
  }
}

export default new DoneTaskView();
