import React from 'react';


class ResetPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sendEmail: ';'
		}
	}

	onEmailChange = (event) => {
    this.setState({sendEmail: event.target.value})
  }


	render() {
       const { onRouteChange2} = this.props;
    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
         <main className="pa4 black-80">
          <div className="measure">
           <div className="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="email" 
            name="email-address"  
            id="email-address" 
            onChange={this.onEmailChange}
            />
           </div>
           <div className="">
          <input 
           onClick={this.onSubmitSendResetLink}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          type="submit" 
          value="Send Reset Link" />
        </div>
         </div>
     </main>
  
  </article>
  );
  }
	}





export default ResetPassword;