var React = require('react')
var DayItem = require('./DayItem')
var convertTemp = require('../utils/helpers').convertTemp

class Detail extends React.Component {
  render () {
    var props = this.props.location.state
    return (
      <div>
        <DayItem day={props} />
        <div className='description-container'>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>Min Temperature: {convertTemp(props.temp.min)} degrees</p>
          <p>Max Temperature: {convertTemp(props.temp.max)} degrees</p>
          <p>Humidity: {props.humidity}</p>
        </div>
      </div>
    )
  }
}

module.exports = Detail
