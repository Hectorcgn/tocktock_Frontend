import { Link } from 'react-router-dom'
import SetFollow from './SetFollow'

function SearchUserItem({ user, reload, setReload, darkMode }) {
  return (
    <section className="flex justify-between items-center border-gray-200 border-b-[1px] pb-2 ">
      <Link to={`/user/${user._id}`}>
        <article className="flex justify-between mt-4 ">
          <div className="flex gap-2">
            <div className="  flex justify-center items-center">
              <img
                role="presentation"
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={user.profile_image_url}
                alt=" profile_image"
              />
            </div>
            <div>
              <h2 className="text-xl text-start ">{user.nickname.substring(0, 12)}</h2>
              <p className={darkMode ? 'text-xs text-start text-white' : 'text-xs text-start text-[#424242]'}>
                {user.profession}
              </p>
            </div>
          </div>
        </article>
      </Link>

      <div className="flex w-[117px]">
        <SetFollow nickname={user.nickname} follower={user.follower} setReload={setReload} reload={reload} />
      </div>
    </section>
  )
}

export default SearchUserItem
