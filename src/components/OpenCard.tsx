import mockLink from "./Card";

export function OpenCard() {
  function getImageData() {
    console.log("getImageData invoked thru openCard");
  }
  console.log("card was clicked");
  getImageData();

  return (
    <div>
      <div>
        <img width="200" height="250" src={mockLink} alt="a beautiful peice" />
      </div>
    </div>
  );
}
