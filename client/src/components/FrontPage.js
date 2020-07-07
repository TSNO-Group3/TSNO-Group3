import  React, {Component } from 'react';

import logo from './Logo.png';
import axios from 'axios'

class FrontPage extends Component {
   
    
       constructor(){
        super();
       
        this.state = {
      value: "teacher",
      
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
                        <option value="writer">writer</option>
                        <option value="doctor">doctor</option>
                        <option value="translater">translater</option>
                    </select>
                    </label>
<input type="submit" value="Search"></input>
</form>
</div>
  <br></br><br></br>

            
          
            </>
        );
    }
}

export default FrontPage;


