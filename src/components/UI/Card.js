import './Card.scss';

const Card = (props) => {

    const classes = 'card-content ' + props.className
    return (
        <div className={classes}>{props.children}</div> //props the children inside of div
    );  
};

export default Card; 