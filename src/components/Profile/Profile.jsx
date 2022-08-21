import MyPostsContainer from './MyPosts/MyPostsContainer';
import profile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        
        <div className={profile.content}>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/6QpKgim9qMgGK8QG2a6gaC/2de28b955c0cf902004fecd1a1e62bee/sub-category-1.jpg?fit=fill&w=368&h=207' className={profile.img} />
            </div>
            <div className={profile.cont}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>

        </div>
    
    )
}
export default Profile;