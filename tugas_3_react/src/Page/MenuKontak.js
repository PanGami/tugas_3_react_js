import React, {Component} from "react";

class MenuKontak extends Component{
constructor(props){
  super(props);
  this.state = {
    alamat: this.props.alamat,
    kontak: this.props.kontak
  };
}

  render(){
    return(
      <div>
        <center>
          <h3>{this.props.alamat}</h3>
          <h4>Kontak Kami : {this.props.kontak}</h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;