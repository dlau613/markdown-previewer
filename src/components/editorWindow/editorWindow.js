import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';


import Toolbar from '../toolbar';
import EditorBody from '../editorBody';
import {TOOLBAR_HEIGHT} from '../toolbar/toolbar';
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const MarkdownWrapper = styled.div.attrs({
    toolbarheight: TOOLBAR_HEIGHT
})`
    height: calc(100% - ${props => props.toolbarheight});
    overflow: auto;
`;


const EditorWindow = (props) => {
    if (props.preview) {
        return (
            <Wrapper>
                <Toolbar title={props.title} icon={props.icon}/>
                <MarkdownWrapper>
                    <Markdown source={props.text} escapeHtml={false} sourcePos={true}/>
                </MarkdownWrapper>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <Toolbar title={props.title} icon={props.icon}/>
            <EditorBody onChange={props.onChange} text={props.text}/>
        </Wrapper>
            

    );
        
}

export default EditorWindow;