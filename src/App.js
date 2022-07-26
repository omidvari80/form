
import './App.css';
import Forminput from './component/Forminput';
import { useState} from 'react'

function App() {
  const [ values, setValues] = useState({
    username:'',
    email:'',
    birthday : '',
    password :'',
    confirmpassword :'',
    
  });

  const input =[
    {
      id:1,
      name :'username',
      type :'text',
      placeholder:'Username',
      errorMessage:'Username should be 3-16 characters and  shouldnt include special character! ',
      required: true
    },
    
    {
      id:2,
      name:'email',
      type :'text',
      placeholder:'Email',
      errorMessage: 'It should be a valid email address!',
      pattern :'^[A-Za-z0-9]{3,16}$',
      required: true
    },

    {
      id:3,
      name:'birthday',
      type :'password',
      placeholder:'Birthday',
      required: true
    },

    {
      id:4,
      name:'password',
      type :'text',
      placeholder:'Password',
      errorMessage :'password should  be 8-20 characters and include at least 1 letter ,1 number and 1 special character',
      /*ttern :'^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}',*/
      required: true
    },

    {
      id:5,
      name :'confirmpassword',
      type :'text',
      placeholder:'Confirmpassword',
      errorMessage:'password dont match',
      pattern :values.password,
      required: true
      
    },
  ]

  const handleSubmit = ( e) =>{
    e.preventDefault();
    
  };

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value});
  };

console.log(values);
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>

      <h1>Register</h1>

      {input.map((input)=>

      < Forminput

       {...input} 

       key={input.id} 

       value ={values[input.name]}

       onChange = {onChange}
       />

      )}

      <button>submit</button>
    
     </form>
    </div>
  );
}

export default App;
