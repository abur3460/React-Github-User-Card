import React, { Component } from 'react';
import styled from 'styled-components';

const UserImg = styled.img`
    max-width: 200px;
`

class CardHeader extends Component {
    render() {
        return (
            <section className='card-header'>
                <UserImg src={this.props.image} alt='User Card' />
            </section>
        );
    }
}

export default CardHeader;