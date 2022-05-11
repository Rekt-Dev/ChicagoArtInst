import React from "react";

// interface CardProps{
//   link:string;
//   artistName:string;
//   year:string
// }

function Card(props: any) {
  const identifier = "229393";
  const mockLink = `https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg`;
  console.log(mockLink);
  return (
    <div>
      <img width="100" height="121" alt=" 3 cats" src={mockLink} />
      <ul>
        {}
        <li>{props.artistName || "artist name"}</li>
        <li>{props.title}</li>
        <li>{props.year}</li>
      </ul>
    </div>
  );
}

export default Card;
