import React from 'react';
import './styles.css';
import varinha from '../../assets/images/varinha.svg';
import pomo from '../../assets/images/pomo.svg';
import chapeuSeletor from '../../assets/images/varinha.svg';
import bolaCristal from '../../assets/images/bolaCristal.svg';
import pedra from '../../assets/images/pedra.svg';
import mapa from '../../assets/images/mapa.svg';
import brasao from '../../assets/images/brasao.png';
import sonserina from '../../assets/images/sonserina.png';
import castelo from '../../assets/images/castelo.png';


function MainScreen() {
    return (
        <div className="estrutura">
            <header className="header">
                <a rel="noreferrer" href="#a" className='logo' >Harry Potter History</a>
                <nav>
                    <ul>
                        <li><a rel="noreferrer" href="#sobre">Sobre</a></li>
                        <li><a rel="noreferrer" href="#magos">Magos</a></li>
                        <li><a rel="noreferrer" href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <nav className="sidenav">
                <ul>
                    <li><a rel="noreferrer" href="#varinha"><img src={varinha} alt="Varinha" /></a></li>
                    <li><a rel="noreferrer" href="#pomo"><img src={pomo} alt="pomo" /></a></li>
                    <li><a rel="noreferrer" href="#chapeuSeletor"><img src={chapeuSeletor} alt="chapeuSeletor" /></a></li>
                    <li><a rel="noreferrer" href="#bolaCristal"><img src={bolaCristal} alt="bolaCristal" /></a></li>
                    <li><a rel="noreferrer" href="#mapa"><img src={mapa} alt="mapa" /></a></li>
                    <li><a rel="noreferrer" href="#pedra"><img src={pedra} alt="pedra" /></a></li>
                </ul>
            </nav>

           

        </div>
    );
}

export default MainScreen;
