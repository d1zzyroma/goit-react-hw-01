import css from "../Profile/Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.blockOne}>
                <img src= {image} alt="User avatar" width={100} className={css.mainImage}/>
                <p className={css.bold}>{name}</p>
                <p className={css.colorText}>{tag}</p>
                <p className={css.colorText}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.bold}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.bold}>{stats.views}</span>
                </li>
                <li className={css.listItem} style={{borderRight: "none"}}>
                    <span>Likes</span>
                    <span className={css.bold}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
  };

export default Profile;