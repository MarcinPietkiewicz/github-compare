import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular'
import Compare from './components/Compare'
import {ThemeProvider} from './contexts/theme'

class App extends React.Component{
    render(){
        return (
        <ThemeProvider value={}>
            <div className='container'>
                <Popular />
            </div>
        </ThemeProvider>
        )}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)