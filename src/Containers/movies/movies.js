// @flow
import * as React from 'react'
import axios from 'axios'
import MoviesPage from '../../Pages/movies/movies'
import InputForm from '../../Components/InputForm/InputForm'

type Props = {
    movies: string, 
    render: Function
}

export type State = {
    moviesList: Array<mixed>, 
    isLoading: boolean, 
    value: string
}

const myFunc = ({ 
    query, 
    api = 'http://localhost:5000/movies/?searchTerm=' 
    }: { 
        query: string,
        api: string 
    }): string => {
        let result = api + query 
        return result
}

const handleSearch = (query: string): void => {
   //let queryURL: string = myFunc({ query: query })
   console.log(query)
   let queryURL = `http://localhost:5000/movies/?searchTerm=${query}`   
    axios.get(queryURL)
        .then(res => console.log(res.data.results))
        .catch((error: Error) => console.log(error))
}

const queryUrl = (query: string): string => {
    console.log(query.split('+'))
    let url: string = `http://localhost:5000/movies/?searchTerm=${query}`
    return url
}

// Containing all the business logic and fetch
export default class MoviesContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            moviesList: [], 
            isLoading: false,
            value: '', 
            inputValue: '', 
        }
    }

    handleSearch = (query: string): void => {
        //let queryURL: string = myFunc({ query: query })
        console.log(query)
        axios.get(queryUrl(query))
            .then(res => console.log(res.data.results))
            .catch((error: Error) => console.log(error))
     }

    handleChange = (e: SyntheticEvent<HTMLInputElement>): void => this.setState({ value: e.target.value })
    
    handleSubmit = (e: SyntheticEvent<HTMLInputElement>): void => {
        this.handleSearch(this.state.value)
        e.preventDefault()
    }

    render(): React.Node {
        return this.props.render(this) 
    }
}

MoviesContainer.defaultProps = {
    render: Function, 
    movie: 'thor', 
    url: 'http://localhost:5000/movies/?searchTerm=thor'
}
