
const cardsData = [
    { title: "Card 1", description: "This is the first card."},
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 3", description: "This is the forth card." },
    { title: "Card 3", description: "This is the fiveth card." },
    { title: "Card 3", description: "This is the sixth card." },
  ];
  
  const Cards = () => {
    return (
      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {cardsData.map((card, index) => (
          <div key={index} className="card2 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-2">{card.description}</p>
            <button className="readMore">Read More</button>
          </div>
          
        ))}
      </div>
    );
  };
  
  export default Cards;
  