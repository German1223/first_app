import React from "react";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    else
        return (
            <div>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    avatars + discription
                </div>
            </div>
        )
}
export default ProfileInfo