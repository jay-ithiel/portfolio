import React from 'react';
import { withRouter } from 'react-router';
import WorkItem from './work_item';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.router.push('/');
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".work-container").addClass("hide");
  }

  render() {
    let projects = this.props.projects;
    let workLis = Object.keys(projects).map(k => {
      return (
        <WorkItem key={k} project={projects[k]}/>
      );
    });

    return (
      <div className='work-container modal hide'>
        <div
          className="close"
          onClick={this.handleClose}>
          x
        </div>

        <h3 className='modal-header'>WORK</h3>

        <ul className='work-items'>
          { workLis }
        </ul>
      </div>
    );
  }
}

export default withRouter(Work);
