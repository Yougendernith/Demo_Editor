import React , {useState} from 'react';
import List_items from "./suggestion_input_items";

function Suggestion_input(){
                              
      const [inputText,setInputtext]=useState('');
      const [items,setitems]=useState([]);
      const [deletedItem,setDeletedItem]=useState([]);


      function handleChange(event){
            const newValue=event.target.value;
            setInputtext(newValue);
      }

      function addItems(event){
            setitems(prevItems=>{
                  return [...prevItems,inputText]
            });
            setInputtext("");
            event.preventDefault();
      }


      function moveItem(id){
             setDeletedItem([...items]);

                setitems((prevItems) => {
                  return prevItems.filter((item, index) => {
                        return index!==id
                  });
                });
                
                setDeletedItem(prevItems=>{
                      return prevItems.filter((item, index)=>{
                            return index==id;
                      })
                });
      }

      return (
        <form>
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={addItems}>
            <span>Add</span>
          </button>
          <ul>
            {items.map((listitem, index) => (
              <List_items
                key={index}
                id={index}
                text={listitem}
                onChecked={moveItem}
              />
            ))}
          </ul>

          <div class="output_form">
            <form>
              <label>
                <h1>Output</h1>
                <i>(Click on the below item to Delete)</i>
              </label>
              <ul>
                {deletedItem.map((listitem, index) => (
                  <List_items
                    key={index}
                    id={index}
                    text={listitem}
                    onChecked={moveItem}
                  />
                ))}
              </ul>
            </form>
          </div>
        </form>
      );
}

export default Suggestion_input;