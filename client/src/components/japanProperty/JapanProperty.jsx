import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import useFetch from '../../hooks/useFetch'
import { SearchItem } from '../searchItem/SearchItem'

export const JapanProperty = () => {
    // const { data, loading, error, reFetch } = useFetch(`/hotels?featured=true}`)
    const { data, loading, error } = useFetch("/hotels?city=Tokyo")
    console.log(data)
    return (
        <div className="vietnam">
            <Navbar />
            <Header type="list" />

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listResult">
                        {loading ? "loading" : <>
                            {data.map(item => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>}

                    </div>

                </div>
            </div>
        </div>

    )
}
