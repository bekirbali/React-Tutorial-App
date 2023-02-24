import axios from "axios";
import { useState } from "react";

const Modal = ({ title, description, id, getTutorials }) => {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const titleChanger = (e) => {
    setTitleText(e.target.value);
  };
  const descChanger = (e) => {
    setDescriptionText(e.target.value);
  };

  const putChanges = async (newItems) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.put(`${BASE_URL}${id}/`, newItems);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const saveChanges = () => {
    console.log(titleText, descriptionText, id);
    const newItems = { title: titleText, description: descriptionText };
    putChanges(newItems);
    setTitleText("");
    setDescriptionText("");
  };
  return (
    <div className="modal" tabIndex="-1" id="edit">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              tabIndex="1"
              onChange={titleChanger}
              className="form-control"
              id="title"
              value={titleText}
            />
            <button
              tabIndex="5"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label className="label" htmlFor="desc">
              Description
            </label>
            <input
              tabIndex="2"
              onChange={descChanger}
              className="form-control"
              id="desc"
              value={descriptionText}
            />
          </div>
          <div className="modal-footer">
            <button
              tabIndex="4"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              tabIndex="3"
              onClick={saveChanges}
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
