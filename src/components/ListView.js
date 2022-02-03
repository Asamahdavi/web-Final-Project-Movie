import Cards from "./Cards";
import List from "./List";
export default function ListView({ moviePoster }) {
  return (
    <>
      <div className=" w-full space-y-8 row-span-full justify-items-center rounded-xl  p-9 ">
        {moviePoster ? moviePoster.map((movie, key) => {
          return (
            <List
              key={key}
              id={movie.id}
              iconsrc={movie.poster}
              movieName={movie.title}
              movieDate={movie.year}
              movieDescription={movie.description}
            />
          );
        }): moviePoster.map((movie, key) => {
          return (
            <Cards
              key={key}
              id={movie.id}
              iconsrc={movie.poster}
              movieName={movie.title}
              movieDate={movie.year}
              movieDescription={movie.description}
            />
          );
        })  }
      </div>
    </>
  );
}
