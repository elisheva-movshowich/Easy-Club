import React from 'react'
import "./About.css"
import { Image, Container, Icon } from "semantic-ui-react";
const about = () => {
  return (
    <div>
      <h1>| About |  </h1>
      <Container text>
        <Image
          floated='right'
          size='medium'
          style={{ margin: '2em -8em 2em 2em' }}
        ><Icon circular inverted color='black' name="wifi" size="massive" style={{ boxShadow: " 5px 10px 18px #888888" }}></Icon></Image>
          Our EasyClub site is an amazing virtual club cards management site.
          The site will allow enterprises to purchase its services to manage the enterprise's club card area.
            The site will allow customers to check their club cards data such as points,sales and more at all enterprises connected to the site.
          Beyond management and concentration of information
          The site will be able to give benefits to the customer according to the customer rating on the site.
          Just did it all conveniently and easily from your computer at the touch of a button.
      </Container >
      <h1 id="about_enterprise">| Why it's worth my enterprise |</h1>
      <Container text style={{ fontSize: '20px' }}>
        <Image
          floated='left'
          size='medium'
          style={{ margin: '2em 2em 2em -4em' }}
        ><Icon circular inverted color='teal' name="signal" size="massive" style={{ boxShadow: " 5px 10px 18px #888888" }}></Icon></Image>
      Customer Watch When a customer knows that all the details about
      the cards are accessible to him at all times and he is aware of the expressions
      and discounts it will cause him to purchase a ticket
      Second thing the app gives a convenient interface to the manager
      who can manage the enterprise's club cards Including the promotions of each card
      and thus increase profits and become market leaders
      </Container>
      <h1 id="about_user" style={{ color: '#00b5ad', textAlign: "center", fontSize: '20px' }}>| Why it's worth me |</h1>
      <Container text style={{ fontSize: '20px' }}>
        <Image
          floated='right'
          size='medium'
          style={{ margin: '2em -8em 2em 2em' }}
        ><Icon circular inverted color='black' name="credit card outline" size="massive" style={{ boxShadow: " 5px 10px 18px #888888" }}></Icon></Image>
You will come out profitable and big.
All your club card data is centralized on one site, and goes with you everywhere,
You can watch them easily and conveniently at any time and place, compare discounts
in different enterprises, redeem earned points and in short be a club member but really.
In addition, you can purchase new cards through the website and
 realize benefits in the various enterprises.
So go ahead and enjoy EasyClub website.
      </Container>
    </div>
  )
}
export default about


