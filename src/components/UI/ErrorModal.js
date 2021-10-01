import Overlay from '../UI/Overlay'
import Button from './Button';
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
        <div className="content__btn">
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </div>
    </Overlay>
  );
};

export default ErrorModal;