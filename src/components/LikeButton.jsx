import { useEffect, useState } from 'react'
import { getLikes } from '../utils/fetches/getLikesFetch.js'
import like from '../assets/icons/Heart.svg'
import likeWhite from '../assets/icons/HeartWhite.svg'
import likeActive from '../assets/icons/HeartRed.svg'
import DarkMode from './DarkMode'

function LikeButton({ nickname, likesAmount, postId, setReload, post, darkMode }) {
  const myNickname = JSON.parse(sessionStorage.getItem('nickname'))
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(() => {
    const result = likesAmount.reduce((accumulator, likeStatus) => {
      if (likeStatus === JSON.parse(sessionStorage.getItem('nickname'))) {
        return true
      } else {
        return accumulator
      }
    }, false)

    return result
  })

  const handleLikes = () => {
    getLikes(nickname, postId, setReload)
  }

  return (
    <div className="flex gap-1 items-center">
      <img
        className="h-6 w-6 cursor-pointer"
        role="presentation"
        onClick={handleLikes}
        src={
          darkMode
            ? post.likes?.includes(myNickname)
              ? likeActive
              : likeWhite
            : post.likes?.includes(myNickname)
            ? likeActive
            : like
        }
        alt="like_icon"
      />
      <p>{likesAmount.length}</p>
    </div>
  )
}

export default LikeButton
