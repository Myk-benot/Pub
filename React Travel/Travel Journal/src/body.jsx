import React from "react";

export default function Body(props) {
  return (
    <>
      <div className="container">
        <img src={props.item.imageUrl}></img>
        <div className="text-container">
          <div className="loc-map-div">
            <p>{props.item.location}</p>
            <a href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <div className="title-div">
            <h3>{props.item.title}</h3>
            <h5>{props.item.startDate}</h5>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
