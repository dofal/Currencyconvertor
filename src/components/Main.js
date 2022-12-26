import { HiOutlineSwitchHorizontal } from "react-icons/hi"
import Input1 from "./Input1"
import { useEffect, useState } from "react"
import Input2 from "./Input2";
import axios from "axios";
const Main = (props) => {

    const first_part = [
        { value: "AED", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/ae.png" width="50" height="30"/> </div> <div className="select-text">AED - United Arab Emirates Dirham</div></div> },
            { value: "AFN", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/af.png" width="50" height="30"/> </div> <div className="select-text">AFN - Afghan Afghani</div></div> },
            { value: "ALL", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/al.png" width="50" height="30"/> </div> <div className="select-text">ALL - Albanian Lek</div></div> },
            { value: "AMD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/am.png" width="50" height="30"/> </div> <div className="select-text">AMD - Armenian Drum</div></div> },
            { value: "ANG", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/nl.png" width="50" height="30"/> </div> <div className="select-text">ANG - Netherlands Antillean Guilder</div></div> },
            { value: "AOA", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/ao.png" width="50" height="30"/> </div> <div className="select-text">AOA - Angolan Kwanza</div></div> },
            { value: "ARS", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/ar.png" width="50" height="30"/> </div> <div className="select-text">ARS - Argentine Peso</div></div> },
            { value: "AWG", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/aw.png" width="50" height="30"/> </div> <div className="select-text">AWG - Aruban Florin</div></div> },
            { value: "AZN", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/nl.png" width="50" height="30"/> </div> <div className="select-text">AZN - Azerbaijani Manatr</div></div> },
            { value: "BAM", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/ba.png" width="50" height="30"/> </div> <div className="select-text">BAM - Bosnia and Herzegovina convertible mark</div></div> },
            { value: "BBD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bb.png" width="50" height="30"/> </div> <div className="select-text">BBD - Barbadian Dollar</div></div> },
            { value: "BDT", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bd.png" width="50" height="30"/> </div> <div className="select-text">BDT - Bangladeshi Taka</div></div> },
            { value: "BGN", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bg.png" width="50" height="30"/> </div> <div className="select-text">BGN - Bulgarian Lev</div></div> },
            { value: "BHD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bh.png" width="50" height="30"/> </div> <div className="select-text">BHD - Bahraini Dinar</div></div> },
            { value: "BIF", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bi.png" width="50" height="30"/> </div> <div className="select-text">BIF - Burundian Franc</div></div> },
            { value: "BMD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bm.png" width="50" height="30"/> </div> <div className="select-text">BMD - Bermudan Dollar</div></div> },
            { value: "BND", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bn.png" width="50" height="30"/> </div> <div className="select-text">BND - Brunei Dollar</div></div> },
            { value: "BOB", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bo.png" width="50" height="30"/> </div> <div className="select-text">BOB - Bolivian Boliviano</div></div> },
            { value: "BRL", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/br.png" width="50" height="30"/> </div> <div className="select-text">BRL - Brazilian Real</div></div> },
            { value: "BSD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/bs.png" width="50" height="30"/> </div> <div className="select-text">BSD - Bahamian Dollar</div></div> },
    ]
    const rates_list = [
            { value: "BTN", label: "BTN - Bhutanese Ngultrum" },
            { value: "BWP", label: "BWP - Botswanan Pula" },
            { value: "BYN", label: "BYN - Belarusian Ruble" },
            { value: "BZD", label: "BZD - Belize Dollar" },
            { value: "CDF", label: "CDF - Congolese Franc" },
            { value: "CLP", label: "CLP - Chilean Peso" },
            { value: "CNY", label: "CNY - Chinese Yuan" },
            { value: "COP", label: "COP - Colombian Peso" },
            { value: "CRC", label: "CRC - Costa Rican Colón" },
            { value: "CUP", label: "CUP - Cuban Peso" },
            { value: "CVE", label: "CVE - Cape Verdean Escudo" },
            { value: "DJF", label: "DJF - Djiboutian Franc" },
            { value: "DKK", label: "DKK - Danish Krone" },
            { value: "DOP", label: "DOP - Dominican Peso" },
            { value: "DZD", label: "DZD - Algerian Dinar" },
            { value: "EGP", label: "EGP - Egyptian Pound" },
            { value: "ERN", label: "ERN - Eritrean Nakfa" },
            { value: "ETB", label: "ETB - Ethiopian Birr" },
            { value: "FJD", label: "FJD - Fijian Dollar" },
            { value: "FKP", label: "FKP - Falkland Islands Pound" },
            { value: "GEL", label: "GEL - Georgian Lari" },
            { value: "GGP", label: "GGP - Guernsey Pound" },
            { value: "GHS", label: "GHS - Ghanaian Cedi" },
            { value: "GIP", label: "GIP - Gibraltar Pound" },
            { value: "GMD", label: "GMD - Gambian Dalasi" },
            { value: "GNF", label: "GNF - Guinean Franc" },
            { value: "GTQ", label: "GTQ - Guatemalan Quetzal" },
            { value: "GYD", label: "GYD - Guyanaese Dollar" },
            { value: "HKD", label: "HKD - Hong Kong Dollar" },
            { value: "HNL", label: "HNL - Honduran Lempira" },
            { value: "HRK", label: "HRK - Croatian Kuna" },
            { value: "HTG", label: "HTG - Haitian Gourde" },
            { value: "HUF", label: "HUF - Hungarian Forint" },
            { value: "IDR", label: "IDR - Indonesian Rupiah" },
            { value: "ILS", label: "ILS - Israeli New Sheqel" },
            { value: "IMP", label: "IMP - Manx pound" },
            { value: "INR", label: "INR - Indian Rupee" },
            { value: "IQD", label: "IQD - Iraqi Dinar" },
            { value: "IRR", label: "IRR - Iranian Rial" },
            { value: "ISK", label: "ISK - Icelandic Króna" },
            { value: "JEP", label: "JEP - Jersey Pound" },
            { value: "JMD", label: "JMD - Jamaican Dollar" },
            { value: "JOD", label: "JOD - Jordanian Dinar" },
            { value: "KES", label: "KES - Kenyan Shilling" },
            { value: "KGS", label: "KGS - Kyrgystani Som" },
            { value: "KHR", label: "KHR - Cambodian Riel" },
            { value: "KMF", label: "KMF - Comorian Franc" },
            { value: "KPW", label: "KPW - North Korean Won" },
            { value: "KRW", label: "KRW - South Korean Won" },
            { value: "KWD", label: "KWD - Kuwaiti Dinar" },
            { value: "KYD", label: "KYD - Cayman Islands Dollar" },
            { value: "KZT", label: "KZT - Kazakhstani Tenge" },
            { value: "LAK", label: "LAK - Laotian Kip" },
            { value: "LBP", label: "LBP - Lebanese Pound" },
            { value: "LKR", label: "LKR - Sri Lankan Rupee" },
            { value: "LRD", label: "LRD - Liberian Dollar" },
            { value: "LSL", label: "LSL - Lesotho Loti" },
            { value: "LTL", label: "LTL - Lithuanian Litas" },
            { value: "LVL", label: "LVL - Latvian Lats" },
            { value: "LYD", label: "LYD - Libyan Dinar" },
            { value: "MAD", label: "MAD - Moroccan Dirham" },
            { value: "MDL", label: "MDL - Moldovan Leu" },
            { value: "MGA", label: "MGA - Malagasy Ariary" },
            { value: "MKD", label: "MKD - Macedonian Denar" },
            { value: "MMK", label: "MMK - Myanma Kyat" },
            { value: "MNT", label: "MNT - Mongolian Tugrik" },
            { value: "MOP", label: "MOP - Macanese Pataca" },
            { value: "MRO", label: "MRO - Mauritanian Ouguiya" },
            { value: "MUR", label: "MUR - Mauritian Rupee" },
            { value: "MVR", label: "MVR - Maldivian Rufiyaa" },
            { value: "MWK", label: "MWK - Malawian Kwacha" },
            { value: "MXN", label: "MXN - Mexican Peso" },
            { value: "MYR", label: "MYR - Malaysian Ringgit" },
            { value: "MZN", label: "MZN - Mozambican Metical" },
            { value: "NAD", label: "NAD - Namibian Dollar" },
            { value: "NGN", label: "NGN - Nigerian Naira" },
            { value: "NIO", label: "NIO - Nicaraguan Córdoba" },
            { value: "NOK", label: "NOK - Norwegian Krone" },
            { value: "NPR", label: "NPR - Nepalese Rupee" },
            { value: "NZD", label: "NZD - New Zealand Dollar" },
            { value: "OMR", label: "OMR - Omani Rial" },
            { value: "PAB", label: "PAB - Panamanian Balboa" },
            { value: "PEN", label: "PEN - Peruvian Nuevo Sol" },
            { value: "PGK", label: "PGK - Papua New Guinean Kina" },
            { value: "PHP", label: "PHP - Philippine Peso" },
            { value: "PKR", label: "PKR - Pakistani Rupee" },
            { value: "PLN", label: "PLN - Polish Zloty" },
            { value: "PYG", label: "PYG - Paraguayan Guarani" },
            { value: "QAR", label: "QAR - Qatari Rial" },
            { value: "RON", label: "RON - Romanian Leu" },
            { value: "RSD", label: "RSD - Serbian Dinar" },
            { value: "RUB", label: "RUB - Russian Ruble" },
            { value: "RWF", label: "RWF - Rwandan Franc" },
            { value: "SAR", label: "SAR - Saudi Riyal" },
            { value: "SBD", label: "SBD - Solomon Islands Dollar" },
            { value: "SCR", label: "SCR - Seychellois Rupee" },
            { value: "SDG", label: "SDG - Sudanese Pound" },
            { value: "SGD", label: "SGD - Singapore Dollar" },
            { value: "SHP", label: "SHP - Saint Helena Pound" },
            { value: "SLL", label: "SLL - Sierra Leonean Leone" },
            { value: "SOS", label: "SOS - Somali Shilling" },
            { value: "SRD", label: "SRD - Surinamese Dollar" },
            { value: "STD", label: "STD - São Tomé and Príncipe Dobra" },
            { value: "SVC", label: "SVC - Salvadoran Colón" },
            { value: "SYP", label: "SYP - Syrian Pound" },
            { value: "SZL", label: "SZL - Swazi Lilangeni" },
            { value: "THB", label: "THB - Thai Baht" },
            { value: "TJS", label: "TJS - Tajikistani Somoni" },
            { value: "TMT", label: "TMT - Turkmenistani Manat" },
            { value: "TND", label: "TND - Tunisian Dinar" },
            { value: "TOP", label: "TOP - Tongan Paʻanga" },
            { value: "TRY", label: "TRY - Turkish Lira" },
            { value: "TTD", label: "TTD - Trinidad and Tobago Dollar" },
            { value: "TWD", label: "TWD - New Taiwan Dollar" },
            { value: "TZS", label: "TZS - Tanzanian Shilling" },
            { value: "UAH", label: "UAH - Ukrainian Hryvnia" },
            { value: "UGX", label: "UGX - Ugandan Shilling" },
            { value: "UYU", label: "UYU - Uruguayan Peso" },
            { value: "UZS", label: "UZS - Uzbekistan Som" },
            { value: "VEF", label: "VEF - Venezuelan Bolívar Fuerte" },
            { value: "VND", label: "VND - Vietnamese Dong" },
            { value: "VUV", label: "VUV - Vanuatu Vatu" },
            { value: "WST", label: "WST - Samoan Tala" },
            { value: "YER", label: "YER - Yemeni Rial" },
            { value: "ZAR", label: "ZAR - South African Rand" },
            { value: "ZMW", label: "ZMW - Zambian Kwacha" },
            { value: "ZWL", label: "ZWL - Zimbabwean Dollar" },
    ]

    const top_currencies = [
        { value: "USD", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/us.png" width="50" height="30"/></div> <div className="select-text">USD - United States Dollar</div></div> },
        { value: "EUR", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/eu.png" width="50" height="30"/> </div> <div className="select-text">EUR - Euro</div></div> },
        { value: "CZK", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/cz.png" width="50" height="30"/> </div> <div className="select-text">CZK - Czech Republic Koruna</div></div> },
        { value: "CNY", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/cn.png" width="50" height="30"/> </div> <div className="select-text">CNY - Chinese Yuan</div></div> },
        { value: "JPY", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/jp.png" width="50" height="30"/> </div> <div className="select-text">JPY - Japanese Yen</div></div> },
        { value: "GBP", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/gb.png" width="50" height="30"/> </div> <div className="select-text">GBP - British Pound Sterling</div></div> },
        { value: "SEK", label: <div className="select"> <div className="select-img"><img src="https://flagcdn.com/w160/se.png" width="50" height="30"/> </div> <div className="select-text">SEK - Swedish Krona</div></div> }, 
    ]

    const map_with_logos = rates_list.map((item) => ({
        value: item.value,
        label: (
          <div className="select">
            <div className="select-img">
              <img src={`https://flagcdn.com/w160/${item.value.slice(0, item.value.length - 1).toLowerCase()}.png`} width="50" height="30" />
            </div>
            <div className="select-text">{item.label}</div>
          </div>
        ),
      }));
    const groupedOptions = [
        {
          label: "Popular",
          options: top_currencies
        },
        {
          label: "All",
          options: first_part.concat(map_with_logos)
        }
      ];

    const customStyles = {
        control: (base, state) => ({
          ...base,
          height: 65,
          textColor: "white",
          // match with the menu
          borderRadius:"5px 5px",
          border:"none",
          // Overwrittes the different states of border
          boxShadow: "rgba(100, 100, 111, 0.1)1px 1px 8px 5px",
          // Removes weird border around container
          "&:hover": {
            // Overwrittes the different states of border
            
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };

    const[amount1, SetAmount1] = useState(1);
    const[amount2, SetAmount2] = useState();
    const[currency1, SetCurrency1] = useState('EUR');
    const[currency2, SetCurrency2] = useState('CZK');
    const [rates, SetRates] = useState([]);
    const[symbols, SetSymbols] = useState([])
    const [text, SetText] = useState("Let's convert something!");
    const [view, Setview] = useState('');


    useEffect (() => {
        axios.get('https://api.exchangerate.host/latest/')
        .then(response =>{
          SetRates(response.data.rates);
        })
    }, []);

    function format(number){
        return number.toFixed(4)
    }
    
    const options = (
        Object.keys(symbols).map((currency => (  
            { value: currency, label:currency } 
        )))
    )


    function handleAmount1Change(amount1){
        SetAmount1(amount1);
        SetAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        SetText("Change one side...");
    }
    function handleCurrency1Change(currency1){
        SetCurrency1(currency1)
        SetAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    }
    function handleAmount2Change(amount2){
        SetAmount2(amount2);
        SetAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    }
    function handleCurrency2Change(currency2){
        SetCurrency2(currency2)
        SetAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    }
    const Switch = () => {
        Setview((curr) => (curr === 'right' ? '' : 'right'));
    }

    return (
        <div className="main-background">
            <div className="main-workspace">

                <Input1 id={view} customStyles={customStyles} options={groupedOptions} onAmountChange={handleAmount1Change} rates={rates} onCurrencyChange={handleCurrency1Change} currencies={rates} amount={amount1} currency={currency1} amount_2={amount2} currency_2={currency2} />
                <div className="switchicon"> <HiOutlineSwitchHorizontal className="switch_icon" onClick={Switch} size={35} /> </div>
                <Input2 id={view} customStyles={customStyles} options={groupedOptions} onAmountChange={handleAmount2Change} rates={rates} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2} amount_2={amount1} currency_2={currency1} />
            </div>
            
        </div>
    )
}

export default Main