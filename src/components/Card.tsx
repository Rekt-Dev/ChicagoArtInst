import React from "react";
import "../app.css";
import { CardDisplayer } from "../services/CardDisplayer";
import { OpenCard } from "./OpenCard";
import { GoToArtist } from "./GoToArtist";

export function testLi() {
  console.log(`li has been pressed bish`);
}
export const mockLink = `https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg`;
export function Card(props: any) {
  const identifier = "229393";

  console.log(mockLink);

  return (
    <div className="">
      <img
        onClick={OpenCard}
        width="90%"
        height="90%"
        alt=" 3 cats"
        src={mockLink}
      />
      <ul>
        {}
        <li onClick={GoToArtist}>{props.artistName || "artist name"}</li>
        <li onClick={testLi}>{props.title}</li>
        <li>{props.year}</li>
      </ul>
    </div>
  );
}
