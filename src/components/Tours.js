import Card from "./Card";

function Tours({ tours, removeTour }) {
    return (
        <div className="container">
            <div>
                <h1 className="title">Plan with Daksh</h1>
            </div>
            <div className="cards">
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
