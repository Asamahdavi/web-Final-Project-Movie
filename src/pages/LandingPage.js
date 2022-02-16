/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useEffect, useState } from "react";
//axios for connecting to the back
import axios from "axios";
//material ui as front library
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
//import components
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import Carousel from "../components/Carousel";

export default function LandingPage() {
  const [movie, setmovie] = useState([]);
  const [state, setState] = React.useState(true);

  // for delete the deleted data in satate
  const handleDelete=(id)=>{

   const index = movie.filter(iddata=>iddata.id !== id);
 
   setmovie(index);

  }

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  //useeffect for get all movies from back with every website refresh
  useEffect(() => {
    getMovies();
  }, []);

  //get all movies from backend
  function getMovies() {
    axios
      .get("http://localhost:8888/backend/api/movie/read.php")
      .then(function (response) {
        console.log(response.data);
        setmovie(response.data.data);
      });
  }

  return (
    <>
      <div className="z-0">
        <Carousel />
        <FormGroup className="pl-20 w-60">
          <FormControlLabel
            control={
              <Switch
               // defaultChecked
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
              <GridView moviePoster={movie} handleDelete={handleDelete} />
            ) : (
              <ListView moviePoster={movie} handleDelete={handleDelete} />
            )}
          </b>
        </div>
      </div>
    </>
  );
}
