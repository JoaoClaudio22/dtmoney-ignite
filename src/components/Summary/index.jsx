import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>R$12000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas" />
                </header>
                <strong>-R$2000,00</strong>
            </div>

            <div className='total-background'>
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$10000,00</strong>
            </div>
        </Container>  
    )
}