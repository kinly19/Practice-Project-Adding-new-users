import Overlay from './Overlay';
import './OverlayItem.scss';

const OverlayItem = (props) => {

    const closeOverlayHandler = () => {
        props.onCloseOverlay(true);
    }
    
  return (
    <Overlay>
      <div className="content">
        <div className="content__title">
          <h2>Invalid Input</h2>
        </div>
        <div className="content__info">
          <p>{props.message}</p>
        </div>
        <button onClick={closeOverlayHandler}>Okay</button>
      </div>
    </Overlay>
  );
};

export default OverlayItem;