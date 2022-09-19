import styled from 'styled-components'

interface Props {
    posY: number
    posX: number
  }

const Caminho = styled.div`
    position: absolute;
    bottom: ${({ posY }: Props) => ( `${posY}px` )};
    left: ${({ posX }: Props) => ( `${posX}px` )};
    width: 30px;
    height: 90px;
    background-color: brown;

    &:before {
      content: ${({ posX }: Props) => ( `'${posX}'` )};;
    }

  `

export default Caminho