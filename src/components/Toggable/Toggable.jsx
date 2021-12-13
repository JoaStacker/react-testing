const Toggable = ({ buttonLabel, toggleAvailability }) => {
  return (
    <div style={hideWhenVisible}>
      <button onClick={toggleAvailability}>{buttonLabel}</button>
    </div>
  );
};

export default Toggable;
