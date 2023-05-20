import React from 'react';
import classes from './ProfileScreenMainContentItem.module.css';

interface ProfileScreenMainContentItemProps {
    icon: React.ReactNode,
    text: string,
}

const ProfileScreenMainContentItem = ({ icon, text }: ProfileScreenMainContentItemProps) => {
    return (
        <div className={classes.mainContainer}>

            <div className={classes.iconContainer}>
                {icon}
            </div>

            <div className={classes.textContainer}>
                {text}
            </div>
        </div>
    );
};

export default ProfileScreenMainContentItem;