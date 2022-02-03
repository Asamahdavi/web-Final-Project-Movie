/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import "../style/Cards.css";
import { Link } from "react-router-dom";

export default function Cards({
  id,
  iconsrc,
  movieName,
  movieDescription,
  movieDate,
}) {
  return (
    <div className="at-container ">
      <Card
        sx={{
          Width: 300,
          background: "#e27d60",
          zIndex: 0,
          position: "relative",
        }}
      >
        <div className="container">
          <Link to={`/movie/details/${id}`}>
            <CardHeader
              className="max-h-28 h-24 text-center text-cyan-900  "
              title={movieName}
            />
            <div>
              <div
                className="z-1 h-64  image bg-center w-full bg-zinc-800 text-white "
                component="img"
                alt="Paella dish"
                style={{
                  backgroundImage: `url(${iconsrc})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <CardContent className="overlay">
                <Typography className="text text-center z-1 text-xs ">
                  {movieDescription}
                </Typography>
              </CardContent>
            </div>
          </Link>
        </div>
        <CardActions
          disableSpacing
          className="h-24 bg-purple text-lightPurle py-36 bg-rose-100"
        >
          <div className="text-rose-100 font-sans  py-4 text-justify px-3 border-2 rounded-md bg-emerald-400 ">
            {movieDate}
          </div>

          <div className="hover:cursor-pointer pl-48">
            <img
              className="w-11"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/26e07f/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"
            />
          </div>
          <div className="hover:cursor-pointer  ">
            <Link to={`/update`}>
              <img
                className="w-11"
                src="https://img.icons8.com/dotty/80/26e07f/edit-calendar.png"
              />
            </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
