import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    
    :root{
        --background: #f0f2f5;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969CB3;

        --shape: #FFFFFF

    }

   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

   html{
       @media(max-width: 1080px){
           font-size:93.75%;
       }

       @media(max-width: 720px){
           font-size:87.5%;
       }
   }

   body{
       background-color:var(--background);
       -webkit-font-smoothing:antialiaded;
   }

   body,input,button,textarea{
       font-family: 'Popping', sans-serif;
       font-weight: 400;
   }
   
   h1,h2,h3,h4,h5,h6,strong{
       font-weight: 600;
   }

   button{
       cursor:pointer;
   }

   [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
   }


   .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;

   }
   .react-modal-content{
        background-color: var(--background);

        width: 100%;
        max-width: 576px;
        position: relative;

        padding: 3rem;
        border-radius: 0.25rem;
        
   }

   .btn-close-modal{
        background: transparent;
        border: none;
        position: absolute;
        right: 1.5rem;
        top:1.5rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.5);
        }
    
    }
`


