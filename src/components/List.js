/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function List({
  iconsrc,
  movieName,
  movieDescription,
  movieDate,
  id,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full font-sans">
      <Link to={`/movie/details/${id}`}>
        <div className="shadow-lg rounded-sm   bg-teal-900 h-32 ">
          <ul className=" inline-grid grid-cols-2 w-full ">
            <img
              className=" w-24 h-32 rounded-sm  image bg-zinc-800 text-white"
              component="img"
              src={iconsrc}
            />
            <li className=" px-1 inline-grid grid-cols-3 font-normal text-rose-200 text-base space-x-6 items-center  ">
              <h3 className="font-sans hover:bg-inherit ">{movieName}</h3>
              <h3 className="font-sans hover:bg-inherit ">{movieDate}</h3>
            </li>
          </ul>
        </div>
      </Link>
      <div className="grid grid-cols-2 bg-teal-200">
        <CardContent className="h-0">
          <Typography
            variant="body4"
            color="text.secondary"
            className="h-3 font-sans font-light"
          >
            desccription ...
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="bg-teal-200 grid grid-flow-col space-x-5 ">
          <Typography paragraph>{movieDescription}</Typography>
          <div className=" grid grid-flow-col pr-9">
            
            <img
              className="w-10 cursor-pointer"
              src="https://img.icons8.com/carbon-copy/100/fa314a/filled-trash.png"
            />
           
            <Link to={`/update`}>
               <img
              className="w-9 cursor-pointer"
              src="https://img.icons8.com/dotty/80/fa314a/edit-calendar.png"

            />
            </Link>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
