import { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Torre from './components/Torre'
import Boneco from './components/Boneco'
import Caminho from './components/Caminho'
import Projetil from './components/Projetil'
import InimigoType from './types/InimigoType'

interface TorreType {
  x: number
  y: number
  dano: number
  area: number
  nivel: number
}

function App() {

  const estrada = [
    [0, 300],
    [30, 300],
    [60, 300],
    [90, 300],
    [120, 300],
    [150, 300],
    [180, 300],
    [210, 300],
    [240, 300],
    [270, 300],
    [300, 300],
    [330, 300],
    [360, 300],
    [390, 300],
    [420, 300],
    [450, 300],
    [480, 300],
    [510, 300],
    [540, 300],
    [570, 300],
    [600, 300],
    [630, 300],
    [660, 300],
    [690, 300],
    [710, 300],
    [740, 300],
    [770, 300],
    [800, 300],
    [830, 300],
    [860, 300],
    [890, 300]
  ]

  const [torres, setTorres] = useState<TorreType[]>([
    { x: 100, y: 400, dano: 5, area: 60, nivel: 1 },
    { x: 500, y: 200, dano: 2, area: 80, nivel: 1 },
  ])

  const [inimigos, setInimigos] = useState<InimigoType[]>([
    { x: -30, y: 330, v: 10, vida: 100, vidaMax: 100 },
    { x: -60, y: 310, v: 12, vida: 100, vidaMax: 100 }
  ])

  const [rodada, setRodada] = useState(1)
  const [vida, setVida] = useState(20)

  useEffect(() => {
    jogar()
  })

  const jogar = () => {
    setTimeout(() => {
      if ( inimigos.filter( (inimgo) => inimgo.x > 900 ).length === inimigos.length ) {
        setVida( vida - inimigos.filter( (inimigo) => inimigo.vida > 0 ).length )
        setInimigos( gerarInimigos(rodada) )
        setRodada( rodada + 1 )
      } else {
        setInimigos((posicaoAntiga) => {
          const posicaoNova = posicaoAntiga.map((inimigo, index) => {
            const novoX = inimigo.x + inimigo.v
            const novaVida = inimigo.vida - pegarDano( novoX )
            return ({ ...inimigo, x: novoX, vida: novaVida })
          })
          console.log(posicaoNova)
          return posicaoNova
        })
      }
    }, 500)
  }

  const pegarDano = ( x: number ) => {
    for( let i = 0; i < torres.length; i++ ){
      const xDanoInicial = torres[i].x - torres[i].area
      const xDanoFinal = torres[i].x + 90 + torres[i].area
      if ( x > xDanoInicial && x < xDanoFinal) {
        return torres[i].dano + getRandomInt(torres[i].dano)
      }
    }
    return 0
  }

  const gerarInimigos = ( dificuldade: number ) => {
    const inimigos: InimigoType[] = []
    for( let i = 0; i <= dificuldade; i++ ){
      const vida = 100 + 10*getRandomInt(dificuldade)
      const inimigo: InimigoType = {
        x: -30 - getRandomInt(30),
        y: 300 + getRandomInt(50),
        v: 10 + getRandomInt(5),
        vida: vida,
        vidaMax: vida
      }
      inimigos.push( inimigo )
    }
    return inimigos
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <AreaJogo>

      <span>{vida}</span>

      {torres.map((torre, i) => (
        <Torre key={i} posX={torre.x} posY={torre.y} area={torre.area} dano={torre.dano} inimigos={inimigos} setInimigos={setInimigos}></Torre>
      ))}


      {estrada.map((coord: number[], i) => (
        <Caminho key={i} posX={coord[0]} posY={coord[1]}></Caminho>
      ))}

      {inimigos.map((inimigo, index) => (inimigo.vida > 0 ?
        <Boneco key={index} posX={inimigo.x} posY={inimigo.y} vida={inimigo.vida} vidaMax={inimigo.vidaMax}></Boneco> : ''
      ))}

      {torres.map((torre, i) => (
        <AreaDano key={i} posX={torre.x} posY={torre.y} area={torre.area}></AreaDano>
      ))}

    </AreaJogo>
  )
}

const AreaJogo = styled.div`
  position: relative;
  width: 900px;
  height: 600px;
  margin: 20px auto;
  border: 2px solid black;
  overflow: hidden;
`

interface AreaTorreDanoProps {
  posX: number
  posY: number
  area: number
}

const AreaDano = styled.div`
  width: ${({ area }: AreaTorreDanoProps) => (`${area * 2 + 90}px`)};
  height: 100%;
  border: 1px solid red;
  position: absolute;
  left: ${({ posX, area }: AreaTorreDanoProps) => (`${posX - area}px`)};
  bottom: 0;
`

export default App
