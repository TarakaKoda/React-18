import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {

  let [isLiked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!isLiked);
    onClick();
  }

  if(isLiked) return <AiOutlineHeart color='red' size='40' onClick={toggle}/>
  return <AiOutlineHeart size={40} onClick={toggle}/>
} 

export default Like