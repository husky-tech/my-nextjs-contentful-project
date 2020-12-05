import React from 'react';
import { Button } from '@material-ui/core';

function Post({ title, subTitle, lectureMovie, body }) {
  console.log(body);
  return (
    <div className={{ textAlign: "center" }}>
      <h1>アウトプット課題</h1>
      <h2>{title}</h2>
      <h2>{subTitle}</h2>
      <iframe width="1500" height="800" src={lectureMovie} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <div>{body}</div>
    </div>
  )
}

export default Post