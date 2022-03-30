import Modal from 'react-modal';
import {useState} from 'react'

import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header'
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement("#root") 


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function hadleNewTransactionOpenModal(){
      setIsNewTransactionModalOpen(true)
  }

  function hadleNewTransactioncloseModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionsModal={hadleNewTransactionOpenModal}/>
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hadleNewTransactioncloseModal}
      />
      
      <GlobalStyles/>
    </>
  );
}
