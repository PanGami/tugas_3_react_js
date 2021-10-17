import React, {Component} from "react";
import Header from "./Page/Header";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import Footer from"./Page/Footer";

class App extends Component{
  render(){
    return(
      <div>
        <Header/>        
        <MenuMakanan/>
        <center>
        <MenuTentangKami tentang="Warung nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara,
        Kami Ada Untuk Anda Membuat Anda Menikmati Makanan Khas Nusantara"/>        
        <p><h4>Jl. Swadaya IV, Pd.Ranggon, Cipayung, Kota Jakarta Timur, 
        Daerah Khusus Ibukota Jakarta 13860"</h4></p>
        </center>

        <MenuKontak kontak="081312345678"/>
        <Footer/>
      </div>
    );
  }
}


export default App;
