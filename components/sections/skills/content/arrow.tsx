import styled from 'styled-components';

const Arrow = styled.span<{ $activate: boolean; }>`
  background-image: url(/images/arrow_down.webp);
  transition: all 0.3s ease;
  transform: ${props => props.$activate ? 'rotate(180deg)translateY(-50%)' : 'rotate(0deg)translateY(-50%)'};
  top: ${props => props.$activate ? '35%' : '50%'};
`;

export default Arrow;