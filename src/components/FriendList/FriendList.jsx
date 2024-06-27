
import css from "../FriendList/FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
const FriendList = ({friends}) => {
    return(
        <ul className={css.list}>
            {friends.map((element) =>{
                return <li key={element.id}> <FriendListItem avatar={element.avatar} name={element.name} isOnline={element.isOnline} />  </li>;
            })}
        </ul>
    )

}

export default FriendList;