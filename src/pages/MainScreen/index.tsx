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


        </div>
    );
}

export default MainScreen;
