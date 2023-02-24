import axios from "axios";
import { useState } from "react";

import { FaTrash, FaEdit } from "react-icons/fa";
import Modal from "./Modal";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const deleteTutorial = async (id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.delete(`${BASE_URL}${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async ({ id, title, description }) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.put(`${BASE_URL}${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const setItems = ({ id, title, description }) => {
    console.log(title);
    setTitle(title);
    setDescription(description);
    setId(id);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <FaEdit
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit"
                    onClick={() => setItems(item)}
                  />{" "}
                  <FaTrash
                    className="text-danger"
                    type="button"
                    onClick={() => deleteTutorial(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        title={title}
        description={description}
        id={id}
        getTutorials={getTutorials}
      />
    </div>
  );
};

export default TutorialList;
