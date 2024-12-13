import './ExpenseButton.css'
const ExpenseButton = ({title,onButtonClick}) => {
  return (
    <button onClick={onButtonClick}>{title}</button>
  )
}

export default ExpenseButton
