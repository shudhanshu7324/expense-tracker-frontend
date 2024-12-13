import { useNavigate } from "react-router-dom";
import ExpenseButton from "../components/ExpenseButton";
import "./Home.css";
import Modal from "../modals/Modal";
import { useState } from "react";

const Home = () => {

    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false)

    const addExpense = () => {
        setShowModal(true)
    }

    const expenseList = () => {
        navigate('/expenseList')
    }

  return (
    <div className="home" onClick={showModal ? ()=> setShowModal(false) : undefined}>
      { showModal && <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <Modal setModal={setShowModal} />
    </div> }
        <div className={`home-box ${showModal ? "home-box-modal" : ""}`}>
        <h1>Welcome To Expense Tracker</h1>
        <div className="expense-home-button">
          <ExpenseButton title={"Add Expense"} onButtonClick={addExpense}/>
          <ExpenseButton title={"Expense List"} onButtonClick={expenseList}/>
        </div>
        <p>
          Track and manage your expense effectively. Use the navigation links to
          add new expenses or view your expense history.
        </p>
      </div>
    </div>
  );
};

export default Home;