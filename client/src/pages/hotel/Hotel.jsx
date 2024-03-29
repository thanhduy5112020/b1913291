import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { MailList } from "../../components/mailList/MailList"
import { Footer } from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"
import { Reserve } from "../../components/reserve/Reserve"

const Hotel = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { dates, options } = useContext(SearchContext)

    //    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        if (date2 == null) return 0;
        const timeDiff = Math.abs(date2?.getDate() - date1?.getDate());
        console.log(date2?.getDate() + " " + date1?.getDate())
        //  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return timeDiff;
    }

    function standardOption(options){
        if(options == null) return 1;
        return options;
    }
    const newOptions = standardOption(options.room);

    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate) + 1;
    console.log("days" + days)


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    }

    const handleClick = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigate("/login");
        }
    }

    const total = data.total + days * data?.cheapestPrice * newOptions;
    const updateTotal = {...data, total: total}
    const hotelData = data
    console.log(updateTotal);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("loading") :
                (<div className="hotelContainer">
                    {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                        <div className="sliderWrapper">
                            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
                    </div>}
                    <div className="hotelWrapper">
                        <button className="bookNow" style={{ color: "red", backgroundColor: "yellow" }}>View!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.city}</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location - {data.distance}m from center
                        </span>
                        <span className="hotelPriceHighlight">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className="hotelImages">
                            {data.photos?.map((photo, i) => (
                                <div className="hotelImgWrapper" key={i}>
                                    <img
                                        onClick={() => handleOpen(i)}
                                        src={photo}
                                        alt=""
                                        className="hotelImg" />
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetaisTexts">
                                <h1 className="hotelTitle">{data.title} </h1>
                                <p className="hotelDesc">{data.desc}</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 9-night stay!</h1>
                                <span>Couples particularly like the location — they rated it 8.4 for a two-person trip.</span>
                                <h2>
                                    <b>${total}</b> ({days} nights)
                                </h2>
                                <button onClick={handleClick}>Reserve or Book Now</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>)}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id} total={total} hotelData={hotelData} updateTotal={updateTotal}/>}
        </div>
    )
}

export default Hotel