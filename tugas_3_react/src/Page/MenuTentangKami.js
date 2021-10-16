import React, {Component} from "react";

class MenuTentangKami extends Component{
constructor(props){
  super(props);
  this.state = {
    tentang: this.props.tentang
  };
}

  render(){
    return(      
      <div>
          <p>Tentang kami</p> {this.props.tentang}
      </div>
    );
  }
}

export default MenuTentangKami;