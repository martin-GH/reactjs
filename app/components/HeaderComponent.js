import React from 'react';

class HeaderComponent extends React.Component {
  render() {
    return (
      <h3>{this.props.question.title}</h3>
    );
  }
}

export default HeaderComponent;