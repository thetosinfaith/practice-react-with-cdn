const ColorBox = (props) => {
  const boxStyle = {
    borderRadius: "2px",
    backgroundColor: props.bgColor,
    color: "white",
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={boxStyle}>
      <p>{props.label}</p>
    </div>
  );
};