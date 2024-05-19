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

function MyApp() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 130px)",
    gridTemplateRows: "repeat(3, 130px)",
    backgroundColor: "lightgray",
    gap: "15px",
    padding: "20px",
  };

  const containerStyle = {
    display: "flex",
    gap: "30px",
    marginTop: "60px",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <ColorBox bgColor="#A93737" label="FrontEnd" />
        <ColorBox bgColor="#A85237" label="HTML" />
        <ColorBox bgColor="#3764A8" label="CSS" />
        <ColorBox bgColor="#C6C946" label="JavaScript" />
        <ColorBox bgColor="#4837A9" label="React" />
        <ColorBox bgColor="#37A894" label="DOM" />
      </div>
      <div style={gridStyle}>
        <ColorBox bgColor="#A8378F" label="Backend" />
        <ColorBox bgColor="#3D1412" label="HTML" />
        <ColorBox bgColor="#233863" label="CSS" />
        <ColorBox bgColor="#8D7420" label="JavaScript" />
        <ColorBox bgColor="#16691B" label="Node.js" />
        <ColorBox bgColor="#370E4A" label="Express" />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
