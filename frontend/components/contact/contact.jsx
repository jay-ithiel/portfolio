import React from 'react';
import { withRouter } from 'react-router';
import MessageFormContainer from '../messages/message_form_container';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.router.push('/');
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".contact-container").addClass("hide");
  }

  render() {
    return (
      <div className='contact-container modal hide'>
        <div
          className="close"
          onClick={this.handleClose}>
          x
        </div>

        <h3 className='modal-header'>Contact</h3>

        <MessageFormContainer />
      </div>
    );
  }
}

export default withRouter(Contact);
