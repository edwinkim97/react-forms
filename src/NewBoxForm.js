import { useState, initialState } from "react"
import Box from "./Box"

function NewBoxForm(addBox) {

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }
}

export default NewBoxForm;