import React from 'react';

class App extends React.component {
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App