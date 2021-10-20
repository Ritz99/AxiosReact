import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'


function User({useradd,printUser}) {


    const [state, setState] = useState([]);
    const [adduser, setAdduser] = useState("");

    const click = (e)=>{
        e.preventDefault();
        if(!adduser){
            alert("Please enter Your name first");
        }
        useradd(adduser);

    }

   useEffect(() => {
       
     axios.get("https://jsonplaceholder.typicode.com/users").then(data =>{
        console.log(data.data)
        setState(data.data)
     })
   }, [])

  

    return (
        
        <div>
            <h1 style={{backgroundColor:'navy',color:'white', padding:'30px',width:'800px',margin:'auto', marginTop:'20px'}}>Digikull Students</h1> <br/>

            <h2>Hello User</h2> <br/>

            
            <form>
                <label>
                    <input style={{width:'300px', height:'30px'}} type="text" value={adduser} onChange={(e)=>(setAdduser(e.target.value))}/>
                </label>
                    <button style={{width:'80px', height:'35px'}} onClick={click}>ADD</button>
            </form> <br/>

            
           
                
            {state.map(ele => (
                
                <table style={{textAlign:'center', padding:'10px',width:'450px',margin:'auto', border:'3px solid black',marginTop:'5px'}}>
                <tr>
                 
                <td>{ele.name}</td>
                </tr>
                </table>
                    
            ))}
            
        </div>
    )
}

export default User
