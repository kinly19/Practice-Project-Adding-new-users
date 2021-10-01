import './Overlay.scss';

const Overlay = (props) => {
  return <div className="overlay" onClick={props.onConfirm}>{props.children}</div>;
};

export default Overlay;