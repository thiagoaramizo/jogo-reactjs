import styled from "styled-components"

interface Props {
    disparo: {
        x: number
        y: number
    }
    alvo: {
        x: number
        y: number
    }
    exibir: boolean
}

const Projetil = ( {disparo, alvo, exibir}: Props ) => {
    return(
        <ProjetilWrapper disparo={disparo} alvo={alvo} exibir={exibir}>
        </ProjetilWrapper>
    )
}


interface PropsProjetilWrapper {
    disparo: {
        x: number
        y: number
    }
    alvo: {
        x: number
        y: number
    }
    exibir: boolean
}
const ProjetilWrapper = styled.div`
    width: ${ ( {disparo , alvo }: PropsProjetilWrapper ) => ( `${Math.abs( disparo.x - alvo.x )}px` )};
    height: ${ ( {disparo , alvo }: PropsProjetilWrapper ) => ( `${Math.abs( disparo.y - alvo.y )}px` )};
    border: 1px solid red;
    position: absolute;
    bottom: ${ ( {disparo , alvo }: PropsProjetilWrapper ) => ( disparo.y > alvo.y ? `${alvo.y+40}px` : `${disparo.y+40}px` )};
    left: ${ ( {disparo , alvo }: PropsProjetilWrapper ) => ( disparo.x > alvo.x ? `${alvo.x}px` : `${disparo.x}px` )};
    display: ${ ( {exibir }: PropsProjetilWrapper ) => ( exibir ? 'block' : 'hidden' )};
`

export default Projetil