import React, {Component} from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{

  constructor(props){
    super(props);
    this.state = {
      datalist:0
    };
    this.rubahPesanan = this.rubahPesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);
  }

  rubahPesanan(){
    this.setState((state,props)=>{
      return{
        pesan:state./*BelumDiisi*/
      };
    });
  }
  pesanan(e){
    console.log(e.target./*BelumDiisi*/);
  }

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