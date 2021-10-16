import React, {Component} from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
  render(){
    return(
      <div>
          <h3>Daftar Makanan Yang Kami Sediakan :</h3>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
          </td>
          <td>
            <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
          </td>
      </div>
    );
  }
}

export default MenuMakanan;