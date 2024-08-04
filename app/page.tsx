"use client"
import styled from 'styled-components';
import {Hero} from "@/components/sections/hero"
import {About} from "@/components/sections/about"
import {Featured} from "@/components/sections/featured"
import {Contact} from "@/components/sections/contact"

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function HomePage() {

  return (
    < StyledMainContainer className='fillHeight'>
      <Hero />
      <About />
      <Featured />
      <Contact />
    </StyledMainContainer>
  );
}
