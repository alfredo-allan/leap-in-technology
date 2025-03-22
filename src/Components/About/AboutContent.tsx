import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importa Row e Col
import './AboutContent.css';
import lampIco from '../../Assets/Img/ico-lamp.png'
const AboutContent = () => {
  return (
    <Container className='about-container'>
      <Row className="justify-content-center"> {/* Adiciona Row e centraliza o conteúdo */}
        <Col xs={12} md={10} lg={8}> {/* Define a largura do conteúdo em diferentes telas */}
          <h2 className='title-about-text'>Sobre Nós <img className='ico-lamp' src={lampIco} alt="Icone de Lampada" /></h2>
          <p className='paragraph-about-text'>
            Unimos criatividade e tecnologia para transformar ideias em soluções que inspiram e impulsionam negócios. Somos uma equipe apaixonada por design gráfico e desenvolvimento de software, dedicada a criar experiências digitais que encantam e entregam resultados excepcionais.
          </p>
          <p className='paragraph-about-text'>
            <b> Nosso objetivo é claro: </b> desenvolver soluções inovadoras, escaláveis e de alta qualidade que atendam às necessidades únicas de cada cliente. Acreditamos que a tecnologia, quando aliada a um design cuidadosamente planejado, tem o poder de simplificar processos, conectar pessoas e gerar impacto real.
          </p>
          <h2 className='title-about-text'>Nossa Equipe</h2>
          <p className='paragraph-about-text'>
            <b>Contamos com um time multidisciplinar de profissionais experientes e altamente qualificados, especializados em:</b>
            Design de Interface (UI/UX): Criamos interfaces intuitivas e visualmente atraentes que garantem a melhor experiência para o usuário.
          </p>
          <p className='paragraph-about-text'>
            <b> Desenvolvimento Web e Mobile: </b> Construímos plataformas robustas e aplicativos que funcionam perfeitamente em qualquer dispositivo.
          </p>
          <p className='paragraph-about-text'>
            <b>Inovação Tecnológica: </b>Utilizamos as mais modernas ferramentas e metodologias para entregar soluções que estão sempre à frente do seu tempo.
          </p>
          <h2 className='title-about-text'>Nosso Compromisso</h2>
          <p className='paragraph-about-text'>
            Na <b>Leap In Technology ©</b>, não apenas entregamos projetos – construímos parcerias. Nosso compromisso é entender os desafios dos nossos clientes e oferecer soluções personalizadas que superem expectativas. Combinamos expertise técnica, criatividade e uma abordagem centrada no usuário para criar produtos que realmente fazem a diferença.
          </p>
          <p className='paragraph-about-text'>Junte-se a nós e descubra como podemos transformar sua visão em realidade.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;