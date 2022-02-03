import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GridView from "./GridView";
import ListView from "./ListView";

export default function SearchLandingPage() {
    const { search }= useParams()
    const [movies,setMovies]=useState([]);
    const [state, setState] =useState(false);

    useEffect(()=>{
      axios
      .get(`http://localhost:8888/api/movie/search.php?searchquery=${search}`)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data.data);
      });
    })

    const handleChange = (event) => {
      setState(event.target.checked);
    };
    return(
        <>
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
            <GridView moviePoster={movies} />
          ) : (
            <ListView moviePoster={movies} />
          )}
        </b>
      </div>
        </>
    )
}