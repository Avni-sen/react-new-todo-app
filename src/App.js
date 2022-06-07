import {useState} from 'react';
import "./App.css";

const initailState = [
  {id:1, baslik:'Javascript',yapildi:false},
  {id:2, baslik:'React',yapildi:true},
  {id:3, baslik:'NodeJS',yapildi:false},
  {id:4, baslik:'HTML',yapildi:false},
  {id:5, baslik:'CSS',yapildi:true},
  {id:6, baslik:'Bootstrap',yapildi:false},
];


function App() {
const [liste,setListe] = useState(initailState);
const [baslik,setBaslik] = useState('');

const addNew = (baslik) => {
  setListe([
    ...liste,
    {id: Date.now() , baslik: baslik, yapildi:false}
    ]);
}
console.log(baslik);

  return (
  <div className="App">
  <h1>Yapılacaklar Listesi</h1>
  <div className="ekleme-formu">
    <input value={baslik} onChange={(e) => setBaslik(e.target.value.trimStart())} type="text" placeholder="Listeye Ekle" />
    <button
    onClick={() =>{
      if(baslik.length > 0){
        addNew(baslik);
      }
      else{
        alert('Lütfen bir başlık giriniz');
      }
      setBaslik("");
    }}>Ekle</button>

  </div>
  <div className="liste">
      <ul>
        {liste.map(item=>(
        <li
         onClick={() => setListe(liste.map(el => el.id === item.id ? {...el,yapildi:!el.yapildi} : el))}
         className={item.yapildi ? "yapildi" : ""} key={item.id}>
          <h5>{item.baslik}</h5>
        </li>
        ))}
      </ul>
      </div>
  <button
  onClick={()=> {if(liste.filter(el => el.yapildi).length > 0) {
    setListe(liste.filter(item => !item.yapildi))
  }else{
    alert('Lütfen bir şey seçiniz')
  }
}}
  className="temizle"> Tamamlananları Temizle</button>
  <button
  onClick={()=> {if (liste.length  > 0 ) {
    setListe([])
  }
  else{
    alert('Listede eleman kalmadı')
  }}}
  className="temizle"> Hepsini Temizle</button>
</div>
);
}

export default App;
