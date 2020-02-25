import React from 'react';
import './App.css';


function Items({itemKey, detail }) {
  return (<tr>
    <td>{itemKey}</td>
    <td>{detail}</td>
  </tr>);
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: '',
      currency: 'EGP',
      amount: 0,
      reference: 'ORD-5023-4E89',
      metadata: JSON.stringify({
        "udf1": "TEST123",
        "coupon_code": "NY2018",
        "partner_id": 123989
      }),
      authorization: 'Secret Key',
      metaDataError: ''
    }
  }

  handelEvent(e) {
    const { detail } = e;
    this.setState({userData: detail})
  }

  metaDataErrorEvent(e) {
    const { detail } = e;
    const { message } = detail;
    this.setState({metaDataError: message})
  }

  createTable(detail) {
    return Object.entries(detail).map((key, index) => {
      return <Items key={index} itemKey={key[0]} detail={JSON.stringify(detail[key[0]])} />;
    });
  }

  componentDidMount() {
    window.addEventListener('onUserData', this.handelEvent.bind(this));
    window.addEventListener('metaDataError', this.metaDataErrorEvent.bind(this));
  }

  render() {
    return (
      <div>
        <form id="payment-form" method="POST" action="https://merchant.com/charge-card">
          <div className="one-liner">
            <div className="card-frame">
            </div>
            <button id="pay-button" disabled>
              PAY {this.state.amount} {this.state.currency}
          </button>
          </div>
          <hr />
          <div>
              
                <label>Amount: </label>
                <input className="input-group-text" id="amount" type="number" onChange={e => this.setState({ amount: e.target.value })} value={this.state.amount}></input>
              
                <br />
                <label>Currency: </label>
            {/* <input className="input-group-text" id="currency" type="text" onChange={e => this.setState({currency: e.target.value})} value={this.state.currency}></input> */}
                {/* <div className="selectWrapper"> */}
                  <select className="custom-select" id="currency" name="" onChange={e => this.setState({currency: e.target.value})} value={this.state.currency}>
                    <option value="USD">United States Dollars</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">United Kingdom Pounds</option>
                    <option value="DZD">Algeria Dinars</option>
                    <option value="ARP">Argentina Pesos</option>
                    <option value="AUD">Australia Dollars</option>
                    <option value="ATS">Austria Schillings</option>
                    <option value="BSD">Bahamas Dollars</option>
                    <option value="BBD">Barbados Dollars</option>
                    <option value="BEF">Belgium Francs</option>
                    <option value="BMD">Bermuda Dollars</option>
                    <option value="BRR">Brazil Real</option>
                    <option value="BGL">Bulgaria Lev</option>
                    <option value="CAD">Canada Dollars</option>
                    <option value="CLP">Chile Pesos</option>
                    <option value="CNY">China Yuan Renmimbi</option>
                    <option value="CYP">Cyprus Pounds</option>
                    <option value="CSK">Czech Republic Koruna</option>
                    <option value="DKK">Denmark Kroner</option>
                    <option value="NLG">Dutch Guilders</option>
                    <option value="XCD">Eastern Caribbean Dollars</option>
                    <option value="EGP">Egypt Pounds</option>
                    <option value="FJD">Fiji Dollars</option>
                    <option value="FIM">Finland Markka</option>
                    <option value="FRF">France Francs</option>
                    <option value="DEM">Germany Deutsche Marks</option>
                    <option value="XAU">Gold Ounces</option>
                    <option value="GRD">Greece Drachmas</option>
                    <option value="HKD">Hong Kong Dollars</option>
                    <option value="HUF">Hungary Forint</option>
                    <option value="ISK">Iceland Krona</option>
                    <option value="INR">India Rupees</option>
                    <option value="IDR">Indonesia Rupiah</option>
                    <option value="IEP">Ireland Punt</option>
                    <option value="ILS">Israel New Shekels</option>
                    <option value="ITL">Italy Lira</option>
                    <option value="JMD">Jamaica Dollars</option>
                    <option value="JPY">Japan Yen</option>
                    <option value="JOD">Jordan Dinar</option>
                    <option value="KRW">Korea (South) Won</option>
                    <option value="LBP">Lebanon Pounds</option>
                    <option value="LUF">Luxembourg Francs</option>
                    <option value="MYR">Malaysia Ringgit</option>
                    <option value="MXP">Mexico Pesos</option>
                    <option value="NLG">Netherlands Guilders</option>
                    <option value="NZD">New Zealand Dollars</option>
                    <option value="NOK">Norway Kroner</option>
                    <option value="PKR">Pakistan Rupees</option>
                    <option value="XPD">Palladium Ounces</option>
                    <option value="PHP">Philippines Pesos</option>
                    <option value="XPT">Platinum Ounces</option>
                    <option value="PLZ">Poland Zloty</option>
                    <option value="PTE">Portugal Escudo</option>
                    <option value="ROL">Romania Leu</option>
                    <option value="RUR">Russia Rubles</option>
                    <option value="SAR">Saudi Arabia Riyal</option>
                    <option value="XAG">Silver Ounces</option>
                    <option value="SGD">Singapore Dollars</option>
                    <option value="SKK">Slovakia Koruna</option>
                    <option value="ZAR">South Africa Rand</option>
                    <option value="KRW">South Korea Won</option>
                    <option value="ESP">Spain Pesetas</option>
                    <option value="XDR">Special Drawing Right (IMF)</option>
                    <option value="SDD">Sudan Dinar</option>
                    <option value="SEK">Sweden Krona</option>
                    <option value="CHF">Switzerland Francs</option>
                    <option value="TWD">Taiwan Dollars</option>
                    <option value="THB">Thailand Baht</option>
                    <option value="TTD">Trinidad and Tobago Dollars</option>
                    <option value="TRL">Turkey Lira</option>
                    <option value="VEB">Venezuela Bolivar</option>
                    <option value="ZMK">Zambia Kwacha</option>
                    <option value="EUR">Euro</option>
                    <option value="XCD">Eastern Caribbean Dollars</option>
                    <option value="XDR">Special Drawing Right (IMF)</option>
                    <option value="XAG">Silver Ounces</option>
                    <option value="XAU">Gold Ounces</option>
                    <option value="XPD">Palladium Ounces</option>
                    <option value="XPT">Platinum Ounces</option>
                  </select>
              
                {/* </div> */}
                <br />
                <label>Reference: </label>
                <input className="input-group-text" id="reference" type="text" onChange={e => this.setState({ reference: e.target.value })} value={this.state.reference}></input>
              
              
              <label style={this.state.metaDataError ? {color: 'red'} : {}}>Metadata: </label>
                <input className="input-group-text" style={this.state.metaDataError ? { height: '50px', width: '500px', borderColor: 'red', important: 'true'} : { height: '50px', width: '500px' }} id="metadata" type="text" onChange={e => this.setState({ metadata: e.target.value })} value={this.state.metadata}></input>
            
            <p style={{ color: 'red' }}>{this.state.metaDataError}</p>
              
                <label>Authorization: </label>
                <input className="input-group-text" id="authorization" type="text" onChange={e => this.setState({ authorization: e.target.value })} value={this.state.authorization}></input>
            </div>
          <p className="success-payment-message"></p>
        </form>
        <p>User Data Will be bllow!</p>
        {this.state.userData ? <table className="table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.createTable(this.state.userData)}
          </tbody>
        </table> : ''}
      </div>
    )
  }
}

export default App;
