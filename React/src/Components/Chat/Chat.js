import React, { Component } from 'react'
import { Widget, addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import  '../Chat/Chat.css'
class Chat extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to Easy-Club chat!");
    }
    handleNewUserMessage = (newMessage) => {
        // console.log(`New message incomig! ${newMessage}`);
        addResponseMessage("response");
        //ba
    }
    render() {
        return (
            <Widget handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar='/Images/logo.png'
                title="My new awesome title"
                subtitle="And my cool subtitle">
            </Widget>
        )
    }
}

export default Chat
