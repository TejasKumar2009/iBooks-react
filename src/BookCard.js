import { useEffect, useState } from 'react';

function BookCard(props) {
  return (
   <>
    <a target="_blank" href={props.booklink} className="card" style={{width: '10rem'}}>
              <img src={props.img} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.subtitle}</p>

              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">By {props.author}</li>
                <li className="list-group-item">Published in {props.publishedDate}</li>
              </ul>
              <div className="card-body d-flex flex-column justify-content-end align-items-center">
              <a href={props.readlink} type="button" class="btn btn-dark">Read Book</a>
              </div>
            </a>
   </>
  )

}

export default BookCard;