import { useEffect } from 'react'
import styled from 'styled-components'
import InimigoType from '../types/InimigoType'

interface TorreProps {
  posX: number
  posY: number
  area: number
  dano: number
  inimigos: InimigoType[]
  setInimigos: ( inimigos: InimigoType[] ) => void
}

const Torre = ({ area, posX, posY, dano, inimigos, setInimigos }: TorreProps) => {

  useEffect( () => {
  })
  
  return (
    <>
      <TorreWrapper posX={posX} posY={posY}></TorreWrapper>
    </>
  )
}

interface TorreWrapperProps {
  posX: number
  posY: number
}

const TorreWrapper = styled.div`
    width: 90px;
    height: 90px;
    border: 1px solid gray;
    position: absolute;
    left: ${({ posX }: TorreWrapperProps) => (`${posX}px`)};
    bottom: ${({ posY }: TorreWrapperProps) => (`${posY}px`)};
  
    &:before {
      content: ${({ posX }: TorreWrapperProps) => (`'${posX}'`)};
    }
  `
export default Torre