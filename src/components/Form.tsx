import { useState } from "react";

const Form = ({ addColor }: { addColor: any }) => {
  const [color, setColor] = useState("#F59527");

  const handleSubmit = () => {
    addColor(color)
  }
  return (
    <div className="container">
      <h4>Color Generator Starter</h4>
      <form className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#F59527"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="button" className="btn" style={{ background: color }} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
