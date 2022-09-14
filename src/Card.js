import React from 'react'

export default function Card(props) {

    return (
        <div>

        <div className='card'>
            <img className='img-desc' src={`../images/${props.item.coverImg}`} />
            <div className='details'>
                <div className='location-details'>
                    <img className='img-loc' src={`../images/${props.item.location.locImg}`} />
                    <p className='country-loc'>{props.item.location.country}<span className='map-link'><a href={`${props.item.location.map}`}>View on Google Maps</a></span></p>
                </div>
                <h2 className='title-destination'>{props.item.title}</h2>
                <p className='date'>{props.item.date}</p>
                <p className='desc'>{props.item.description}</p>
            </div>

        </div>
                <div className="line"></div>
        </div>



    )



}