import React from 'react';

const Form = (props) =>{
    return(
        <form onSubmit={props.loadWeather}> 
            <input type="text" name="city" placeholder="Enter city"/>
            <input type="text" name="country" placeholder="Enter Country"/>
            <input type="submit" value="Get Weather"/>

        </form>
    )

}

export default Form