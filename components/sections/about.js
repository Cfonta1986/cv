// "use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image"
import styled from 'styled-components';
import { srConfig } from '@/components/config';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

export const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'TypeScript', 'React', 'Next 14', 'Node.js', 'WordPress', 'MongoDB', 'Git'];

  return (
    <StyledAboutSection id="sobremi" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre mi</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hola! Mi nombre es Cristián y disfruto mucho intentando crear paginas web. Mi enfoque principal está en el ámbito del Desarrollo Web. Me siento atraído por los desafíos y poseo una naturaleza detallista y autodidacta que me impulsa constantemente a buscar oportunidades para el crecimiento personal y profesional.
            </p>

            <p>
              Me formé en Marketing Digital en {' '}<a href="https://grow.google/intl/es/">Google Activate</a>, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END y Python para Data Science en {' '}<a href="https://www.aluracursos.com/">Alura</a> / {' '}<a href="https://www.oracle.com/ar/education/oracle-next-education/">Oracle</a> y {' '}<a href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa">Argentina Programa 4.0</a>.              
            </p>

            <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src="/cristian.png"
              width={300}
              height={300}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};


