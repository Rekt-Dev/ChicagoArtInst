import Card from "./Card";

function renderCard(cardSourceObj: any) {
  return (
    <Card
    
      artistName={cardSourceObj.name}
      title={cardSourceObj.title}
      year={cardSourceObj.year}
    />
  );
}

export default renderCard;
