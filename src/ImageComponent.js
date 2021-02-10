import React,{useState, useEffect} from 'react';
import {Row, Col,} from 'react-bootstrap';
import BuyComp from './BuyComp.js';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import image7 from '../../images/image7.png';
import image8 from '../../images/image8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ImageComponent(props) {
    let [rating, setRating] = useState([]);
    useEffect(() => {
        
        for(let it=0; it<Number(props.rating); it++){
            rating.push(<FontAwesomeIcon icon="starIcon"></FontAwesomeIcon>);
            setRating(rating);
        }
    },[])
    

    const Buy = () => {
        return <BuyComp image={`<${props.image}/>`} />
    }
    return (
        <div>
            <div>
                {/* <img src = {`C:/Users/SHREYA\ JAIN/Desktop/task\ -\ workadv/images/images/${props.image}`} /> */}
                {`<${props.image}/>`}
            </div>
            <div>
                <Row>
                    <Col>
                        <h3>{props.name}</h3>
                    </Col>
                    <Col>
                        {rating}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <i className="fa fa-heart"></i>
                        <FontAwesomeIcon icon="heartIcon"></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <button onClick={Buy}>Buy Now</button>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default ImageComponent;
