import { useContext, useState,useEffect } from "react";
import Context from "./context";

function FormComponent(props) {

let {obj,setObj,state,dispatch} = useContext(Context)
let [show,setShow] = useState(false);
let [valueIndex,setValueIndex] = useState(0)




  return (
    <div className="FormComponent">

        <button onClick={()=>{
        dispatch({
            type:"DELETE",
            product:obj
        })
      }}>
        DELETE
      </button> 
    

      <ul style={{listStyle:'none'}}>
        {state.map((item,index)=>{
            return(                             
                <div key={index}>

                 
                <li onClick={()=>{
                    console.log("Ssalam");
                   
                   
                }}>{index + 1}.{item.product_name} - {item.product_description}-{item.product_price}
                 </li>

                 <button onClick={()=>{
                    setValueIndex(index +1)
                    setShow(true)
                  }}>
                    Edit
                  </button> 
                </div>
            )
        })}
      </ul>
         {show && <div id="modal">
          <div>
            <input defaultValue={[...state[valueIndex-1].product_name]} onChange={(e)=>{
              setObj({...state[valueIndex-1],product_name:e.target.value})
            }}/>
            <input defaultValue={state[valueIndex-1].product_description} onChange={(e)=>{
              setObj({...state[valueIndex-1],product_description:e.target.value})
            }}/>
            <input defaultValue={state[valueIndex-1].product_price} onChange={(e)=>{
              setObj({...state[valueIndex-1],product_price:e.target.value})
            }}/>

            <button onClick={()=>{
        dispatch({
            type:"EDIT",
            product:obj,
            index: (valueIndex-1),
           
        })
        setShow(false)
      }}>
        EDIT
      </button> 
          </div>
          
          </div>}
            
    </div>
  );
}


export default FormComponent;
