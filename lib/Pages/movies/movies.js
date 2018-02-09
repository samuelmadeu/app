//      
import * as React from 'react'
import styled from 'styled-components'
import {} from './styles'
import { Div, Img, center } from './../../styleUtils'
import Logo from './../../assets/images/logo.png'
import LogoAlt from './../../assets/images/logo-alt.png'

const PageWrapper = styled.div`
    background: #12BFC8;
    height: 514px;
    padding: 30px;
`

export default class MoviesPage extends React.Component {
    render()             {
        return (
            <PageWrapper>
               <Img src={Logo} css={`height: 40px;`}  />

                <Div css={center + `padding-top: 100px;`}>
                    <Img src={LogoAlt} css={`height: 120px; padding-bottom: 25px;`} />
                    <Div css={`font-size: 30px; line-height: 25px; color: white;`}>iTunes <strong>movie</strong> search</Div>

                    <Div />
                </Div>
            </PageWrapper>
        )
    }
}