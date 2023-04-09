
import {BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs'
import ReactSwitch from 'react-switch';

const Header = (props) => {
  return (
    
<div className="header" id={props.theme}>
    <div className="logo">
        <h1>Currencyconvertor</h1>
    </div>
    <div className="dark-mode">
        <ReactSwitch
        height={40}
        width={70}
        checkedIcon={<div className='icon'> <BsMoonStarsFill size={20} /> </div>}
        uncheckedIcon={<div className='icon'> <BsFillSunFill size={22} /> </div>}
        onChange={props.ThemeChange}
        handleDiameter={20}
        checked={props.theme ==='light-mode'}
        onColor='#282A3A'
        offColor='#2D4263'/>    
  </div>
</div>

  )
}

export default Header