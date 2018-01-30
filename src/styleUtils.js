/* @flow 
    Style Utilities for use with styled components 
*/

import * as React from 'react'
import styled, { css } from 'styled-components'

/*
    A prop based styled Div with media queries 
    example: 
        <Div 
            css={`background: red;`} 
            mob={`background: white`}
        />
 */
const Div = styled.div`
    ${props => css`
        ${props.css}

        @media(max-width: 420px) {
            ${props.mob}
        }

    `}
`

const Img = styled.img`
    ${props => css`
        ${props.css}

        @media(max-width: 420px) {
            ${props.mob}
        }

    `}
`

export { Div, Img }