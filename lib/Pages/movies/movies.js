//      
import * as React from 'react'
import styled from 'styled-components'
import {} from './styles'
import { Div, Img } from './../../styleUtils'
import Logo from './../../assets/images/logo-small.png'

const PageWrapper = styled.div`
    background: #12BFC8;
    height: 514px;
`

const Header = ()             => {

    const TopLogo = ()             => <Img css={`
    padding: 30px;`} src={Logo} />

    return <TopLogo />
        
}

export default class MoviesPage extends React.Component {
    render()             {
        return (
            <PageWrapper>
                <Header />
            </PageWrapper>
        )
    }
}