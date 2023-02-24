import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

export const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const getTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  );
};
