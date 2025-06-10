"use client"
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@/components/config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 id="hola">Hola, mi nombre es</h1>;
  const two = <h2 className="big-heading">Cristian Fontanini</h2>;
  const three = <h3 className="big-heading">Construyo páginas Web</h3>;
  const four = (
    <>
      <p>
        Soy un desarrollador especializado en la creación de páginas web. Mi formación incluye un enfoque en el desarrollo Front-End pero sin dejar atrás el conocimiento en Back-End.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://bar-idilio.vercel.app/"
      target="_blank"
      rel="noreferrer">
        Mirá mi trabajo
    </a>
  );

  const items = [one, two, three, four, five];
  
  return (
    < StyledHeroSection>
        <TransitionGroup component={null}>
          {isMounted && items.map((item, i) => (
            <CSSTransition key={i} className="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms`}}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
    </StyledHeroSection>
  );
}
