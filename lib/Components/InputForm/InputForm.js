//      
import * as React from 'react'

export default class InputForm extends React.Component        {
    render() {
        const { onChange, onSubmit, inputValue, value } = this.props 

        return (
            <div>
                {inputValue}
                <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={onChange}/>
                    <input type="submit" value="submit" />
                </form>  
            </div>
        )
    }
}