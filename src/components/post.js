import React, {Component} from 'react';

export default class Post extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
    this.changeFileName1 = this.changeFileName1.bind(this);
    this.changePostcontent = this.changePostcontent.bind(this);
    this.postImgBlock = new Image();
    this.postImgBlock.src = "data:image/png;base64,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";
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
