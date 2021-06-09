import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy} from 'react-icons/fa'
import PropTypes from 'prop-types'

function Instructions(){
    return (
        <div className='instructions-container'>
            <h1 className='center-text header-lg'>
            INSTRUCTIONS
            </h1>
            <ol className='container-sm grid center-text comparison-instructions'>
                <li>
                    <h3 className="header-sm">Enter two Github users</h3>
                    <FaUserFriends className="bg-light" color="rgb(255,191,116)" size={140} />
                </li>
                <li>
                    <h3 className="header-sm">Compare</h3>
                    <FaFighterJet className="bg-light" color="#727272" size={140} />
                </li>
                <li>
                    <h3 className="header-sm">See comparison:</h3>
                    <FaTrophy className="bg-light" color="rgb(255,215,0)" size={140} />
                </li>


            </ol>
        </div>
    )
}

class PlayerInput extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)  
}
    handleSubmit(event) {
        event.preventDefault()   
        this.props.onSubmit(this.state.username)
}

    handleChange(event){
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
          
            <form className='column player' onSubmit={this.handleSubmit}>
                <label htmlFor="username" className="player-label">
                    {this.props.label} 
                </label>
                <div className="row player-inputs">
                    <input
                        type="text"
                        id="username"
                        className="input-light"
                        placeholder="github username"
                        autoComplete='off'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button 
                    className="btn dark-btn"
                    type="submit"
                    disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </div>

            </form>

        )
    }
}


PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default class Compare extends React.Component {
    constructor(props){
        super(props)

this.state = {
    playerOne: null,
    playerTwo: null,
    }

this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(id, player){
    this.setState({
        [id]: player
    })
}


    render(){

        const {playerOne, playerTwo} = this.state


        return (
            <React.Fragment>
                 <Instructions />   

                <div className="players-container">
                    <h1 className='center-text header-lg'>Users to compare</h1>
                
                <div className="row space-around">
                {playerOne === null && (
                    <PlayerInput    
                        label="User One"
                        onSubmit={(player) => this.handleSubmit('playerOne', player)}
                    />
                )}
                 {playerTwo === null && (
                    <PlayerInput    
                        label="User Two"
                        onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                    />
                )}
                </div>
                </div>

                 {/* <PlayerInput label="label" onSubmit={value => console.log('value!', value)}/> */}

            </React.Fragment>


        )
    }
}