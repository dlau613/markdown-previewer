import React from 'react';
import styled from 'styled-components';
import Icon from '../icon';

export const TOOLBAR_HEIGHT = '40px';
const Wrapper = styled.div.attrs({
    height: TOOLBAR_HEIGHT
})`
    color: #969A84;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #1A181C;
    width: 100%;
    height: ${props => props.height};
`;

const LeftWrapper = styled.div`
    padding: ${props => props.theme.padding.xs};
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;
const Title = styled.h4`
    margin-left: ${props => props.theme.margins.xs}
    color: #969A84;
    font-size: ${props => props.theme.fontSize.h4};

`;
const Toolbar = (props) => {
    return (
        <Wrapper>
            <LeftWrapper>
                <Icon set={props.icon.set} symbol={props.icon.symbol}/>
                <Title>{props.title}</Title>
            </LeftWrapper>
            <RightWrapper>
                {/* <Icon set='fa' symbol='beer'/> */}

            </RightWrapper>
        </Wrapper>
    );
}
export default Toolbar;