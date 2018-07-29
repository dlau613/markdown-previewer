import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import SplitPane from 'react-split-pane';
import Dimensions from 'react-dimensions';


import './App.css';
import rootReducer from './reducers';
import { updateInput } from './actions';
import EditorWindow from './components/editorWindow';

injectGlobal`
  html {
    overflow: hidden;
  },
  // body {
  //   height: 100%;
  //   width: 100%;
  // }
`;
const theme = {
  colors: {
      primary: '#16a085',
      secondary: 'white',
  },
  margins: {
      sm: '10px',
  },
  fontSize: {
      h1: '48px',
      h2: '36px',
      h3: '24px',
      h4: '18px',
      p: '12px'
  },
  transitionTime: '1s',
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:row;
`;

const store = createStore(rootReducer);
class Presentational extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateInput(e.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
          <SplitPane split='vertical' minSize={100} maxSize={this.props.containerWidth/2}>
            <EditorWindow onChange={this.handleChange} text={this.props.input} title='Editor' icon={{set:'fa',symbol:'twitter'}}/> 
            <EditorWindow preview text={this.props.input} title='Previewer' icon={{set:'fa',symbol:'twitter'}}/>
          </SplitPane>
      </ThemeProvider>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    input: state.input
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (input) => dispatch(updateInput(input))
  };
};
const Container = connect(mapStateToProps,mapDispatchToProps)(Dimensions()(Presentational));
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
};


const placeholder = 
`# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal`

export default App;
