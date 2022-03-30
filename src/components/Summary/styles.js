import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top:-10rem;

    div{
        background-color: var(--shape);
        color: var(--text-title);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size:2rem;
        font-weight: 500;
    }


    div.total-background{
        background-color: var(--green);
        color: #fff;
    }

`