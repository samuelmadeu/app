//      
import * as React from 'react'
import axios from 'axios'
import MoviesPage from '../../Pages/movies/movies'

              
                   
 

              
             
 

// Containing all the business logic and fetch functions 
export default class MoviesContainer extends React.Component               {
    state = {
        data: [], 
    }

    componentDidMount(){
        axios.get('http://localhost:5000/movies/?searchTerm=' + this.props.movie)
            .then((response) => {
                this.setState({ data: response.data })
                console.log(response)
             })
            .catch((error) => {
                console.log(error)
            })
    }

    render()             {
        return <MoviesPage />
    }
}

MoviesContainer.defaultProps = {
    movie: 'thor'
}
