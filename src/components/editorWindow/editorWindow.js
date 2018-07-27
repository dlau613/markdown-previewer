import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import Toolbar from '../toolbar';
import EditorBody from '../editorBody';

const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    border: 1px black solid;
`;
const Test = styled(Markdown)`
    height: calc(100%-30px);
    overflow:auto;

`
const EditorWindow = (props) => {
    if (props.preview) {
        return (
            <Wrapper>
            <Toolbar title={props.title} icon={props.icon}/>
            <Markdown source={props.text} escapeHtml={false}/>
        </Wrapper>
        );
    }
    return (
        <Wrapper>
            <Toolbar title={props.title} icon={props.icon}/>
            <EditorBody text={props.text}/>
        </Wrapper>
            

    );
        
}

export default EditorWindow;