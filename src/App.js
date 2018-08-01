import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import SplitPane from 'react-split-pane';
import Dimensions from 'react-dimensions';


import './App.css';
import rootReducer from './reducers';
import { updateInput } from './actions';
import { getInput } from './reducers';
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
    let halfWidth = this.props.containerWidth/2;
    return (
      <ThemeProvider theme={theme}>
          <SplitPane split='vertical' defaultSize={halfWidth} minSize={100} maxSize={halfWidth}>
            <EditorWindow onChange={this.handleChange} text={this.props.input} title='Editor' icon={{set:'fa',symbol:'twitter'}}/> 
            <EditorWindow preview text={this.props.input} title='Previewer' icon={{set:'fa',symbol:'twitter'}}/>
          </SplitPane>
      </ThemeProvider>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    input: getInput(state)
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

export default App;
