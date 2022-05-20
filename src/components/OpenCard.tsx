import mockLink from "./Card";
export function OpenCard() {
  console.log("card was clicked");

  function getImageData() {
    console.log("getImageData invoked thru openCard");
  }

  return (
    <div>
      <div>
        <img width="200" height="250" src={mockLink} alt="a beautiful peice" />
      </div>
    </div>
  );
}
