import React from "react";
import 'aos/dist/aos.css';

function Blog(props){
    return (
        <header className='blog'>
            <h3>BLOG</h3>
            <h2>CONTEUDO DO BLOG</h2>
            <div className="mainblog" data-aos="fade-up">
                    <div className="elementosblog">
                        <button className="iconblog0">
                            <h2>Tratamento dos fios</h2>
                            <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adip isicing elit, <br/>
                            sed do eiusmod tempor incididunt ut<br/>
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                    <div className="elementosblog">
                        <button className="iconblog1">
                            <h2>Tratamento dos fios</h2>
                            <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adip isicing elit, <br/>
                            sed do eiusmod tempor incididunt ut<br/>
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                    <div className="elementosblog">
                        <button className="iconblog2">
                            <h2>Tratamento dos fios</h2>
                            <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adip isicing elit, <br/>
                            sed do eiusmod tempor incididunt ut<br/>
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
            </div>
        </header>
      );
}
export default Blog;