import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/** BoxList: displays form to add new boxes and a list of boxes with delete
 * button to delete given box
 *  
 * Props:
 * - NO PROPS
 * 
 * State:
 * - boxList: array of box components
 * 
 * App --> BoxList
 */
function BoxList() {
  const [boxList, setBoxList] = useState([]);

  /** Adding new box to boxList while adding 
   * id: uuid()
   */
  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxList(boxes => [...boxes, newBox]);
  }

  /** Delete box from boxList using boxId */
  function deleteBox(boxId) {
    setBoxList(boxes => boxes.filter((b) => boxId !== b.id));
  }
  // TODO: Instead of div with id of boxList, give className with name of component (BoxList)
  return (
    <div id="boxList">
      < NewBoxForm addBox={addBox} />
      {boxList.map(
        box =>
          <div key={box.id}>
            <Box
            deleteBox={() => deleteBox(box.id)} 
            backgroundColor={box.backgroundColor} 
            height={box.height} 
            width={box.width}
            />
          </div>)}
    </div>
  );
}

export default BoxList;