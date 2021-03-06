/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
//useprams for access the parameters of the current route
import { useParams } from "react-router-dom";
//axios for connecting to the back
import axios from "axios";
// material ui as frontend library
import { CardMedia } from "@mui/material";
//style added
import "../style/MoviePage.css";
export default function MoviePage() {
  const { id } = useParams();
  const [singleMovie, setsingleMovie] = useState(null);
  const [isCalled,setIsCalled]= useState(false);
//
  const getsingleMovie =(() => {
    axios
      .get(`http://localhost:8888/backend/api/movie/read_by_id.php?id=${id}`)
      .then((response) => {
        console.log(response.data);
        if(!isCalled){
         setsingleMovie(response.data); 
         setIsCalled(true);
        }
        
      });
  });

  useEffect(() => {
    getsingleMovie();
  }, [id, getsingleMovie]);

  return (
    <div>
      {singleMovie && singleMovie.title ? (
        <>
          <div className="form-container rounded-t-2xl">
            <div className="form-content-right items-end rounded-l-md">
              <form
                className="form rounded-l-md space-y-11 p-2 items-end"
                noValidate
              >
                <div className="form rounded-l-md  p-2   grid w-8">
                  <div className="w-full pb-36 ">
                    <h1 className=" font-sans w-full shadow-2xl shadow-neutral-800 p-14 rounded-full ">
                      {singleMovie && singleMovie.title}
                    </h1>
                    <h2 className=" font-sans w-7 shadow-2xl shadow-neutral-800 p-11 pl-3 py-3 bg-teal-800 rounded-3xl ">
                      {singleMovie && singleMovie.year}
                    </h2>
                  </div>

                  <h5 className="text-left font-sans font-semibold text-teal-900 ">
                    {singleMovie && singleMovie.description}
                  </h5>
                </div>
              </form>
            </div>
            <div className="form-content-left h-full ">
              <CardMedia
                className=" form-img rounded-r-md h-full "
                component="img"
                image={singleMovie && singleMovie.poster}
                alt="Paella dish"
              />
            </div>
          </div>{" "}
        </>
      ) : (
        <div className="px-96 py-40">
        <div className="p-16 text-center font-semibold text-3xl text-rose-500 bg-cyan-100 rounded-full">
                Not Found !!!
          </div>
      </div> 
      )}
    </div>
  );
}
