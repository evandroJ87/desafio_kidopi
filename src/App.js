
import './App.css';
import api from './Api';
import { Component } from 'react';
import Lista_Paises from './components/Lista_Paises';


class App extends Component{

  

  state = {
    paises: [],
  }
  
  async componentDidMount(){
    const res = await api.get('');
    //console.log(res.data);
    this.setState({paises: res.data});
  }

  render(){
    const {paises} = this.state;
    

    return(
      <div>
        <h1>Escolha entre os seguintes países:</h1>
            <strong>Paises :</strong>
        < Lista_Paises />
        
      </div>
    )
  }
}

export default App;
