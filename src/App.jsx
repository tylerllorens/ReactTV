/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data";
import { use, useState } from "react";
import ShowSelection from "./shows/ShowSelection";
export default function App() {
  const [shows, setShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
