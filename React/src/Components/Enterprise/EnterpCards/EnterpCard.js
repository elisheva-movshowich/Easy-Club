import React from 'react'
import { Button, Item, Icon } from 'semantic-ui-react';
import "semantic-ui-css"
const EnterpCard = (props) => {
    return (
        <Item className="card-item">
            <Item.Image className="image-item" size="small" style={{ backgroundImage: `url(${props.img})` }}></Item.Image>
            <Item.Content verticalAlign="middle" className="content-item">
                <Item.Header className="header-item">{props.content === "Primium card" ?
                    <Icon circular inverted color="teal" name="star"></Icon> : ""}{" " + props.content}</Item.Header>
                <Button className="cardbutton" onClick={e => props.onClick(e, props.index)}>Watch And Update
            <Icon name='right chevron' />
                </Button>
            </Item.Content>
        </Item>
    )
}

export default EnterpCard
