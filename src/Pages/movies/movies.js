// @flow
import * as React from 'react'
import { Grid, ContentBody, GradientBackground, Results, SortBy, Button, ButtonsWrapper, RightFloat, Heading } from './styles'
import { Div, Img, Center } from './../../styleUtils'
import Logo from './../../assets/images/logo.png'
import LogoAlt from './../../assets/images/logo-alt.png'
import MoviesContainer from './../../Containers/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'
import Card from '../../Components/Card/card';

type MoviesContainerType = {
    handleInputChange: Function, 
    handleInputSubmit: Function, 
    state: { 
        value: string, 
        moviesList: Array<mixed>, 
        isLoading: boolean 
    }    
}

// all the presentional logic of the movies page 
export default class MoviesPage extends React.Component {
    render(): React.Node {
        return (
            <Wrapper>
                    <MoviesContainer 
                        render={({ 
                            handleInputChange, 
                            handleInputSubmit, 
                            state: { 
                                value, 
                                moviesList, 
                                isLoading
                            }
                        }: MoviesContainerType
                        ) => (
                            <React.Fragment>
                                    <InputForm 
                                        onSubmit={(e: SyntheticEvent<HTMLInputElement>) => handleInputSubmit(e)}
                                        onChange={(e: SyntheticEvent<HTMLInputElement>) => handleInputChange(e)}
                                        value={value}
                                    />
                                    
                                    <Div css={`padding-top: 50px;`}>
                                        <Results>Results</Results>
                                        <RightFloat>
                                            <SortBy>Sort By</SortBy>
                                            <ButtonsWrapper>
                                                <Button primary>Title</Button>
                                                <Button>Release Year</Button>
                                            </ButtonsWrapper>
                                        </RightFloat>
                                        <Div css={`clear: both;`}/>
                                    </Div>
                                   
                                    <Grid>
                                        {moviesList.map(movie => <Card key={movie.trackId} { ...movie }/>)}
                                    </Grid>
            
                            </React.Fragment>
                        )}
                    />
            </Wrapper>
        )
    }
}

// a wrapper containing all the header content around the parent component
const Wrapper = ({ children }: { children: React.Node }): React.Element<'div'> => (
    <React.Fragment>
        <GradientBackground />
        <Img src={Logo} css={`height: 40px; padding: 30px;`}  />
        <ContentBody>
            <Img src={LogoAlt} css={`height: 120px; padding-bottom: 25px;`} />
            <Heading>iTunes <strong>movie</strong> search</Heading>

            <div>{ children }</div>

        </ContentBody>
    </React.Fragment>
)