import React, { Component } from 'react';

class Header extends Component {
    render(){
        const layout = {
            width: 'auto',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15
        };

        return (
            <div>
                <h6>Hello there</h6>
            </div>
        );
    }
}

export default Header;