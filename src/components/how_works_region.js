import React, { Component } from 'react';
import chuteira from '../images/img-chuteira.png';

export default class HowWorksRegion extends Component{
  render(){
    return (
      <section id="how-works-region" className="header-region">
          <div className="row">
            <div className="col-md-6">
              <div className="how-works-content">
                <p className="text-success">COMO FUNCIONA</p>
                <p className="display-5">Veja o resultado assim que o gol sair!</p>
                <p >Abaixo você consegue visualizar o resultado de todos os jogos da Copa do Mundo 2018.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-thumbnail border-0 m-0 rounded-0 p-0" src={chuteira}/>
            </div>
          </div>
      </section>
    );
  }
}