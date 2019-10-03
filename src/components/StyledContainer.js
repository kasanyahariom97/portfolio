import styled from 'styled-components';

const Container = styled.div`
   margin: 0px;
   padding: 0 10px;
   width: 100%;
   height: 100vh;
   background: ${props => props.bg};

   @media (max-width: 820px) {
      height: auto;
      padding: 0;
   }
`

export default Container;