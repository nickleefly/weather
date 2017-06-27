var React = require('react')
var ZipCode = require('./ZipCode')

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='navbar'>
          <h1>Clever Title</h1>
          <ZipCode
            direction='row'
          />
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <ZipCode
            direction='column'
          />
        </div>
      </div>
    )
  }
}

module.exports = App
