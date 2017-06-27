var React = require('react')
var api = require('../utils/api')
var queryString = require('query-string')
var utils = require('../utils/helpers')
var getDate = utils.getDate

function DayItem (props) {
  var date = getDate(props.day.dt)
  var icon = props.day.weather[0].icon
  return (
    <div className='dayContainer'>
      <img className='weather' src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

class Forecast extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      forecastData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this)
  }
  componentDidMount () {
    console.log('this.props.location.search is ', this.props.location.search)
    var city = queryString.parse(this.props.location.search).city
    this.makeRequest(city)
  }
  componentWillReceiveProps (nextProps) {
    console.log('nextProps is ', nextProps)
    var city = queryString.parse(nextProps.location.search).city
    this.makeRequest(city)
  }
  makeRequest (city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getForecast(city)
      .then(function (res) {
        console.log(res)
        this.setState(function () {
          return {
            loading: false,
            forecastData: res
          }
        })
      }.bind(this))
  }
  render () {
    console.log('this.state.forecastData is ', this.state.forecastData)
    return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
        <h1 className='forecast-header'>{this.city}</h1>
        <div className='forecast-container'>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem key={listItem.dt} day={listItem} />
          })}
        </div>
      </div>
  }
}

module.exports = Forecast
