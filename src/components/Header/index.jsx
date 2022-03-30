import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header({onOpenNewTransactionsModal}){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo dtmoney" />
                <button type='button' onClick={onOpenNewTransactionsModal}>
                    Nova transação
                </button> 
            </Content>
            
        </Container>
    )
}