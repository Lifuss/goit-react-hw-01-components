import PropTypes from 'prop-types';
import {
  StyledFriendList,
  StyledImgAvatar,
  StyledItem,
  StyledName,
  StyledSpan,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <StyledItem key={friend.id}>
          <StyledSpan $isOnline={friend.isOnline}></StyledSpan>
          <StyledImgAvatar src={friend.avatar} alt="User avatar" width="48" />
          <StyledName>{friend.name}</StyledName>
        </StyledItem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
