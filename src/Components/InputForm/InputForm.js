// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Button } from './../../Pages/movies/styles'
import { Div } from '../../styleUtils';

 const Input = styled.input`
    background: rgba(0, 0, 0, 0.3);
    mix-blend-mode: normal;
    opacity: 0.7;
    border: 1px solid #FFFFFF;
    box-sizing: border-box; 
    padding: 15px 25px;  
    width: 400px; 
    font-size: 18px;
    border-radius: 6px;
    text-align: left;
    color: white;

    ::placeholder {
        color: white;
    }
 `

 const InputButton = Button.withComponent('input')

 const SubmitButton = InputButton.extend`
    color: #1BD3B9;
    padding: 16px 25px;
    margin-left: 10px;
 `

type Props = {
    onChange: Function, 
    onSubmit: Function, 
    value: string
}

export default class InputForm extends React.Component<Props> {
    render() {
        const { onChange, onSubmit, value } = this.props 

        return (
            <Div css={`padding-top: 30px; padding-bottom: 100px;`}>
                <form onSubmit={onSubmit}>
                    <Input placeholder="Search for anything right here..." type="text" value={value} onChange={onChange}/>
                    <SubmitButton type="submit" value="search" />
                </form>  
            </Div>
        )
    }
}