// import PropTypes from 'prop-types';
import friendsData from 'data/friends.json'
import {FriendListItem} from 'components/FriendCard/FriendCard'
import {FriendsListStyle} from './FriendsList.styled'

export const FriendsList = ()=>{
    return (
        <FriendsListStyle>
            {friendsData.map(({avatar, name, id, isOnline})=> 
            <FriendListItem key = {id} avatar = {avatar} name = {name} isOnline={isOnline}/>)}
        </FriendsListStyle>
    )
}