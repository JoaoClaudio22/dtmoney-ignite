import styled from 'styled-components'
import {darken, transparentize} from 'polished'


export const Container = styled.form`
    h2{
        color: var(--text-title);
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        background-color: #E7E9EE;
       
        
        border-radius: 0.25rem;        
        border: 1px solid #D7D7D7;
        
        font-size: 1rem;
        font-weight: 400;


        & + input {
            margin-top: 1rem;
        }

        &::placeholder{
            color: var(--text-body);
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        background-color: var(--green);
        border: 0;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
        color:#fff;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.9)
        }
    
    }

`
export const TransactionTypeButtons = styled.div`
    margin: 1rem 0;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`

const colors = {
    red: '#E52e54',
    green: '#33CC95'
}

export const RadioBox = styled.button`
        
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1.5px solid #d7d7d7 ;
        border-radius: 0.25rem;
        background-color: ${(props) => props.isActive 
        ?  transparentize(0.9,colors[props.activeColor])
        : 'transparent'};
        transition: border-color 0.2s;


        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size:1rem;
            color: var(--text-title);
        }

        &:hover{
        border-color: ${darken(0.1,'#d7d7d7')};
    }
    
`