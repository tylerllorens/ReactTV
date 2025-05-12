import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!show) return <div>Select a show.</div>;
  return (
    <div className="show-details">
      <EpisodeList
        episodes={show.episodes}
        name={show.name}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
// return statement for episode lists
