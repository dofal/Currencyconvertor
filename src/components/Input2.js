import PropTypes from "prop-types";
import Select from "react-select";
import getSymbolFromCurrency from 'currency-symbol-map';

const Input2 =(props) =>{

    function format(number){
        return number.toFixed(6)
    }
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
            
        }).format(value);
    
    return(
        <div className="input2" id={props.id}>
                <div className="currency_div">
                    <Select 
                    options={props.options}
                    placeholder="Choose or search by typing"
                    styles={props.customStyles}
                    className="react-select"
                    onChange={ev => props.onCurrencyChange(ev.value)}
                    defaultValue={{ value: "CZK", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/cz.png" width="50" height="30"/> </div> <div className="select-text">CZK - Czech Republic Koruna</div></div> }}
                    isSearchable={true}
                    isLoading={props.currency.length === 0}
                    isClearable={true}/>
                </div>
                <div className="amount_div">
                    <input type="text" className="amount" value={numberFormat(props.amount)} placeholder="hello" onChange={ev => props.onAmountChange(ev.target.value.replaceAll(",", ""))}/>
                    <span className="currency_symbol">{getSymbolFromCurrency(props.currency)}</span>
                </div>
                <div className="amount_tips">
                    <button value={100} onClick={ev => props.onAmountChange(ev.target.value)}>100 {getSymbolFromCurrency(props.currency)} </button>
                    <button value={200} onClick={ev => props.onAmountChange(ev.target.value)}>200 {getSymbolFromCurrency(props.currency)}</button>
                    <button value={500} onClick={ev => props.onAmountChange(ev.target.value)}>500 {getSymbolFromCurrency(props.currency)} </button>
                </div>
                <div className="calculation">
                    <h6>1 {props.currency} is {format(props.rates[props.currency_2] / props.rates[props.currency])} {props.currency_2}</h6>
                </div>
        </div>
    )
}
Input2.propTypes = {
    format: PropTypes.func,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}
export default Input2