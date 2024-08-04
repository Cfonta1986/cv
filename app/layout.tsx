"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Roboto_Mono } from "next/font/google";
import { GlobalStyle, theme } from "@/app/styles"
import styled, {ThemeProvider} from "styled-components";
import Navmenu from "@/components/parts/nav-menu";
import { Loader } from "@/components/parts/loader";
import { Social } from "@/components/parts/social"
import {Email} from "@/components/parts/email"
import {BaseLayout} from "@/components/parts/base"
import {Footer} from "@/components/parts/footer"

const roboto = Roboto_Mono({ subsets: ["latin"] });

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (typeof window !== 'undefined') {
      const handleHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.substring(1); 
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView();
              el.focus();
            }
          }, 0);
        }
      };

    handleHash();

    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }}, [isLoading, pathname])

  return (
    <html lang="es">
      <body id="root">
        <BaseLayout >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          { isLoading && isHome ? 
            (<Loader finishLoading={() => setIsLoading(false)} />) : 
            (<StyledContent>
              <Navmenu isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />
              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>)
          }
        </ThemeProvider>
        </ BaseLayout>
      </body>
    </html>
  );
}