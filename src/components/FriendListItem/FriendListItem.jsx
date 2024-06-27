import css from "../FriendListItem/FriendListItem.module.css"
const FriendListItem = ({avatar, name, isOnline}) =>{
    return(
        <div className={css.item}>
            <img src={avatar} alt={name} width={48}/>
            <p className={css.bold}>{name}</p>
            <p className={isOnline ? css.online : css.offline}>
            {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    )
}

export default FriendListItem;