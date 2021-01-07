import React, { Component } from 'react'
import SkyLight from 'react-skylight'
import { Button, Table } from 'semantic-ui-react';
import "./PriceList.css"
class priceList extends Component {
  render() {
    return (
      <div className="wrap_pricelist">
        <Button onClick={() => this.untitled.show()} className="sidebutton">Price List</Button>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => this.untitled = ref}
          title="Price List"
          transitionDuration={500}
        >
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Number of users</Table.HeaderCell>
                <Table.HeaderCell>Monthly cost</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row className="price-table-row">
                <Table.Cell>0-250 club members</Table.Cell>
                <Table.Cell>22$</Table.Cell>
              </Table.Row>
              <Table.Row className="price-table-row">
                <Table.Cell>251-1500 club members</Table.Cell>
                <Table.Cell>75$</Table.Cell>
              </Table.Row>
              <Table.Row className="price-table-row">
                <Table.Cell>1501-4000 club members</Table.Cell>
                <Table.Cell>125$</Table.Cell>
              </Table.Row>
              <Table.Row className="price-table-row">
                <Table.Cell>4000-10,000 club members</Table.Cell>
                <Table.Cell>200$</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </SkyLight>
      </div>
    )
  }
}

export default priceList

