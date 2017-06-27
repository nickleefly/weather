var React = require('react')
var utils = require('../utils/helpers')
var getDate = utils.getDate
var convertTemp = utils.convertTemp

function DayItem (props) {
  var date = getDate(props.day.dt)
  var icon = props.day.weather[0].icon
  var min = convertTemp(props.day.temp.min)
  var max = convertTemp(props.day.temp.max)

  return (
    <div onClick={props.onClick} className='dayContainer'>
      <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
      <h2 className='subheader'>Min {min}</h2>
      <h2 className='subheader'>Max {max}</h2>
    </div>
  )
}

module.exports = DayItem
