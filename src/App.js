import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {


//   const[firstName, setFirstName] = useState("");
//   const[lastName, setLastName] = useState("");

//   function changeFirstNameHandler(event) {

//         // console.log("printing first name");
//         // console.log(event.target.value);
//         setFirstName(event.target.value);
//   }



//   function changeLastNameHandler(event) {
        
//         // console.log("printing last name");
//         // console.log(event.target.value);
//         setLastName(event.target.value);
// }


  const [formData, setFormData] = useState( {firstName: "", lastName: "", 
    email:"", comments:"", isVisible:true, mode:"", favCar:"" } );



  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
      event.preventDefault();

      console.log("Finally printing the entire form ka data....")
      console.log(formData)
  }




  return (
    <div className="App">

      <form onSubmit={submitHandler}>

        <input 
          type="text" 
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}>

        </input>


        <br/>
        <br/>



        <input 
          type="text" 
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.LastName}>

        </input>



        <br/>
        <br/>



        <input 
          type="email" 
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}>

        </input>

        <br/>
        <br/>


        <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}>

        </textarea>

        <br/>
        <br/>

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked = {formData.isVisible}>
        </input>
        <label htmlFor="isVisible">Am I Visible ?</label>




        <br/>
        <br/>
        

        <fieldset>
          <legend> Mode: </legend>

              <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Online-Mode"
              id="Online-Mode"
              checked={formData.mode === "Online-Mode"}>

            </input>
              <label htmlFor="Online-Mode">Online Mode</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Offline-Mode"
              id="Offline-Mode"
              checked={formData.mode === "Offline-Mode"}>
            </input>
            <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        
        <br/>
        <br/>
        
        <label htmlFor='favCar'>Tell me your favourite car</label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
          >

          <option value="Scorpio">Scorpio</option>
          <option value="Furtuner">Furtuner</option>
          <option value="BMW">BMW</option>
          <option value="Ford">Ford</option>
          <option value="Audi">Audi</option>
          <option value="Renault">Renault</option>

        </select>

        <br/>
        <br/>

        <button> Submit </button>



      </form>

    </div>
  );
}

export default App;
