import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-auto-rows: auto;
    background-color: rgba(245,245,245,0.8);
`;

export const Sidebar = styled.div`
    grid-column: 1 / span 1;
    min-height: 100vh;
    box-shadow: 2px 0 5px rgba(10,10,10,0.5);
    @media (max-width: 700px) {
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
    }
`;

export const Content = styled.div`
      grid-column: 2 / span 1;
      background-color: rgba(230,230,230,0.5);
      @media (max-width: 700px) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 1;
        }
`;

export const LogoContainer = styled.div`
    width: calc(40px * 2);
    height: 80px;
    margin: 0 auto;
`;


export const Logo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 100%;
    width: 100%;
    display: block;
    @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
