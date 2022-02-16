//material ui or material design as front library
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useEffect, useState } from "react";
//axios for connecting to the backend
import axios from "axios";
//useprams for access the parameters of the current route
import { useParams } from "react-router-dom";
//imported components
import GridView from "../components/GridView";
import ListView from "../components/ListView";

export default function SearchLandingPage() {
  
  const { search } = useParams();
  const [isCalled,setIsCalled]= useState(false);
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(false);

  //connecting search backend
  useEffect(() => {
    axios
      .get(`http://localhost:8888/backend/api/movie/search.php?searchquery=${search}`)
      .then(function (response) {
        console.log(response.data);
        if(!isCalled){
           setMovies(response.data.data);
           setIsCalled(true);
        }
       
      });
  });

  const handleChange = (event) => {
    setState(event.target.checked);
  };
  return (
    <>
      <FormGroup className="pl-20 w-40">
        <FormControlLabel
          control={
            <Switch
            //  defaultChecked
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
  );
}
