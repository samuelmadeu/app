//      
import * as React from 'react'
import styled from 'styled-components'
import {} from './styles'
import { Div, Img, center } from './../../styleUtils'
import Logo from './../../assets/images/logo.png'
import LogoAlt from './../../assets/images/logo-alt.png'
import MoviesContainer from './../../Containers/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'
import Moment from 'moment';

const PageWrapper = styled.div`
    background: #12BFC8;
    height: 514px;
    padding: 30px;
`
                            
                                 
                                 
             
                       
                                  
                           
         
 

// all the presentional logic of the movies page 
export default class MoviesPage extends React.Component {
    render()             {
        Moment.locale('en')
        return (
            <PageWrapper>
               <Img src={Logo} css={`height: 40px;`}  />

                <Div css={center + `padding-top: 100px;`}>
                    <Img src={LogoAlt} css={`height: 120px; padding-bottom: 25px;`} />

                    <Div css={`font-size: 30px; line-height: 25px; color: white;`}>iTunes <strong>movie</strong> search</Div>

                    <MoviesContainer 
                        render={({ 
                            handleInputChange, 
                            handleInputSubmit, 
                            state: { 
                                value, 
                                moviesList, 
                                isLoading
                            }
                        }                     
                        ) => (
                            <React.Fragment>
                                <InputForm 
                                    onSubmit={(e                                  ) => handleInputSubmit(e)}
                                    onChange={(e                                  ) => handleInputChange(e)}
                                    value={value}
                                />

                                <br/>
    

                                <ul>
                                    {moviesList.map(i => <li key={i.trackId}>{Moment(i.releaseDate).format('DD, MMMM, YYYY')}</li>)}
                                </ul>
                            </React.Fragment>
                        )}
                    />

                </Div>

            </PageWrapper>
        )
    }
}
