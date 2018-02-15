// @flow 
import * as React from 'react'
import styled, { css } from 'styled-components'

/* @flow 
    Style Utilities for use with styled components 
*/

/*
    A prop based styled Div with media queries. 
    example: 
        <Div 
            css={`
                background: red;
            `} 
            mob={mobileStyles}
        />
 */
export const Div = styled.div`
    ${props => css`
        ${props.css}

        @media(max-width: 420px) {
            ${props.mob}
        }

    `}
`

export const Span = styled.span`
    ${props => css`
        ${props.css}

        @media(max-width: 420px) {
            ${props.mob}
        }

    `}
`

export const Img = styled.img`
    ${props => css`
        ${props.css}

        @media(max-width: 420px) {
            ${props.mob}
        }

    `}
`

export const Center = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
`
