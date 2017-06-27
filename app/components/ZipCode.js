var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')

class ZipCode extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zipcode: ''
    }

    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this)
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }
  handleSubmitZipcode () {
    // api.getCurrentWeather(this.state.zipcode)
    //   .then(function (res) {
    //     console.log(res)
    //   })
    this.props.onSubmitZipcode(this.state.zipcode)

    this.setState(function () {
      return {
        zipcode: ''
      }
    })
  }
  handleEnter (e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleSubmitZipcode()
    }
  }
  handleUpdateZipcode (e) {
    var zip = e.target.value
    this.setState(function () {
      return {
        zipcode: zip
      }
    })
  }
  render () {
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='St. George, Utah'
          type='text'
          onKeyDown={this.handleEnter}
          value={this.state.zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
  direction: PropTypes.string
}

module.exports = ZipCode
