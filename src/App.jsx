import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

class App extends React.PureComponent {
  render() {
    const { title } = this.props;
    return <div>{title}</div>;
  }
}

/* const App = ({ title }) => <div>{title}</div>; */

App.propTypes = propTypes;

export default App;
