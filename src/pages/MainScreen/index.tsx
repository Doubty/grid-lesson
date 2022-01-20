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

            <main className="content">

                <div className="titulo">
                    <h1>Harry Potter</h1>
                    <span> A criança que sobreviveu a Voldermort</span>
                </div>

                <div className="caracteristicas">
                    <div>
                        <span className="numero">
                            72
                        </span>
                        <span className="rotulo">
                            Fogo
                        </span>
                    </div>
                    <div>
                        <span className="numero">
                            72
                        </span>
                        <span className="rotulo">
                            Raio
                        </span>
                    </div>
                </div>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero harum doloribus eveniet a quam perferendis alias consequatur unde, voluptas qui adipisci assumenda eius doloremque est quas accusantium sequi ipsum ab!</p>

                <img src={brasao} alt="brasao" />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates corrupti, accusamus eius deserunt laudantium magnam aliquam, earum praesentium est ab aut numquam architecto amet, ut fuga porro quo eaque nam.</p>
                <img src={sonserina} alt="brasao" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo quisquam quo alias tempora assumenda repellendus. Aspernatur quod et ea, libero eligendi quidem, aut possimus saepe quis nisi dolore iusto?
                </p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam possimus suscipit quisquam quasi temporibus incidunt quibusdam. Repudiandae sint dicta nesciunt accusamus accusantium facere doloremque, asperiores commodi rem alias? Fugiat?</p>

                <blockquote>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt pariatur illo obcaecati, ipsam perspiciatis tenetur repellat quidem earum odit ratione blanditiis ullam, iure dicta porro eaque aliquam aspernatur facere sed.</p>
                    <cite> Harrpy potter books</cite>
                </blockquote>

                <ul className="atributos">
                    <li>Tem o poder de fogo</li>
                    <li>Tem o poder de fogo</li>
                    <li>Tem o poder de fogo</li>
                    <li>Tem o poder de fogo</li>
                    <li>Tem o poder de fogo</li>
                    <li>Tem o poder de fogo</li>
                </ul>

                <div className="informacoes">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam numquam laborum assumenda, repellendus reprehenderit minima, sunt cumque velit consequatur, neque voluptatibus. Illum enim placeat qui culpa saepe, natus sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit repellat beatae dicta, temporibus aut accusamus illum at nisi, impedit porro placeat! Iste, molestias natus debitis praesentium commodi quibusdam harum.</p>

                </div>

                <img src={castelo} alt="castelo" />
            </main>


            <aside className="anuncios">
                <div className="anuncio-item">
                    <img src={brasao} alt="" />
                </div>
                <div className="anuncio-item">
                    <img src={sonserina} alt="" />
                </div>
            </aside>

            <footer className="footer">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus quos numquam voluptates quae, corporis labore deleniti sapiente vel? Corporis amet labore consequuntur veniam similique impedit exercitationem repellat, repellendus explicabo!</p>

            </footer>

        </div>
    );
}

export default MainScreen;
