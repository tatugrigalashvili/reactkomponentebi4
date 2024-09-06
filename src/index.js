import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Footer from './footer';

function App() {
  
  var showAlert = (message) => {
    window.alert(message)
  };

  return (
    <div>
      <Header></Header>
      <button onClick={() => showAlert('გამარჯობა მსოფლიო')}>
        click
      </button>
      <Footer></Footer>
    </div>
  );
};

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)