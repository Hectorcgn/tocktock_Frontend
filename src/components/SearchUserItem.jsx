import { Link } from 'react-router-dom'
import SetFollow from './SetFollow'

function SearchUserItem({ user }) {
  return (
    <section>
      <Link to={`/user/${user._id}`}>
        <article className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center object-cover">
              <img src={user.profile_image_url} alt="" />
            </div>

            <div>
              <h2 className="text-xl text-center ">{user.nickname}</h2>
              <p className="text-xs text-center text-[#424242]">{user.profession}</p>
            </div>
          </div>
        </article>
      </Link>

      <div>
        <SetFollow nickname={user.nickname} follower={user.follower || []} />
      </div>
    </section>
  )
}

export default SearchUserItem