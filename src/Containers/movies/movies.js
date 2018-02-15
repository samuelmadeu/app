// @flow
import * as React from 'react'
import axios from 'axios'
import MoviesPage from '../../Pages/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'

// fetch movies using axios and catching any errors 
const getMoviesFromApi = async (query: string): Promise<Array> => {
    let queryUrl: string = `http://localhost:5000/movies/?searchTerm=${query}`
    try {
        let response: AxiosResponse<any> = await axios.get(queryUrl)
        console.log(response)
        return response.data.results
    } catch (error) {
        console.error(error)
    } 
}

type Props = {
    render: Function
}

export type State = {
    moviesList: Array<mixed>, 
    sortedMoviesList: Array<mixed>,
    isLoading: boolean, 
    value: string, 
    filterByTitleToggle: boolean, 
    filterByYearToggle: boolean
}

// Contains all the business logic and fetch
export default class MoviesContainer extends React.Component<Props, State> {
    constructor(props: Props) {
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

    handleInputChange = (e: SyntheticEvent<HTMLInputElement>): void => this.setState({ value: e.target.value })
    
    handleInputSubmit = (e: SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ isLoading: true })
        getMoviesFromApi(this.state.value)
            .then((moviesList: Array<mixed>) => this.setState({ moviesList: moviesList, isLoading: false }))
        e.preventDefault()
    }

    // sort by filter toggle state 
    handleFilterToggles = (): void => {
        this.setState((prevState) => ({ 
            filterByTitleToggle: !prevState, 
            filterByYearToggle: !prevState 
        }))
    }

    handleSortBy = (a): void => {
        let some = {
            'title' : 'Title', 
            'year' : 'Year', 
            'default' : 'Title'
        }

        return (some[a] || some['default'])
    }

    render(): React.Node {
        // renders the instance of this into the prop 
        return this.props.render(this) 
    }
}