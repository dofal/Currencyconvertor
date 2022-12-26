import PropTypes from "prop-types";
import Select from "react-select";
import getSymbolFromCurrency from 'currency-symbol-map';

const Input1 = (props) =>{

    function format(number){
        return number.toFixed(6)
    }

    

  return (
    <div className="input1" id={props.id}>
        <div className="currency_div">
            
                <Select 
                options={props.options}
                placeholder="Choose or search by typing"
                styles={props.customStyles}
                className="react-select"
                
                onChange={ev => props.onCurrencyChange(ev.value)}
                defaultValue={{ value: "EUR", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/eu.png" width="50" height="30"/> </div> <div className="select-text">EUR - Euro</div></div> }}
                isSearchable={true}
                isClearable={true}/>
         </div>
         <div className="amount_div">
            <input type="text" className="amount" value={props.amount} placeholder="1" onChange={ev => props.onAmountChange(ev.target.value)}/>
        </div>
        <div className="amount_tips">
        
            <button value={100} onClick={ev => props.onAmountChange(ev.target.value)}>100 {getSymbolFromCurrency(props.currency)} </button>
            <button value={200} onClick={ev => props.onAmountChange(ev.target.value)}>200 {getSymbolFromCurrency(props.currency)}</button>
            <button value={500} onClick={ev => props.onAmountChange(ev.target.value)}>500 {getSymbolFromCurrency(props.currency)} </button>
        </div>
        <div className="calculation">
            <h6>
                    1 {props.currency} is {format(props.rates[props.currency_2] / props.rates[props.currency])} {props.currency_2} 
            </h6>
        </div>
     </div>
  )
}

Input1.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default Input1
