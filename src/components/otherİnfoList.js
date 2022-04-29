import React from "react";
import { connect } from 'react-redux'
import { fetchWeather, fetchUsdExchange, fetchEurExchange, fetchGoldExchange } from '../actions'

var turkishLira;
fetch('https://v6.exchangerate-api.com/v6/ed30cde4d0da8fbcfbb47f5f/pair/USD/TRY')
  .then(res => res.json())
  .then(data => turkishLira = data.conversion_rate)
  .then(() => console.log(turkishLira.conversion_rate))


class OtherİnfoList extends React.Component {
    async componentDidMount() {
        this.props.fetchWeather();
        this.props.fetchUsdExchange();
        this.props.fetchEurExchange();
        this.props.fetchGoldExchange();
    }

    renderList() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3 col-md-3 col-md-push-3  text-center ">
                        {this.props.exchangeUSD.map((value2) => (
                            <a className=" text-dark text-center"><img src="https://w7.pngwing.com/pngs/618/892/png-transparent-the-sims-4-logo-computer-icons-physical-fitness-the-sims-3-stuff-packs-usd-physical-fitness-text-trademark.png" height={30} width={30} alt="usd logo" />{" USD/TRY: " + value2.conversion_rate.toFixed(2)}</a>
                        ))}
                    </div>
                    <div className="col-xs-3 col-md-3 text-center">
                        {this.props.exchangeEUR.map((value3) => (
                           <a className=" text-dark  text-center "><img src="https://iconape.com/wp-content/png_logo_vector/eur.png" height={30} width={30} alt="eur logo" />{" EUR/TRY: " + value3.conversion_rate.toFixed(2)}</a>
                        ))}    
                    </div>
          {/*           <div className="col-xs-3 col-md-3  text-center">
                        {this.props.exchangeGold.map((value4,i) => (
                            <div key={i}>
                           <a className=" text-dark  text-center "><img src="https://toppng.com/uploads/preview/gold-icon-png-11552723744f0vj8surrx.png" height={35} width={35} alt="gold logo"></img>{"Gram Altın: " + (value4.rates.USD / 31.1034768 * turkishLira ).toFixed(0)}</a>
                        </div>
                        ))}    
                    </div> */}
                    <div className="col-xs-3 col-md-3  text-center">
                        {this.props.weather.map((value1) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a className="text-dark  text-center">{value1.location.name + " " + value1.current.temp_c + "°"}<img src={value1.current.condition.icon} height={35} width={35} alt="weather logo" /></a>
                        ))}    
                    </div>
                </div>
            </div>
        )
    }

    render() {
        
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { weather: state.weather, exchangeUSD: state.exchangeUSD, exchangeEUR : state.exchangeEUR, exchangeGold : state.exchangeGold }
}

export default connect(mapStateToProps, { fetchWeather, fetchUsdExchange, fetchEurExchange, fetchGoldExchange })(OtherİnfoList);
