import React from 'react';
import styled from 'styled-components';

import {TOOLBAR_HEIGHT} from '../toolbar/toolbar';
const Body = styled.textarea.attrs({
    toolbarheight: TOOLBAR_HEIGHT
})`
    -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    height: calc(100% - ${props => props.toolbarheight});
    height: -o-calc(100% - ${props => props.toolbarheight}); /* opera */
    height: -webkit-calc(100% - ${props => props.toolbarheight}); /* google, safari */
    height: -moz-calc(100% - ${props => props.toolbarheight}); /* firefox */
`;
const EditorBody = (props) => {
    return (
        <Body onChange={props.onChange} value={props.text}></Body>
    );
}
export default EditorBody;