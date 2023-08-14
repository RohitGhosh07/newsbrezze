import React from 'react'

const NewsCard = ({data}) => {


// author : "Sanstuti Nath"
// content : "At least 18 patients, admitted at the civic-run hospital in Maharashtras Thane city, died in the span of 24 hours. The incident was reported at the government-run Chhatrapati Shivaji Maharaj Memorial… [+3350 chars]"
// description : "On Thursday, a mob gathered at the hospital and questioned the authorities alleging the death of five persons in a day due to “negligence”"
// publishedAt : "2023-08-13T12:32:10Z"
// source : {id: null, name: 'News18'}
// title : "18 Deaths in 48 Hrs at Thane’s Civic Hospital; Minister Warns of Action if Negligence is Found - News18"
// url : "https://www.news18.com/india/thane-hospital-17-patients-die-24-hours-chhatrapati-shivaji-maharaj-memorial-sharad-pawar-8534720.html"
// urlToImage : "https://images.news18.com/ibnlive/uploads/2023/08/hospital111-169192627216x9.jpg"


  return (
    <a href={data?.url} target="__blank" style={{
        color: "black",
        textDecoration: 'none'
    }}>
    <div style={{
        width: '350px',
        background: 'white',
        boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`
    }}>
        <div style={{
            width: '100%',
            height: '200px',
        }}>
            <img src={data?.urlToImage} alt="news-image" style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
            }}/>
        </div>
        <div style={{
            height: '250px',
            width: '100%',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start'
        }}>
            <p>Author: {data?.author}</p>
            <h4 style={{
                margin: '10px 0px',
                textDecoration: 'underline',
                height: '60px'
            }}>{data?.title}</h4>
            <p style={{
                fontSize: '14px',
                height: '100px',
                color: 'gray'
            }}>{data?.description}</p>
            <p>Source: {data?.source?.name}</p>
        </div>
    </div>
    </a>
  )
}

export default NewsCard