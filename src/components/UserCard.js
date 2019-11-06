import React, { Component } from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = styled.div`
    background-color: grey;
    border: 7px solid darkgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`

class UserCard extends Component {
    render() {
        return (
            <Card>
                <CardHeader image={this.props.avatar_url} username={this.props.login} />
                <CardBody
                    followers={this.props.followers}
                    following={this.props.following}
                    name={this.props.name}
                />
            </Card>
        );
    }
}

export default UserCard;