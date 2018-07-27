import React from 'react';
import styled from 'styled-components';

const Body = styled.textarea`
    -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
    width: 100%;
    height: calc(100% - 30px);
    height: -o-calc(100% - 30px); /* opera */
    height: -webkit-calc(100% - 30px); /* google, safari */
    height: -moz-calc(100% - 30px); /* firefox */
`;
const EditorBody = (props) => {
    return (
        <Body>{props.text}</Body>
    );
}
export default EditorBody;