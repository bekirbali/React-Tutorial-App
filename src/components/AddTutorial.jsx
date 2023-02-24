import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const postTutorial = async (newTutorial) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.post(BASE_URL, newTutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    postTutorial(newTutorial);
    console.log(newTutorial);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form
        action=""
        onSubmit={submitHandler}
        className="container form text-center"
      >
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="desc">Description</label>
        <input
          className="form-control my-2"
          type="text"
          id="desc"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="btn btn-danger text-white">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
