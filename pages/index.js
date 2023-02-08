import Image from "next/image";
import img from "../src/images/gabriel-barbosa.png";
import img_fundo from "../src/images/estadio-flamengo.jpg";
export default function Home() {
  return (
    <div className="body">
        <div className="imagem-fundo">
            <Image className="estadio" src={img_fundo} alt="imagem do estádio do flamengo"></Image>
        </div>
        <div className="cabecalho">
            <div className="logo">
                <Image></Image>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="/"> Home </a> </li>
                        <li><a href="/"> Time </a></li>
                        <li><a href="/"> Sala de Trófeus</a></li>
                        <li><a href="/"> Sobre</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="conteudo">
            <div className="texto">
                <div className="titulo">
                    <p>
                        Bem Vindo ao ninho do Urubu!
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="imagem">
                <Image src={img} alt="foto do gabriel barbosa"></Image>
            </div> 
        </div>

    </div>
  );
}
