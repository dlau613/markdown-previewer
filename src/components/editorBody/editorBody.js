import React from 'react';
import styled from 'styled-components';

import {TOOLBAR_HEIGHT} from '../toolbar/toolbar';
const Body = styled.textarea.attrs({
    toolbarHeight: TOOLBAR_HEIGHT
})`
    -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
    width: 100%;
    border: none;
    resize: none;
    height: calc(100% - ${props => props.toolbarHeight});
    height: -o-calc(100% - ${props => props.toolbarHeight}); /* opera */
    height: -webkit-calc(100% - ${props => props.toolbarHeight}); /* google, safari */
    height: -moz-calc(100% - ${props => props.toolbarHeight}); /* firefox */
`;
const EditorBody = (props) => {
    return (
        <Body>{props.text}</Body>
    );
}
export default EditorBody;