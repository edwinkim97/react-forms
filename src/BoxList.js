import { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from "uuid"

function BoxList() {
  const { boxList, setBoxList } = useState([]);

  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxList(boxes => [...boxes, newBox]);
  }

  return (
    <div>
      < NewBoxForm addBox={addBox} />
      {boxList.map(
        box =>
          <div><Box /></div>)}
    </div>
  );
}

export default BoxList;