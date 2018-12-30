import React from 'react'
import { carousel, slideStyle } from '../../assets/themes/styles'
import { truncate } from '../../assets/javascript'


const Slide = ({ author, event, information, number, title, }) => 

        <div style={slideStyle.card}>
            <img
                src={event ? require(`../../assets/img/book_img/${number+1}.jpg`) : 
                        require(`../../assets/img/dummy/${number}.png`)}
                alt='book cover'
                style={slideStyle.image}
            />
            <div>
                <div style={carousel.carouselLabel}>
                    <em>{title}</em>
                    <br />
                    {event ?
                        <div>
                            <p>{information[0]}</p> 
                            <p>{information[1]}</p> 
                        </div> 
                    :
                        <div>
                            <p>{information}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    

export { Slide }

// <div  style={{ marginLeft: '50px', marginRight: '50px', }}>
//                                             <h3 style={frame.infoText}><em>{truncate(event.book, 25)}</em></h3>
//                                             <div style={{ marginTop: '2rem' }}>
//                                                 <h4 style={frame.smallText}>{truncate(event.location, 23)}</h4>
//                                                 <h4 style={frame.smallText}>{event.time}</h4>
//                                             </div>
//                                             <IconButton
//                                                 //color='primary.dark'
//                                                 variant='outlined'
//                                                 style={{ opacity: .5, marginTop: 10 }}
//                                             >
//                                                 <Edit />
//                                             </IconButton>
//                                         </div>