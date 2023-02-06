import React from 'react';
import './App.css'
class Reset extends React.Component {
    
    constructor() {
    super();
    this.state = {
      fields: {},
      errorresponse: {}
    }

    this.manageState = this.manageState.bind(this);
    this.userreset = this.userreset.bind(this);

  };

  manageState(variable){

    let fields=this.state.fields;
    fields[variable.target.name]=variable.target.value;
    this.setState({
        fields
    });

  }


  userreset(item) {
    item.preventDefault();
    if (this.formValidation()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        fields["confirmpassword"]=""
        this.setState({fields:fields});
        alert("password is successfully changed");
        window.location.href="/login"

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

    if(!fields["password"]){
        formvalid=false
        errorresponse["password"]="password is missing!"
    }

    if(!fields["confirmpassword"]){
        formvalid=false
        errorresponse["confirmpassword"]="confirm password is missing!"
    }

    if(typeof fields["password"]!=="undefined"){
        if(fields["password"].match(/^[A-Za-z0-9_.#@]{8,}$/)){
            formvalid=true
        }
        else{
            formvalid=false
            errorresponse["password"]="Password should be atleast 8 character and only contain _.#@ characters"
        }

     }



    if(typeof fields["confirmpassword"]!=="undefined" && typeof fields["password"]!=="undefined"){
        if(fields["confirmpassword"]===fields["password"]){
            formvalid=true
        }
        else{
            formvalid=false
            errorresponse["confirmpassword"]="Password  and confirm password do not matches"
        }

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
        <form method="post"  name="userreset"  onSubmit= {this.userreset} >

        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.manageState}  />
        <div className="errorMsg">{this.state.errorresponse.emailid}</div>

        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.manageState} />
        <div className="errorMsg">{this.state.errorresponse.password}</div>

        <label>Confirm Password</label>
        <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.manageState} />
        <div className="errorMsg">{this.state.errorresponse.confirmpassword}</div>
        
        
        <input type="submit" className="button"  value="Reset"/>
        </form>
        
    </div>
</div>

      );
  }

 






}
export default Reset;