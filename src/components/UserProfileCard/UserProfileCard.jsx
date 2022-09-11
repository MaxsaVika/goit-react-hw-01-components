import userData from 'data/user.json';
import {UserProfileStat} from 'components/UserProfileStats/UserProfileStats'
import {UserProfileInfo} from 'components/UserProfileInfo/UserProfileInfo'
import {Profile} from './UserProfileCard.styled'
import {UserProfileStatsList} from 'components/UserProfileStats/UserProfileStats.styled'

export const UserProfileCard = ()=>{
    return (
        <Profile>
            <UserProfileInfo
                key={userData.username}
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}/>
            <UserProfileStatsList>
                {Object.entries(userData.stats).map(([statName, statValue]) => (
                    <UserProfileStat
                        key={statName}
                        statName={statName}
                        statValue={statValue}
                    />
                ))}
            </UserProfileStatsList>
        </Profile>
    )
}
