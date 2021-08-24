import React, { useState, useEffect} from 'react'
import "./css/style.css"
function Temp() {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b91e51f6519728a37410f83d09d2985`
            const resp = await fetch(url)
            const respjson = await resp.json()           
            setCity(respjson.main);
        }
        fetchApi()
    })
    return (
        <>
            <div className="box">
                <h2>Weather App</h2>
                <div className="inputData">
                    <input type="search" className="inputField" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                </div>
                { ! city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search.toUpperCase()}
                            </h2>
                            <h1 className="temps">{city.temp} Cel
                            </h1>
                            <h4 className="tempmin">Min : {city.temp_min} Cel | Max : {city.temp_max} Cel</h4>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default Temp;