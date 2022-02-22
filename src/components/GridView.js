import Cards from "./Cards";
import * as React from 'react';

export default function GridView({ moviePoster ,handleDelete}) {
  return (
    <>

      <div
        className="
         w-full grid grid-cols-4 gap-4  justify-between
          justify-items-stretch space-y-3 space-x-6 rounded-xl 
          xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 p-11  "
      >        
        {moviePoster && moviePoster.map((movie, key) => {
          return (
            <Cards 
              key={key}
              id={movie.id}
              iconsrc={movie.poster}
              movieName={movie.title}
              movieDate={movie.year}
              movieDescription={movie.description}
              handleDelete={handleDelete}
            />
          );
        })}

      </div>
    </>
  );
}
