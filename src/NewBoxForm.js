import { useState } from "react";

/** NewBoxForm: handles form to add new boxes
 *  
 * Props:
 * - addBox: a function passed down from BoxList that will add new boxes to array
 * using formData which holds css attributes for box
 * 
 * State:
 * - formData: {
    backgroundColor: "",
    width: "",
    height: "",
    }
 * 
 * App --> NewBoxForm
 */
function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    backgroundColor: "",
    width: "",
    height: "",
  });

  // updates formData with input data upon user changes on form
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  // Creates new box using form data and resets form
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({
      backgroundColor: "",
      width: "",
      height: "",
    });
  
  };

  // handleChange should be on each input
  // handlesubmit should be on form, and it should be onSubmit
  // provide value to input
  return (
    <form id="newBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor-input">Background Color:</label>
      <input 
        id="backgroundColor-input" 
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}>
      </input>
      <label htmlFor="height-input">Height:</label>
      <input 
        id="height-input" 
        name="height"
        value={formData.height}
        onChange={handleChange}>
      </input>
      <label htmlFor="width-input" >Width:</label>
      <input 
        id="width-input" 
        name="width"
        value={formData.width}
        onChange={handleChange}>
      </input>
      <button>Add a new box!</button>
    </form>
  )
}

export default NewBoxForm;