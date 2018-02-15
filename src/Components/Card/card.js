// @flow
import * as React from 'react'
import Moment from 'moment'
import { Div, Img, Span } from './../../styleUtils'
import { CardWrapper, Title, Genre, Desc, Image } from './styles'

type CardTypes = {
    trackName: string,
    primaryGenreName: string, 
    releaseDate: string, 
    shortDescription: string, 
    artworkUrl100: string
}

const Card = ({
	trackName,
	primaryGenreName,
	releaseDate,
	shortDescription,
	artworkUrl100
}: CardTypes ): React.Element<'div'> => {
	Moment.locale('en')
	const formatDate = (date: string): string => Moment(date).format('DD MMMM YYYY')

	return (
    <CardWrapper>
        <Image src={ artworkUrl100 }/>
        
        <Div css={`padding: 10px; width: 250px;`}>
            <Title>{ trackName }</Title>
            <Span css={`clear: both`}>
                <Genre>{ primaryGenreName }</Genre>
                <Genre primary>{ formatDate(releaseDate) }</Genre>
            </Span>
            <Desc>{ shortDescription }</Desc>
        </Div>
    </CardWrapper>
	)
}

Card.defaultProps = {
    desc: 'No description provided'
}

export default Card 

