// import  React, {Component } from 'react';

// import logo from './Logo.png';
// import axios from 'axios'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// class FrontPage extends Component {
   
    
//        constructor(){
//         super();
       
//         this.state = {
//       value: "teacher",

//       users:[]
      
//     };
//         this.handleChange = this.handleChange.bind(this)
        
//         this.handleSubmit1 = this.handleSubmit1.bind(this);
        
  
  
//     };


// handleSubmit1(event) {

  
//     alert("Your favorite flavor is: " + this.state.value );
//     event.preventDefault();
//     console.log(this.state.value)
//     //console.log("orieb")
    

//   //FrontPage//connect server with client 
//    axios.get
//    ("http://localhost:3000/search", this.state.value)
//     .then((res) => {
//         console.log(this.state.value)
//           console.log(res)
//           this.setState({
//             users:res.data
//           })
//     }).catch((error) => {
//         console.log(error)
//     });
  
//   }
 

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//   };
  
// //make select input 
//     render() { 
//         return (
//             <>
//             <div>
// <br></br><br></br>

// <Form onSubmit={this.handleSubmit1}>
//   <Form.Group controlId="exampleForm.SelectCustom">
//     <Form.Label>Custom select</Form.Label>
//     <Form.Control as="select" custom value={this.state.value} onChange={this.handleChange}>
//       <option>teacher</option>
//       <option>smith</option>
//       <option>carpenter</option>
//       <option>photographer</option>
//       <option>nurse</option>
//     </Form.Control>
//   </Form.Group>
//   <Button variant="primary">Primary</Button>{' '}
// </Form>
                
// <div>

// {this.state.users.map(user => 

//   {
//     //service: "smith"
// if(user.service==this.state.value){
//   return (
//     <div>
// <div>{user.name}</div>
// <div>{user.email}</div>
// <div>{user.service}</div>
// <br></br><br></br><br></br>
// </div>



//   )
// }



//   } 
 
// )}



// </div>

// </div>
//   <br></br><br></br>

            
          
//             </>
//         );
//     }
// }

// export default FrontPage



import  React, {Component } from 'react';

import logo from './Logo.png';
import axios from 'axios'

class FrontPage extends Component {
   
    
       constructor(){
        super();
       
        this.state = {
      value: "teacher",

      users:[]
      
    };
        this.handleChange = this.handleChange.bind(this)
        
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        
  
  
    };


handleSubmit1(event) {
    alert("Your favorite flavor is: " + this.state.value );
    event.preventDefault();
    console.log(this.state.value)
    //console.log("orieb")
    

  //FrontPage//connect server with client 
   axios.get
   ("http://localhost:3000/search", this.state.value)
    .then((res) => {
        console.log(this.state.value)
          console.log(res)
          this.setState({
            users:res.data
          })
    }).catch((error) => {
        console.log(error)
    });
  
  }
 

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
//make select input 
    render() { 
        return (
            <>
            <div>
<br></br><br></br>
                <form onSubmit={this.handleSubmit1}>
                    <label > Search By catogry of  Serves
                         <select className="searchI" value={this.state.value} onChange={this.handleChange} >
                        <option value="teacher">teacher</option>
                        <option value="smith">smith</option>
                        <option value="doctor">doctor</option>
                        <option value="carpenter">carpenter</option>
                    </select>
                    </label>
<input type="submit" value="Search"></input>
<div>

{this.state.users.map(user => 

  {
    //service: "smith"
if(user.service==this.state.value){
  return (
    <div>
<div>{user.name}</div>
<div>{user.email}</div>
<div>{user.service}</div>
<br></br><br></br><br></br>
</div>



  )
}



  } 
 
)}



</div>
</form>
</div>
  <br></br><br></br>

            
          
            </>
        );
    }
}

export default FrontPage