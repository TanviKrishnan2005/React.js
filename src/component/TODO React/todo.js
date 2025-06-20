import React ,{useState}from 'react';
import "./style.css";

const Todo = () => {
    const [inputdata, setInputData]=React.useState("");
    const [items, setItems] = useState([]);

    //add the items function
    const addItem=()=>{
        if(!inputdata){
            alert('please fill the data')
        }else{
            const myNewInputData ={
                id: new Date().getTime().toString(),
                name:inputdata,
            }
            setItems([...items,myNewInputData ]);
            setInputData("");
        }
    };

    //how to delete items section
    const deleteItem=(index)=>{
    const updatedItems = items.filter((curElem)=>{
        return curElem.id !== index;
    });
    setItems(updatedItems)
    };
  return (

    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.png" alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="🖋️ Add item"
              className="form-control"
              value={inputdata}
              onChange={(event)=>setInputData(event.target.value)}
            />
            <i class="fa-solid fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* show items */}
          <div className="showItem">

                {items.map((curElem)=>{
                    return(
                        <div className="eachItem" key ={curElem.id} >
                <h3>{curElem.name}</h3>
                <div className="todo-btn">
                    <i class="fa-solid fa-pen-to-square add-btn"></i>
                    <i class="fa-solid fa-trash add-btn"onClick={()=>{deleteItem(curElem.id)}}></i>
                </div>
                </div>
                    );
                })}
          </div>
            {/* remove all */}
          <div className="showItems">
             <button
              className="btn effect04" data-sm-link-text="Remove All">
                <span>CHECK LIST</span>
            
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
