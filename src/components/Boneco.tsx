import styled from "styled-components"

interface PropsBoneco {
    posY: number
    posX: number
    vida: number
    vidaMax: number
}


const Boneco = ( {posX, posY, vida, vidaMax}: PropsBoneco ) => {
    return (
        <BonecoWrapper posX={posX} posY={posY}>
            <span>{posX},{posY}</span>
            <Sprite></Sprite>
            <Vida vida={vida} vidaMax={vidaMax}></Vida>
            <span>{vida}</span>
        </BonecoWrapper>
    )
}

interface Props1 {
    posY: number
    posX: number
}
const BonecoWrapper = styled.div`
    position: absolute;
    bottom: ${ ({ posY }: Props1) => ( `${posY}px` ) };
    left: ${({ posX }: Props1) => ( `${posX}px` )};
    transition: all 500ms;
    display: ${({ posX }: Props1) => ( posX > -30 ? 'block' : 'none' )};
`
const Sprite = styled.div`
    width: 30px;
    height: 30px;
    overflow: hidden;
    border: 1px solid red;
    background-color: white;
    border-radius: 50%;
`
interface Props2 {
    vida: number
    vidaMax: number
}

const Vida = styled.div`
    width: 62px;
    height: 7px;
    margin-left: -15px;
    margin-top: 5px;
    border: 1px solid black;
    position: relative;

    &:after {
        display: block;
        content: '';
        width: ${({ vida, vidaMax }: Props2) => ( `${vida/vidaMax*60}px` )};
        height: 5px;
        background-color: ${({ vida, vidaMax }: Props2) => (  vida/vidaMax*60 > 20 ? 'green' : 'red' )};
        position: absolute;
        top: 0;
        left: 0;
    }
`

export default Boneco

