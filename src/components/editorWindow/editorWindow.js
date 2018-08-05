import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import Markdown from 'react-markdown';
import {Controlled as CodeMirror} from 'react-codemirror2';

import Toolbar from '../toolbar';
import EditorBody from '../editorBody';
import {TOOLBAR_HEIGHT} from '../toolbar/toolbar';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/markdown/markdown.js');


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
            <MarkdownWrapper>

                <CodeMirror 
                    value={props.text} 
                    options={{
                        mode: 'markdown',
                        theme: 'monokai',
                    }}
                    onBeforeChange={(editor, data, value) => {
                        props.onChange(value)
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </MarkdownWrapper>
        </Wrapper>
            

    );
        
}

export default EditorWindow;