import styled from 'styled-components';

const Body = styled.div<{ $activate: boolean; }>`
  height: ${props => props.$activate ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${props => props.$activate ? '2rem 1rem' : '0 1rem'};
  opacity: ${props => props.$activate ? 1 : 0};
`;

export default Body;