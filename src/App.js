import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    endereco: {},
  }

  async componentDidMount() {
    const response = await api.get('25036210/json/');
    console.log(response);
    this.setState({ endereco: response.data });
  }

  render() {

    const { endereco } = this.state;

    return (
      <div className="App">
        <form>
          <label>
            CEP:
              <input type="text" name="cep" />
            <button>
              Pesquisar
              </button>
          </label>
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
