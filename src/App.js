import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const logoVermelha = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JsBdeiWUw9ycrjwAlkquD_WKKOffr4zmMADw-jm8rN1EVqxfnVwUkouwyBWTlngEbYQ&usqp=CAU";
  const logoBranca = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuzMAS4Za-DLDE-AAIo0BrjpAG8WupYB2fiXOdmsG0wvI1ROXGE3GUVtY8iw-_aEvYns&usqp=CAU";

  const [image, setImage] = useState(logoVermelha);

  useEffect(() => {
    setInterval(() => {
      if (image === logoVermelha) {
        setImage(logoBranca)
      } else {
        setImage(logoVermelha)
      }
    }, 1000)
  })

  return (
    <div className="App">
      <h2>
        <p>{new Date().toLocaleTimeString()}</p>
        <img src={image} alt=''></img>
      </h2>
    </div>
  )
}


