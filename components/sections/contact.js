import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@/components/config';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contacto" ref={revealContainer}>
      <h2 className="numbered-heading overline">¿Como sigue esto?</h2>

      <h2 className="title">Ponete en contacto!</h2>

      <p>
        Siempre estoy dispuesto a escuchar propuestas, espero que te interesen mis trabajos.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Mandar Mail!
      </a>
    </StyledContactSection>
  );
};

