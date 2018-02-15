//      
import * as React from 'react'
import axios from 'axios'
import MoviesPage from '../../Pages/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'

// fetch movies using axios and catching any errors 
const getMoviesFromApi = async (query        )                 => {
    let queryUrl         = `http://localhost:5000/movies/?searchTerm=${query}`
    try {
        let response                     = await axios.get(queryUrl)
        console.log(response)
        return response.data.results
    } catch (error) {
        console.error(error)
    } 
}

              
                    
 

                     
                              
                                   
                        
                   
                                  
                               
 

// Contains all the business logic and fetch
export default class MoviesContainer extends React.Component               {
    constructor(props       ) {
        super(props)

        this.state = {
            moviesList: [], 
            sortedMoviesList: [], 
            value: '', 
            isLoading: false,
            filterByTitleToggle: true, 
            filterByYearToggle: false, 
        }
    }

    handleInputChange = (e                                  )       => this.setState({ value: e.target.value })
    
    handleInputSubmit = (e                                  )       => {
        this.setState({ isLoading: true })
        getMoviesFromApi(this.state.value)
            .then((moviesList              ) => this.setState({ moviesList: moviesList, isLoading: false }))
        e.preventDefault()
    }

    // sort by filter toggle state 
    handleFilterToggles = ()       => {
        this.setState((prevState) => ({ 
            filterByTitleToggle: !prevState, 
            filterByYearToggle: !prevState 
        }))
    }

    handleSortBy = (a)       => {
        let some = {
            'title' : 'Title', 
            'year' : 'Year', 
            'default' : 'Title'
        }

        return (some[a] || some['default'])
    }

    render()             {
        // renders the instance of this into the prop 
        return this.props.render(this) 
    }
}