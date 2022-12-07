import useFetch from "../../hooks/useFetch"
import "./featured.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Featured = () => {

  const { data, loading, error } = useFetch("hotels/countByCity?cities=Ha Noi,Paris,Tokyo")
  const [destination, setDestination] = useState("")
  console.log(data)
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext)

  const handleSearchVietNam = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination} })
    navigate("/vietnam")
  }
  const handleSearchFrance = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination} })
    navigate("/france")
  }
  const handleSearchJapan = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination} })
    navigate("/japan")
  }
  

  return (
    <div className="featured">
      {loading ? ("Loading please wait") : (
        <>
          <div className="featuredItem" onClick={handleSearchVietNam}>
            <img src="https://media.gettyimages.com/photos/aerial-view-of-halong-bay-in-vietnam-picture-id941334784?k=20&m=941334784&s=612x612&w=0&h=oO8yfuU9r4uLOqu0adY30-Sav6pZ2GWQsaSdaNoVpRM="
              alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Vietnam</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={handleSearchFrance}>
            <img src="https://media.gettyimages.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?k=20&m=1280246120&s=612x612&w=0&h=kCkbBFyB80IB3S28REMZce1KQFIoJVh52E_plV-4v_A="
              alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>France</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={handleSearchJapan}>
            <img src="https://media.gettyimages.com/photos/fisherman-sailing-boat-in-kawaguchiko-lake-and-sakura-with-fuji-picture-id968162396?k=20&m=968162396&s=612x612&w=0&h=d1GE3CV7WP-fu3WPQ7KZcDa1Sf0x0SB3ptffLbGrlTM="
              alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Japan</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}


    </div>
  )
}

export default Featured