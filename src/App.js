import React, { Component } from 'react';
import api from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {cep:"", endereco:{}}
  }
  pesquisarCep = (e) => {
    console.log("fui clicado" + this.state.cep);
    e.preventDefault();
    api.get(this.state.cep + "/json").then(data => this.setState({endereco: data.data}));
  }

  salvaCep = (e) => {
    console.log("foi digitado");
    this.setState({cep: e.target.value});
  }

  render() {
    const { endereco } = this.state;

    return (
      <div className="App">
        <form>
          <input type="text" value={this.state.cep} onChange={this.salvaCep}></input>
          <button onClick={this.pesquisarCep}>Pesquisar</button>
        </form>
        <div>
          <ul>
            <li>Cep: {endereco.cep}</li>
            <li>Logradouro: {endereco.logradouro}</li>
            <li>Complemento: {endereco.complemento}</li>
            <li>Bairo: {endereco.bairro}</li>
            <li>Localidade: {endereco.localidade}</li>
            <li>Uf: {endereco.uf}</li>
            <li>Ibge: {endereco.ibge}</li>
            <li>Gia: {endereco.gia}</li>
            <li>DDD: {endereco.ddd}</li>
            <li>Siafi: {endereco.siafi}</li>
          </ul>
        </div>
      </div>
    );
  };
};

export default App;
