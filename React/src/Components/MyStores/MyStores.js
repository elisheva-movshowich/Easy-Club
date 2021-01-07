import React, { Component } from 'react';
import Store from './MyStore';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from 'react-redux';
import "./Store.css";
import {getAllCards} from "../../Store/actions/EnterpriseAction"
import "../Public.css"
import "./Store.css"
class MyStores extends Component {
    state = {
        stores: null,
    }
    componentDidMount() {
        this.props.selectAllCards();
    }
    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <div className="stores">
            <h1>| Our Enterprises |</h1>
                <Carousel
                    responsive={responsive}
                    ssr={true} 
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={300}
                    containerClass="carousel-container"
                    dotListClass="cusom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {this.props.allCards !== null ?
                        this.props.allCards.map((x, i) => {
                            return <Store url={x.Url} name={x.Name} src={x.Img} key={i}></Store>
                        }) : "No Results"
                    }
                </Carousel></div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allCards: state.enterprise.allCards,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectAllCards: () => dispatch(getAllCards()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyStores);

