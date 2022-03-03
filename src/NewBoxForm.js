import { useState } from "react";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    backgroundColor: "",
    width: "",
    height: "",
  });


  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({
      backgroundColor: "",
      width: "",
      height: "",
    });
  };

  return(
    <form>
      <label htmlFor="backgroundColor-input">Background Color:</label>
      <input id="backgroundColor-input" name="backgroundColor"></input>
      <label htmlFor="height-input">Height:</label>
      <input id="height-input" name="height"></input>
      <label htmlFor="width-input" >Width:</label>
      <input id="width-input" name="width"></input>
      <button onClick={handleSubmit}>Add a new box!</button>
    </form>
  )
}

export default NewBoxForm;