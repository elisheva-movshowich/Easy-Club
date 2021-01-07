import React, { Component} from "react";
import { Button, Menu,Sidebar} from "semantic-ui-react";
class MySidebar extends Component {
  
    state = {
        visible: false,
        navlinks : [{ value: "Home", path: "" },
        { value: "About", path: "about" },
        { value: "Why it's worth my enterprise", path: "about_enterprise" },
        { value: "Why it's worth me", path: "about_user" },
        { value: "Our Enterprises", path: "stores" },
        { value: "Contact us", path: "contact" }]
    };
    handleHideClick = () => this.setState({ visible: false });
    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button id="sidebarout" onClick={this.handleShowClick} style={{ boxShadow: " 5px 10px 18px #888888"}}>|||</Button>
                <Sidebar.Pushable style={{ transform: "none" }}>
                    <Sidebar style={{ position: "fixed", backgroundColor: "#191a19", top: "0px", boxShadow: " 5px 10px 18px #888888",fontSize:"17px" }}
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width="wide" >
                        <Button id="sidebarin" onClick={this.handleHideClick}>X</Button>
                        {this.state.navlinks.map((x, i) => {
                            return <Menu.Item key={i} style={{ padding: "3vh" }} as='a' href={"#" + x.path}>{x.value}
                            </Menu.Item>
                        })}
                    </Sidebar>
                </Sidebar.Pushable>
            </div>

        );
    }
}
export default MySidebar;
