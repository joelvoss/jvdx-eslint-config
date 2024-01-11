class MyComponent extends React.Component {
  // old lifecycles (since React 16.9)
  componentWillMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}

  render() {
    return <div />;
  }
}

React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

//Any factories under React.DOM
React.DOM.div();

import { PropTypes } from 'react';

// React 18 deprecations
import { render } from 'react-dom';
ReactDOM.render(<div></div>, container);

import { hydrate } from 'react-dom';
ReactDOM.hydrate(<div></div>, container);

import {unmountComponentAtNode} from 'react-dom';
ReactDOM.unmountComponentAtNode(container);

import { renderToNodeStream } from 'react-dom/server';
ReactDOMServer.renderToNodeStream(element);