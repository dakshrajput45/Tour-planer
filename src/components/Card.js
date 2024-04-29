import { useState } from "react";

function Card({id,image,description,tourPrice,name,removeTour}) {
    const [readmore, setReadMore] = useState(false);
    const desc = readmore ? description:`${description.substring(0, 150)}...`

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    
    return (
        <div className="card">
            <img src={image} alt="yes" className="image"></img>
            <div className="info">
                <div className="tour-detals">
                    <h4 className="tour-price">{tourPrice}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="desc">
                    {desc}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <button className="btn-not" onClick={()=>removeTour(id)}>Not Intrested</button>
        </div>
    );
}
export default Card;