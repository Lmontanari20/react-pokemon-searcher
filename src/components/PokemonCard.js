import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super()
    this.state = {
      clicked: false,
      display: props.front
    }
  }

  onClick = () => {
    this.setState(previousState => {
      return {
        clicked: !previousState.clicked,
        display: previousState === true ? this.props.front : this.props.back
      }
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.onClick} src={this.state.display}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
