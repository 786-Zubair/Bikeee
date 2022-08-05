const Pedelec = ({ model, bike }) => {
  return (
    <div>
      <p style={{ color: "blue" }}>{bike}</p>
      <p style={{ color: "Red" }}>ID: {model.ID}</p>
      <p style={{ color: "Red" }}>Make: {model.Make}</p>
      <p style={{ color: "Red" }}>Model: {model.Model}</p>
      <p style={{ color: "Red" }}>Price: {model.Price}</p>
      <p style={{ color: "Red" }}>UserID: {model.UserID}</p>
      <p style={{ color: "Red" }}>Date: {model.Date}</p>
    </div>
  );
};

export default Pedelec;
