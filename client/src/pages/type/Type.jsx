import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "../list/list.css"
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { format } from "date-fns"
import { DateRange } from 'react-date-range';
import { SearchItem } from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'

const Type = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination)
    const [dates, setDates] = useState(location.state?.dates)
    const [options, setOptions] = useState(location.state?.options)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    // function standardDestination
    function standardDestination(destination){
        if(destination !== "") return `type=One Star`
        return ""
    }
    const des = standardDestination(destination)

    const { data, loading, error, reFetch } = useFetch(`/hotels?type=One Star&min=${min || 0}&max=${max || 999}`)
    

    const handleClick = () => {
        reFetch();
    }
    return (
        <div>
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
        </div >
    )
}

export default Type