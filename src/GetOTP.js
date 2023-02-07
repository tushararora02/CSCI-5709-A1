import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
class GetOTP extends React.Component {
    
    constructor() {
    super();
    this.state = {
      fields: {},
      errorresponse: {}
    }

    this.manageState = this.manageState.bind(this);
    this.getOTP = this.getOTP.bind(this);

  };

  manageState(variable){

    let fields=this.state.fields;
    fields[variable.target.name]=variable.target.value;
    this.setState({
        fields
    });

  };

   

  getOTP(item) {
    item.preventDefault();
    if (this.formValidation()) {
        let fields = {};
        fields["OTP"] = "";

        this.setState({fields:fields});
    
    }
    else{

    }

  }

  formValidation(){
    let fields=this.state.fields;
    let errorresponse={};
    let formvalid=true;

  

    if(!fields["OTP"]){
        formvalid=false
        errorresponse["OTP"]="OTP is missing!"
    }

    if(typeof fields["OTP"]!=="undefined"){
        if(fields["OTP"].match(/^[0-9]{6}$/)){
            formvalid=true
        }
        else{
            formvalid=false
            errorresponse["OTP"]="OTP should be of 6 character only"
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
        <form method="post"  name="userreset"  onSubmit= {this.getOTP} >

        <label>OTP :</label>
        <input type="text" name="OTP" value={this.state.fields.OTP} onChange={this.manageState}  />
        <div className="errorMsg">{this.state.errorresponse.OTP}</div>

        
        <Link to="/reset"><input type="submit" className="button"  value="Reset"/></Link>
        </form>
        
    </div>
</div>

      );
  }

 






}
export default GetOTP;