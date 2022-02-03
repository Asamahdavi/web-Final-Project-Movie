/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import GridView from "./GridView";
import { useEffect, useState } from "react";
import ListView from "./ListView";
import axios from "axios";
import Carousel from "./Carousel";

export default function LandingPage() {
  const [tasks, setTasks] = useState([]);
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:8888/api/movie/read.php")
      .then(function (response) {
        console.log(response.data);
        setTasks(response.data.data);
      });
  }

  return (
    <>
      <div className="z-0">
        <Carousel />
        <FormGroup className="pl-20 w-40">
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                checked={state}
                onChange={handleChange}
                value={state}
              />
            }
            label={state ? "Grid View" : "List View"}
          />
        </FormGroup>
        <div>
          <b>
            {state ? (
              <GridView moviePoster={tasks} />
            ) : (
              <ListView moviePoster={tasks} />
            )}
          </b>
        </div>
      </div>
    </>
  );
}
