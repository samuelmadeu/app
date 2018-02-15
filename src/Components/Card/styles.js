import styled from 'styled-components'

export const CardWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 16.7px rgba(0, 0, 0, 0.1); 
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    padding: 20px;
    border-radius: 7px;

    > * {
      margin: auto;
      text-align: left;
      letter-spacing: 0.2px;
      line-height: 1.6;
    }
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: #1b1b1b;
`

export const Genre = styled.div`
    font-weight: 600;
    line-height: 44px;
    font-size: 13px;
    color: #3c3c3c;
    float: ${props => props.primary ? 'right' : 'left'};
`

export const Desc = styled.div`
    font-size: 13px;
    font-weight: normal;
    line-height: 24px;
    color: #1b1b1b;
    clear: both;
`


export const Image = styled.img`
    height: 160px;
`