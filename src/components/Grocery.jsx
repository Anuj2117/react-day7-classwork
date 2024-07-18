import { useState } from 'react';
import "../App.css"
function Grocery (){
    const [input, setInput]=useState('');
    const [items,setItems]=useState([]);

    function  setInputValue(e){
        setInput(e.target.value);
    }

    function addItems(e){
    
    e.preventDefault();
    alert(`you added new item`)
    if(input.trim() !== ''){
        setItems([...items,input]);
        setInput("");
    }
    }
    function deleteItem(indextodelete,item){
        alert(`Your item - ${item} is deleted`)
        setItems(items.filter((_,index) => index !==indextodelete))
    };
    return (

       
        <>
        <div className="container">\
            <h1>Grocery Bud</h1>
           <form onSubmit={addItems}>

             <input type="text"
             value={input}
             onChange={setInputValue}
             />
             <button className="addItem" >ADD</button>

           </form>
           {items.map((item,index)=>(
            <div className="itemname" key={index}>
                <p>{item}</p>
                <button onClick={()=>deleteItem(index,item)} className='deleteButton'>Delete</button>
            </div>
           ))}
            
           </div>
        </>
    )
}
export default Grocery