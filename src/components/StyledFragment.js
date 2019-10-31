import styled from 'styled-components';

const StyledFragment = styled.div`
  display: flex;
  color: ${props => props.color};
  background-color: ${props => props.bg};

  a.normalLink {
    color: ${props => props.aColor};
  }

`;

export default StyledFragment;