import React, {Component} from 'react';


class PerPost extends Component {
  constructor(props){
    Number.prototype.padLeft = function(base,chr){
      var  len = (String(base || 10).length - String(this).length)+1;
      return len > 0? new Array(len).join(chr || '0')+this : this;
    }
    super(props);
    this.state = {};

    if(this.props.post.userid.imgContentType.toString() == 'null'){
      this.props.post.img = "assets/img/" + this.props.post.userid.imgname +".jpg";
    }
    else{
      this.props.post.img = this.props.post.userid.imgContentType;
    }
    var time = this.props.post.updateTime;
    var date = new Date(JSON.parse(time));
    date = [(date.getMonth()+1).padLeft(),
               date.getDate().padLeft(),
               date.getFullYear()].join('/') +' ' +
              [date.getHours().padLeft(),
               date.getMinutes().padLeft(),
               date.getSeconds().padLeft()].join(':');
    this.props.post.updateTime = date;
  }
  render(){
    if( this.props.post.imgContentData == null){
      return (
        <div className="col-sm-4 col-xs-12 image-element-class">
             <div className="panel panel-default">
               <div className="panel-body">
                 <p >{ this.props.post.postcontent }</p>
               </div>
               <div className="panel-body-name">
                 <div className= "row panel-body-margin-bottom">
                   <div>
                     <img src={ this.props.post.img } className="post-userimg displayed" alt="" />
                   </div>
                   <div className="post-user-name">
                     <p> { this.props.post.userid.idname } </p>
                   </div>
                   <div className="post-time">
                     <p> { this.props.post.updateTime }</p>
                   </div>
                 </div>
               </div>
               <div className="panel-body">
                 <p ></p>
               </div>
             </div>
          </div>
      );
    }
    else{
      return (
        <div className="col-sm-4 col-xs-12 image-element-class">
             <div className="panel panel-default">
               <div className="panel-thumbnail">
                 <img src={ this.props.post.imgContentType } className="img-responsive margin-center" />
               </div>
               <div className="panel-body-name">
                 <div className= "row panel-body-margin-bottom">
                   <div>
                     <img src={ this.props.post.img } className="post-userimg displayed" alt="" />
                   </div>
                   <div className="post-user-name">
                     <p> { this.props.post.userid.idname } </p>
                   </div>
                   <div className="post-time">
                     <p> { this.props.post.updateTime }</p>
                   </div>
                 </div>
               </div>
               <div className="panel-body">
                 <p >{ this.props.post.postcontent }</p>
               </div>
             </div>
         </div>
     );
    }
  }
}

export default PerPost;
