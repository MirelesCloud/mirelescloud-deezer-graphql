import React, { useState } from 'react'
import { HeartOutline, HeartLiked, LikeContainer } from '../Styles'

const Like = () => {
  const [like, setLike] = useState(0)
  
  if (like > 0) {
    return <LikeContainer>
            {like} <HeartLiked onClick={() => setLike(like + 1)}/>
           </LikeContainer>
  }
  return (
     <LikeContainer>
       {like} <HeartOutline onClick={() => setLike(like + 1)}/> 
     </LikeContainer>
  )
}

export default Like