import axios from "axios";
// import { useEffect, useState } from "react";

const Modal = ({
  title,
  description,
  id,
  getTutorials,
  setTitle,
  setDescription,
}) => {
  // const [titleText, setTitleText] = useState(title);
  // const [descriptionText, setDescriptionText] = useState(description);
  // console.log(title, description);
  // useEffect(() => {
  //   setTitleText(title);
  // }, []);

  // const titleChanger = (e) => {
  //   setTitleText(e.target.value);
  // };
  // const descChanger = (e) => {
  //   setDescriptionText(e.target.value);
  // };

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
    const newItems = { title: title, description: description };
    putChanges(newItems);
    setTitle("");
    setDescription("");
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
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
              value={title}
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
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="desc"
              value={description}
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
