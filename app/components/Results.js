import * as React from 'react'
import { compare } from '../utils/api'

export default class Results extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        winner: null,
        loser: null,
        error: null,
        loading: true
      }
    }
    componentDidMount () {
      const { playerOne, playerTwo } = this.props
  
      compare([ playerOne, playerTwo ])
        .then((players) => {
          this.setState({
            winner: players[0],
            loser: players[1],
            error: null,
            loading: false
          })
        }).catch(({ message }) => {
          this.setState({
            error: message,
            loading: false
          })
        })
    }
    render() {
      const {winner, loser, error, loading} = this.state

      if (loading === true) {
        return <p>LOADING</p>
      }


      if (error){
        return (
          <p className="ceter-text error">{error}</p>
        )
      }

      return (
        <div className="grid space-around container-sm">
         <div>
           
         </div>
          <div>

          </div>

        </div>
      )
    }
  }