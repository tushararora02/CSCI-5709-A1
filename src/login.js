import React from 'react';
import './App.css'

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
          fields: {},
          errorresponse: {}
        }
  
        this.manageState = this.manageState.bind(this);
        this.userLogin = this.userLogin.bind(this);
  
      };

      manageState(variable){

        let fields=this.state.fields;
        fields[variable.target.name]=variable.target.value;
        this.setState({
            fields,
            selectedOption: variable.target.value
        });

      }
 

      userLogin(item) {
        item.preventDefault();
        if (this.formValidation()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("User is successfully login");
        }
        else{
            alert("Either email id or password is wrong!")
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

        if(!fields["password"]){
            formvalid=false;
            errorresponse["username"]="password is missing!";
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


        if(typeof fields["password"]!=="undefined"  &&  typeof fields["emailid"]!=="undefined" ){
            if(fields["password"]==="abcde@123" &&  fields["emailid"]==="tushar@gmail.com"){
                formvalid=true
            }
            else{
                formvalid=false
                
            }

    }

        this.setState({
            errorresponse: errorresponse
          });
          return formvalid;
    }


    render() {
        return (
        <div id="main-login-container">
         <div id="login">
            <h3 style={{fontSize:'24px', textAlign:'center'}}>Login</h3>
            <form method="post"  name="userLogin"  onSubmit= {this.userLogin} >
            
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

            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.manageState}  />
            <div className="errorMsg">{this.state.errorresponse.emailid}</div>

            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.manageState} />
            <div className="errorMsg">{this.state.errorresponse.password}</div>

            <input type="submit" className="button"  value="Login"/>
            </form>
            <p>New to the platform? <a href="/register">Register</a></p>
            <p>reset password <a href="/reset">reset</a></p>
        </div>
    </div>
    
          );
      }


}

export default Login;