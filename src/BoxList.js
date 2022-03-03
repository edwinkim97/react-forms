import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    console.log(box)
    setBoxList(boxes => [...boxes, newBox]);
  }


  // function deleteBox(box) {

  // }
  
  return (
    <div>
      < NewBoxForm addBox={addBox} />
      {boxList.map(
        box =>
          <div key={box.id}>
            <Box 
            backgroundColor={box.backgroundColor} 
            height={box.height} 
            width={box.width}
            />
          </div>)}
    </div>
  );
}

export default BoxList;