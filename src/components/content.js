import React, {Component} from 'react';
import PerPost from './perPost';
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

export default class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts:null
    };
    var xhttp = new XMLHttpRequest();
    var fromPost = 0;
    var count = 1;
    xhttp.onreadystatechange = () =>{
      if(xhttp.readyState == 4 && xhttp.status == 200){
        var resObject = JSON.parse(xhttp.responseText);
        var object = resObject.map(value => {
          return (<PerPost post={value} key={value._id}/>);
        });
        this.setState({posts:object});
        fromPost += count;

      }
    }
    xhttp.open("GET","/post?from=" + fromPost + "&count=" + count);
    xhttp.send();
  }
  render(){
    return(
      <div className="padding">
          <div className="full col-sm-9">
            <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'div'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
                   {this.state.posts}
            </Masonry>
          </div>
      </div>

    );
  }
}
