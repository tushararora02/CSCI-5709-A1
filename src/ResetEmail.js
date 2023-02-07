import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

class ResetEmail extends React.Component {
    
    constructor() {
    super();
    this.state = {
      fields: {},
      errorresponse: {}
    }

    this.manageState = this.manageState.bind(this);
    this.userresetEmail = this.userresetEmail.bind(this);

  };

  manageState(variable){

    let fields=this.state.fields;
    fields[variable.target.name]=variable.target.value;
    this.setState({
        fields
    });

  };

   
  userresetEmail(item) {
    item.preventDefault();
    if (this.formValidation()) {
        let fields = {};
        fields["emailid"] = "";
        
        this.setState({fields:fields});
        this.props.history.push('/GetOTP')


    }
    else{

    }

  }

  formValidation(){
    let fields=this.state.fields;
    let errorresponse={};
    let formvalid=true;

    if(!fields["emailid"]){
        formvalid=false;
        errorresponse["emailid"]="emailid is missing!";

    }

    if(typeof fields["emailid"]!=="undefined"){
        if(fields["emailid"].match(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/)){
            formvalid=true
        }
        else{
            formvalid=false
            errorresponse["emailid"]="please provide valid email id!"
        }

    }

    this.setState({
        errorresponse: errorresponse
      });
      return formvalid;

  }

  render() {
    return (
    <div id="main-reset-container">
     <div id="reset">
     <h3 style={{fontSize:'24px', textAlign:'center'}}>Reset Page</h3>
        <form method="post"  name="userresetEmail"  onSubmit= {this.userresetEmail} >

        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.manageState}  />
        <div className="errorMsg">{this.state.errorresponse.emailid}</div>

          
       
      <Link to={"/GetOTP"} ><input type="submit" className="button"  value="Get OTP"/></Link>
        </form>
        
    </div>
</div>

      );
  }

 






}
export default ResetEmail;