import { useState } from "react"

import Modal from "react-modal"
import { Container,TransactionTypeButtons, RadioBox } from "./styles"
import closeImg from "../../assets/fechar.svg"
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import { api } from "../../services/api"


export function NewTransactionModal({ isOpen,onRequestClose }){

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleSubmitForm(event){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }
            
        api.post('/transactions',data)
    }

    return(

        <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
        >
            <button 
                className="btn-close-modal"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="" />
            </button>
           
            <Container
                onSubmit={handleSubmitForm}
            >
                <h2>Cadastrar transição</h2>
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="Preço" 
                    value={value}
                    onChange={event => setValue(+event.target.value)}
                />

                <TransactionTypeButtons>
                    <RadioBox
                        type="button"
                        onClick = {() => setType('deposit')}
                        isActive = {type === 'deposit'}
                        activeColor = 'green'
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox
                         type="button"
                         onClick = {() => setType('withdraw')}
                         isActive = {type === 'withdraw'}
                         activeColor = 'red'
                    >
                        <img src={outcomeImg} alt="Saídas" />
                        <span>Saídas</span>
                    </RadioBox>
                </TransactionTypeButtons>

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
        
    ) 
}