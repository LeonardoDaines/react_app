import React from "react";
import 'aos/dist/aos.css';
import josy from "./image/josy.png"
import helena from "./image/Helena Maria.png"
import maria from "./image/maria.png"
import hyorrara from "./image/Hyorrara.png"
import daerlene from "./image/daerlene.png"
import meire from "./image/meire.png"
import marcia from "./image/marcia.png"

function Squad(props){
    return (
        <header className='squad'>
                <div className="equipTitle">
                    <h3>{props.titulo}</h3>
                    <h2>{props.subtitulo} </h2>
                </div>
                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={josy} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>Josy Hair</h1>
                            <h2> Depilação e Estetica</h2>
                            <p>Eu Joselene, mas prefiro ser chamada de Josy!.... Esteticista desde 2001, graduada em estética e cosmética em  2020!.. <br/>
                             quando fiz meu primeiro curso em depilação não imaginei que alí descobriria a minha maior paixão e vocação, sim vocação!....<br/>
                             porque amo o que faço, posso está cansada como estiver atendo a última com o mesmo carinho que a primeira, isso é amar o que faz !!
                                Gratidão a Deus e ao universo pela melhor descoberta da minha vida .
                                A minha profissão ❤️
                                Logo mais, terei novidades para meu público!.. hoje ofereço:</p>
                                  
                                  <p>Depilação com cera <br/>
                                    Depilação a laser (Lip, luz intensa pulsada) <br/>
                                    Designer  sobrancelhas <br/>
                                    Limpeza fácil <br/>
                                    Peeling de diamante e cristal <br/>
                                    Nutrição facial <br/>
                                    Microagulhamento <br/> 
                                    Gomagem corporal <br/>
                                    Banho de lua</p>
                            </div>
                    </div >
                </div>
                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={helena} alt="img" width="450" height="400"/>
                            <div className="squadText">
                            <h1>Helena Maria</h1>
                            <h2> Esteticista</h2>
                            <p>Sou Helena Maria Corrêa da Silva.
                            Por um tempo fui manicure, por mais ou menos 15 anos, depois
                            mudei radicalmente seguindo o caminho da educação, fiz
                            faculdade de letras e atuei como professora por 3 anos e na
                            sequência prestei concurso para coordenação pedagógica, onde
                            permaneci por 16 anos.<br/>
                            <br/>
                            Um certo dia, minha filha veio da Espanha, onde ela estava
                            vivendo, contou-me muitas maravilhas, resolvi que iria para lá
                            também e fui.<br/>
                            <br/>
                            Mudei de ramo radicalmente, lá trabalhei como camareira de piso
                            por 3 anos e meio. Retornei de lá, voltei para a educação. Neste
                            meio tempo iniciei vários cursos de estética e me apaixonei.
                            Cursei faculdade de estética, conto com mais de 12 anos nesta
                            área com muito amor e carinho por esta profissão e cada vez mais
                            procuro me aperfeiçoar e assim atender a minha clientela tão
                            querida.<br/>
                            <br/>
                            Hoje, minha melhor versão encontra-se na Estética!
                            </p>
                                
                            </div>
                    </div >
                </div>
                
                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={maria} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>maria</h1>
                            <h2> Cabeleireira</h2>
                            <p>Ah... Eu iniciei minhas atividades  em 1974 🙈  em Jundiai. fiz cursos de colorimetria no centro técnico da L'Oréal<br/>
                                 de Paris , dei aula de corte e química em 1991; fiz curso de terapia capilar na vita derm; curso de visagismo em <br/>
                                 Caçapava; curso de extensão capilar na Espanha (kk) e trabalho em Ubatuba desde 1990.  Neste salão desde 2004 ( acho)...<br/>
                                   Se precisar de.mais alguma coisa né fala...vou te manda a foto</p>
                            </div>
                    </div >
                </div>
                
                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={hyorrara} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>Hyorrara</h1>
                            <h2>Manicure</h2>
                            <p>Hyorrara Sammily<br/>
                            Manicure<br/>
                            unhas decoradas<br/>
                            Unhas em esmaltação em gel<br/>
                            Formada na Embelleze <br/>
                            Insta: @hyo_unhas</p>
                            </div>
                    </div >
                </div>

                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={daerlene} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>daerlene</h1>
                            <h2>Manicure</h2>
                            <p>Hyorrara Sammily<br/>
                            Manicure<br/>
                            unhas decoradas<br/>
                            Unhas em esmaltação em gel<br/>
                            Formada na Embelleze <br/>
                            Insta: @hyo_unhas</p>
                            </div>
                    </div >
                </div>

                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={meire} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>meire</h1>
                            <h2>Manicure</h2>
                            <p>Hyorrara Sammily<br/>
                            Manicure<br/>
                            unhas decoradas<br/>
                            Unhas em esmaltação em gel<br/>
                            Formada na Embelleze <br/>
                            Insta: @hyo_unhas</p>
                            </div>
                    </div >
                </div>

                <div className="squad">
                    <div className="mainSquad" data-aos="fade-right">
                            <img src={marcia} alt="img" width="auto" height="auto"/>
                            <div className="squadText">
                            <h1>marcia</h1>
                            <h2>Manicure</h2>
                            <p>Hyorrara Sammily<br/>
                            Manicure<br/>
                            unhas decoradas<br/>
                            Unhas em esmaltação em gel<br/>
                            Formada na Embelleze <br/>
                            Insta: @hyo_unhas</p>
                            </div>
                    </div >
                </div>
                
                
        </header>
        
      );    
}
export default Squad;