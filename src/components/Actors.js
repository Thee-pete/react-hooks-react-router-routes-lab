import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((actor => {
    return (<div key= {actor.name}>{actor.name}

    <ul>
      {actor.movies.map(movie => {
        return <li key= {movie}>{movie}</li>
      })}
    </ul>
    
    
    
    
    </div>
    
    )
  }))  ;



  return (
      <div>
    <h1>Actors Page</h1>

     {actorList}
  
  </div>);
}

export default Actors;
