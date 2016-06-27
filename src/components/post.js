import React, {Component} from 'react';

export default class Post extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
    this.changeFileName1 = this.changeFileName1.bind(this);
    this.changePostcontent = this.changePostcontent.bind(this);
    }
  changePostcontent(){
    var textarea = document.getElementById('content_input');
    this.setState({
      postcontent : textarea.value
    });
  }
  changeFileName1(){
    var input = document.getElementById('img-input');
    document.getElementById('post-img-name').innerHTML = input.files[0].name;
    var output = document.getElementById('output-img-preview');
    output.src = URL.createObjectURL(input.files[0]);
    var div = document.getElementById("post-img-div");
    div.className += " img-div-style";
    div.classList.remove("display-none");
    this.setState({
      imgFile : input.files[0]
    });
  }
  submitForm(){
    if((this.state.postcontent != "") || (this.state.imgFile != null)){
      var d = new Date();
      var reader = new FileReader();
      var textarea = document.getElementById('content_input');
      if(this.state.imgFile == null){
        var xhttp = new XMLHttpRequest();
        var newPost = {
          postcontent : textarea.value.toString(),
          imgContentData: null,
          updateTime : d.getTime().toString()
        };
        console.log(textarea.value.toString());
        console.log(d.getTime().toString());

        xhttp.onreadystatechange = function () {
          if(xhttp.readyState == 4 && xhttp.status == 200){
            window.location.href = "/member";
          }
        }
        xhttp.open("POST", "/post");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(newPost));
      }else{
        reader.addEventListener("load", function(){
          var xhttp = new XMLHttpRequest();
          var newPost = {
            postcontent : textarea.value.toString(),
            imgContentData: reader.result,
            updateTime : d.getTime().toString()
          };
          console.log(textarea.value.toString());
          console.log(d.getTime().toString());

          xhttp.onreadystatechange = function () {
            if(xhttp.readyState == 4 && xhttp.status == 200){
              window.location.href = "/member";
            }
          }
          xhttp.open("POST", "/post");
          xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhttp.send(JSON.stringify(newPost));
        });
        reader.readAsDataURL(this.state.imgFile);
      }
    }
  }
  render(){
    return(
      <div id="postModal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
      			更新你的近況
            </div>
      			<form id="post_form" className="form center-block" method="post" action="/post" enctype="multipart/form-data">
      	      <div className="modal-body">

      	            <div className="form-group">
      	              <textarea id="content_input" value={this.state.postcontent} onChange={this.changePostcontent} name="postcontent" type="text" className="form-control input-lg" rows="4" placeholder="What do you want to share?"></textarea>
      								<div className="row">
      									<div id="post-img-div" className="img-hover display-none col-sm-7 col-xs-7">
      										<img id="output-img-preview" className="img-responsive margin-center"/>
      										<button id="delete-btn" type="button" className="btn-img-delete close">×</button>
      									</div>
      								</div>
      	            </div>

      	      </div>
      	      <div className="modal-footer">
      	          <div>
      							<div className="image-upload pull-left list-inline">
      								<label htmlFor="img-input">
      		        			<i className="fa fa-picture-o" aria-hidden="true">  <span id="post-img-name">選擇一張照片</span></i>
      		    				</label>
      		    				<input id="img-input" type="file" name="userPhoto" onChange={this.changeFileName1} value="assets/img/block.png"/>
      							</div>
      		          <button onClick={this.submitForm} type="submit" value="Upload userpost" className="btn btn-primary btn-sm" data-dismiss="modal" aria-hidden="true">Post</button>

      			  		</div>
      	      </div>
      		</form>
        </div>
        </div>
      </div>
    );
  }
}
