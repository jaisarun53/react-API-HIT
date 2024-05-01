import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./App.css";

const HomePage = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      const data = response.data;

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
};

export default HomePage;
