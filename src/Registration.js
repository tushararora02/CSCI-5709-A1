import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Registration extends React.Component{

    constructor() {
        super();
        this.state = {
          fields: {},
          errorresponse: {}
        }
  
        this.manageState = this.manageState.bind(this);
        this.userRegistration = this.userRegistration.bind(this);
  
      };

      manageState(variable){

        let fields=this.state.fields;
        fields[variable.target.name]=variable.target.value;
        this.setState({
            fields,
            selectedOption: variable.target.value
        });

      }


      userRegistration(item) {
        item.preventDefault();
        if (this.formValidation()) {
            let fields = {};
            fields["name"] = "";
            fields["emailid"] = "";
            fields["password"] = "";
            fields["confirmpassword"]=""
            this.setState({fields:fields});
            alert("User is successfully registerd");
           
        }
  
      }

      formValidation(){
        let fields=this.state.fields;
        let errorresponse={};
        let formvalid=true;

        if(!fields["name"]){
            formvalid=false;
            errorresponse["username"]="username is missing!";
        }

        
        if(typeof fields["name"]!== "undefined"){
            if(fields["name"].match(/^[a-zA-Z]*$/)){
                formvalid=true
            }
            else{
                formvalid=false
                errorresponse["name"]="Only alphabets are allowed";
            }

        }

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

        if(!fields["password"]){
            formvalid=false
            errorresponse["password"]="password is missing!"
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

        
        if(!fields["confirmpassword"]){
            formvalid=false
            errorresponse["confirmpassword"]=" confirm password is missing!"
        }
     

        if(typeof fields["confirmpassword"]!=="undefined"){
            if(fields["confirmpassword"]===fields["password"]){
                formvalid=true
            }
            else{
                formvalid=false
                errorresponse["confirmpassword"]="Password  and confirm password do not matches"
            }

        }



        this.setState({
            errorresponse: errorresponse
          });
          return formvalid;

      }

      render() {
        return (
        <div id="main-registration-container">
         <div id="register">
         <h3 style={{fontSize:'24px', textAlign:'center'}}>Register</h3>
            <form method="post"  name="userRegistration"  onSubmit= {this.userRegistration} >
            <div className="radio">
                <input
                    type="radio"
                    value="Buyer"
                    id="rbtn"
                    checked={this.state.selectedOption === "Buyer"}
                    onChange={this.manageState}
            /><label for='rbtn'>Buyer</label>       
                <input
                        type="radio"
                        value="Seller"
                        id='rbtn2'
                        checked={this.state.selectedOption ==="Seller"}
                        onChange={this.manageState}
            /><label for='rbtn2'>Seller</label> 
        </div>

            <label>Name</label>
            <input type="text" name="name" value={this.state.fields.name} onChange={this.manageState} />
            <div className="errorMsg">{this.state.errorresponse.name}</div>

            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.manageState}  />
            <div className="errorMsg">{this.state.errorresponse.emailid}</div>

            <label>Password:</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.manageState} />
            <div className="errorMsg">{this.state.errorresponse.password}</div>

            <label>Confirm Password:</label>
            <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.manageState}   />
            <div className="errorMsg">{this.state.errorresponse.confirmpassword}</div>
            

            <input type="submit" className="button"  value="Register"/>
            </form>
            <Link to="/login">Already a user? login</Link>
            
        </div>
    </div>
    
          );
      }

     






}
export default Registration;