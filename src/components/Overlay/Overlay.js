import './Overlay.scss';

const Overlay = (props) => {
  return <div className="overlay">{props.children}</div>;
};

export default Overlay;