import React from "react";
import styles from './Users.module.css'
import userPhoto from "../../assets/img/DefaultAvatars.png"
import {Link} from 'react-router-dom'

let Users = (props) =>{

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && styles.currentPage}
                        onClick={(e) => {props.onPageChenge(p) }}>{p}</button>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={styles.flex}>
                <span >
                    <div>
                        <Link to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </Link>
                    </div>
                    <div className={styles.margin_button}>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span className={styles.flex}>
                    <span >
                        <div className={styles.margin_text}>Name: {u.name}</div>
                        <div className={styles.margin_text}>Position: {"u.position"}</div>
                    </span>
                    <span >
                        <div className={styles.margin_text}>City: {"u.location.city"}</div>
                        <div className={styles.margin_text}>Country: {"u.location.country"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
}
export default Users