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
        pesan:state.props
      };
    });
  }
  pesanan(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
          <h3>Daftar Makanan Yang Kami Sediakan :</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                  <center>
                    <button onClick={this.pesanan}>Pesan Sekarang</button>
                  </center>

                </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          <td>
            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
            <button onClick={this.pesanan}>Pesan Sekarang</button>
          </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <input type="text" onChange={this.pesanan} />
          <h3>Pesanan Anda : {this.state.datalist}</h3>
      </div>
    );
  }
}

export default MenuMakanan;