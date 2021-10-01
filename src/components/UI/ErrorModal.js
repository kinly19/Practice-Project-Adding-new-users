import Overlay from '../UI/Overlay'
import './ErrorModal.scss';

const ErrorModal = (props) => {

  const closeOverlayHandler = () => {
    props.onCloseOverlay(true);
}

  return (
    <Overlay onConfirm={props.onConfirm}>
      <div className="content">
        <div className="content__title">
          <h2>{props.title}</h2>
        </div>
        <div className="content__info">
          <p>{props.message}</p>
        </div>
        <button onClick={props.onConfirm}>Okay</button>
      </div>
    </Overlay>
  );
};

export default ErrorModal;