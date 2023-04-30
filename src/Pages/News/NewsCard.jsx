import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt,FaEye, FaStar} from "react-icons/fa";
import Rating from 'react-rating';


const NewsCard = ({news}) => {
    const {_id, title,details,image_url,author,rating,total_view}=news;
    return (
        <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
        <Image style={{height:" 40px"}} src={author.img} roundedCircle />
        <div className='flex-grow-1 ms-2'>
            <p className='mb-0' >{author?.name}</p>
            <small>{moment(author?.published_date).format()}</small>
        </div>
        <div>
          <FaRegBookmark className='fs-3 me-2'></FaRegBookmark>
          <FaShareAlt className='fs-3'></FaShareAlt>
        </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length <250 ? <>{details}</>
            : <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read more</Link> </>
        }
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
            <div>
            <Rating
            readonly
  placeholderRating={rating.number}
  emptySymbol={<FaStar></FaStar>}
  placeholderSymbol={ <FaStar className='text-danger'></FaStar>  }
  fullSymbol={<FaStar></FaStar>}
/>
           <span>{rating.number}</span>
            </div>
            <div>
    <FaEye></FaEye> {total_view}
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;