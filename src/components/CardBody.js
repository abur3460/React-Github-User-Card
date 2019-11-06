import React, { Component } from 'react';

class CardBody extends Component {
    render() {
        return (
            <section className='card-body'>
                <h4>{this.props.name}</h4>
                <h4>Followers: {this.props.followers}</h4>
                <h4>Following: {this.props.following}</h4>
                <a href={`https://github.com/abur3460`}>GitHub</a>
            </section>
        );
    }
}

export default CardBody;