import './Card.scss';

const Card = (props) => {

    return (
        <div className="card-content">{props.children}</div> //props the children inside of div
    );  
};

export default Card; 