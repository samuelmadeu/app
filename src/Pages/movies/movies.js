// @flow
import * as React from 'react'
import styled from 'styled-components'
import {} from './styles'
import { Div, Img, center } from './../../styleUtils'
import Logo from './../../assets/images/logo.png'
import LogoAlt from './../../assets/images/logo-alt.png'
import MoviesContainer from './../../Containers/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'

const PageWrapper = styled.div`
    background: #12BFC8;
    height: 514px;
    padding: 30px;
`

export default class MoviesPage extends React.Component {
    render(): React.Node {
        return (
            <PageWrapper>
               <Img src={Logo} css={`height: 40px;`}  />

                <Div css={center + `padding-top: 100px;`}>
                    <Img src={LogoAlt} css={`height: 120px; padding-bottom: 25px;`} />

                    <Div css={`font-size: 30px; line-height: 25px; color: white;`}>iTunes <strong>movie</strong> search</Div>

                    <MoviesContainer 
                        render={({ 
                            handleChange, 
                            handleSubmit, 
                            state: { value } 
                        }: {
                            handleChange: Function, 
                            handleSubmit: Function, 
                            state: { value: string }
                        }) => (
                                <InputForm 
                                    onSubmit={(e: SyntheticEvent<HTMLInputElement>) => handleSubmit(e)}
                                    onChange={(e: SyntheticEvent<HTMLInputElement>) => handleChange(e)}
                                    value={value}
                                />
                            )
                        }
                    />

                </Div>

                <Div>   
                    <MoviesContainer
                        render={({ state: { moviesList }}: { state: { moviesList: Array<mixed> }}) => (
                            <ul>
                                {moviesList.map(i => <li key={i.trackId}>{i.trackId}</li>)}
                            </ul>
                        )}
                    />
                </Div>
            </PageWrapper>
        )
    }
}