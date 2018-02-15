// @flow 
import * as React from 'react'
import styled, { css } from 'styled-components'
import { Center } from './../../styleUtils'

export const Grid = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
    padding-top: 20px;
`

export const ContentBody = Center.extend`
    padding-top: 50px; 
    padding-bottom: 100px; 
    width: 89%;
`

export const GradientBackground = styled.div`
    background: linear-gradient(8deg, #00D9C5 -433.51%, #582F82 1023.12%, #582F82 1023.12%, #4D5CB7 1023.12%, #4A6AC8 1023.12%), #4D4D4D !important;
    height: 450px;
    padding: 30px;
    position: absolute;
    z-index: -100000;
    width: 100%;
    top: 0px;
`

export const Results = styled.div`
    text-align: left;
    font-weight: 400px;
    line-height: 24px;
    font-size: 30px;
    color: #3C3C3C;
`

export const RightFloat = styled.div`
    float: right; 
    > * {
        float: left;  
    }
`

export const SortBy = styled.div`
    font-weight: 600; 
    font-size: 16px;
    text-transform: uppercase;
    color: #3C3C3C;
    text-align: left;
`

export const ButtonsWrapper = styled.div`
    margin-top: -16px;
    > * {
        margin-left: 20px;
    }
`

export const Button = styled.button`
    background-color: ${props => props.primary ? '#00D9C6' : 'white'};
    color: ${props => props.primary ? 'white' : '#3C3C3C'};
    border: none;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0px 0px 7.4px rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    font-weight: 600; 
    font-size: 16px;
    text-transform: uppercase;
`

export const Heading = styled.div`
    font-size: 30px; 
    line-height: 25px; 
    color: white;
`