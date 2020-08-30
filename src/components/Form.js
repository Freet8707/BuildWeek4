import React, {useState,useEffect} from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import Weed from './Weed.js';
import { Container, Row, Col } from 'reactstrap';
import Carousel from './Carousel.js'

//work around login to render form component 
//window.localStorage.setItem('token', '1234')

//Form Function
const Form = () => {

//setting a push method from the useHistory hook in order to return application to the main login (home) component
const { push } = useHistory()

const [data,setData] = useState([]);

//blank state for the form data 
const blankValue =  {
    effect: "",
    flavor:""
 }
 //setting form state
const [formState,setForm] = useState(blankValue);

//state for button
const [buttonDisabled, setButtonDisabled] = useState(true);

//state for errors 
const [errors, setErrors] = useState({
    effect: "",
    flavor:""
})

//setting up yup schema object 

const dataSchema = yup.object().shape({
    effect: yup.string().oneOf(["Creative","Focused","Creative"],"Please select a desired effect"),
      flavor: yup.string().oneOf(["Earthy","Apple"], "Please select a desired Flavor")
  });

//onChange function to watch for changes in form values 
const inputChange = e => {
    e.persist();
    const newFormData = {
        ...formState, [e.target.name] :  e.target.value
    }
    setForm(newFormData);
}

//validating that the form has inputs and setting errors with yup
// const validateChange = (e) => {
//     yup
//       .reach(dataSchema, e.target.name)
//       .validate(e.target.name === ? e.target.checked : e.target.value) 
//       .then((valid) => {
//         setErrors({
//           ...errors,
//           [e.target.name]: ""
//         });
//       })
//       .catch((err) => {
//         console.log(err);

//         // set error in state
//         setErrors({
//           ...errors,
//           [e.target.name]: err.errors[0]
//         });
//       });
//   };
//submit function to record the data in a json structure with an api HLKs5e3
const formSubmit = e => {
    e.preventDefault();
    console.log(formState);
    axios.post("https://med-cab4.herokuapp.com/predict",formState)
        .then(response => {
            console.log(response.data);
            setData(response.data);
              
            setForm(blankValue);
        })
        .catch(err => {
            console.log(err);
        });
}

//use effect to make sure person provides an effect 
// useEffect(() => {
//     axios.post("https://med-cab4.herokuapp.com/predict")
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// }, [formState]);

return (
    <div>
        <Container>
         <Row className = "sizing" >
           <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Carousel/>
           </Col>
         </Row>
         <form onSubmit = {formSubmit}>
         <Row>
             <Col>
             <label htmlFor = "effect">
                 Effect you're Looking for:
                <select name ="effect" onChange = {inputChange} value= {formState.effect}>
                    <option value = {null}></option>
                    <option value = 'Energetic'>Energetic</option>
                    <option value = "Creative">Creative</option>
                    <option value = "Focused">Focused</option>
                </select>
             </label>
             </Col>
             <Col>
             <label htmlFor = "flavor">
                 Flavor you're Looking for:
                <select name ="flavor" onChange = {inputChange} value= {formState.flavor}>
                    <option value = {null}></option>
                    <option value = "Apple">Apple</option>
                    <option value = "Earthy">Earthy</option>
                    <option value = "Blueberry">Blueberry</option>
                </select>
             </label>
             </Col>
             </Row>
             <button className = "Danger"  type = "submit">Submit</button>
         </form>
         </Container>
         <Container>
         <Weed weed = {data} />
         <Link to='/save-recommend'><button>Save Recommendation ?</button></Link>
         <Link to='/get-recommend'><button>Get Recommendation(s) ?</button></Link>
         </Container>
    </div>
)
}

export default Form;