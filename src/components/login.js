import React, {Component} from 'react';

export default class Login extends Component {
  submitForm(){
    document.getElementById('login_form').submit();
  }
  render(){
    return(
      <div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="col-md-1">
          </div>
          <div className="col-md-10">
            <div className="login-screen">
              <div className="app-title">
                <h1>登入</h1>
              </div>
              <form id="login_form" method="post" action="/login">
                  <div className="login-form">
                    <div className="control-group">
                      <input name="username" type="text" className="login-field" placeholder="帳號" id="login-name" />
                      <label className="login-field-icon fui-user" for="login-name"></label>
                    </div>
                    <div className="control-group">
                      <input name="password" type="password" className="login-field" placeholder="密碼" id="login-pass" />
                      <label className="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
                    <a onClick={this.submitForm} className="btn btn-primary btn-large btn-style" href="javascript:{}">login</a>
                    <p id="login-err"></p>
                    <a id="switch-btn" className="login-link" href="#">還沒有帳號？</a>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
