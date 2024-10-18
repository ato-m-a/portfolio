import styled from 'styled-components';

interface StatefulProps {
  $activate: boolean;
}

export const Arrow = styled.span<StatefulProps>`
  background-image: url(/images/arrow_down.webp);
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.$activate ? 'rotate(180deg)translateY(-50%)' : 'rotate(0deg)translateY(-50%)'};
  top: ${(props) => (props.$activate ? '35%' : '50%')};
`;

export const Body = styled.div<StatefulProps>`
  height: ${(props) => (props.$activate ? 'auto' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${(props) => (props.$activate ? '2rem 1rem' : '0 1rem')};
  opacity: ${(props) => (props.$activate ? 1 : 0)};
`;
