import styled from 'styled-components';

const StyledFragment = styled.div`
  display: flex;
  color: ${props => props.color};
  background-color: ${props => props.bg};
`;

export default StyledFragment;