import React, {Component} from 'react';

export default class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state = {};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () =>{
      if(xhttp.readyState == 4 && xhttp.status == 200){
        var object = JSON.parse(xhttp.responseText);
        this.setState(
          {
            idname:object.idname,
            id:object._id,
            img:'',
            imgData:object.imgContentType,
            imgname:object.imgname
          }
        );
        if(this.state.imgData.toString() == 'null'){
          this.setState({
            img:"assets/img/" + object.imgname +".jpg"
          });
        }
        else{
          this.setState({
            img:object.imgContentType
          });
        }
      }
    }
    xhttp.open("GET","/memberInfo");
    xhttp.send();
  }
  render(){
    return(
      <div className="hidden-xs col-sm-2 column sidebar-offcanvas" id="sidebar">
          <div id="userphoto-div">
              <a id="userphoto-setting"  href="#editModal" role="button" data-toggle="modal">
                <div className="text-align-center img-hover">
                  <i className="edit-i fa fa-pencil-square-o fa-3x" aria-hidden="true"></i>
                  <img src={this.state.img} id="userphoto" className="img-responsive displayed" alt="" />
                </div>
              </a>
          </div>
          <div id="idname-div">
              <h3>{this.state.idname}</h3>
          </div>

          <ul className="nav">
          <li><a href="#" data-toggle="offcanvas" className="visible-xs text-center"><i className="glyphicon glyphicon-chevron-right"></i></a></li>
          </ul>

          <ul className="nav hidden-xs" id="lg-menu">
              <li className="active"><a href="#member"><i className="fa fa-newspaper-o" aria-hidden="true"></i> 首頁</a></li>
              <li><a href="#groups"><i className="fa fa-flag" aria-hidden="true"></i> 社團</a></li>
              <li><a href="#bookmarks"><i className="fa fa-bullhorn" aria-hidden="true"></i> 粉絲專頁</a></li>
              <li><a href="#game"><i className="fa fa-gamepad" aria-hidden="true"></i> 遊戲</a></li>
              <li><a href="#messages"><i className="fa fa-commenting-o" aria-hidden="true"></i> 聊天室</a></li>
          </ul>

          <ul className="list-unstyled hidden-xs" id="sidebar-footer">
              <li>
                <div id="logo-footer-div">
                  <img src="assets/img/logo.png" id="logo-footer" className="img-responsive" />
                </div>
              </li>
              <li>
                <div>
                  <p>Copyright © Irene 2016</p>
                </div>
              </li>
          </ul>
      </div>
    );
  }
}
