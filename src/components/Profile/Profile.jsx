import {
  StyledAvatarImg,
  StyledItem,
  StyledName,
  StyledProfile,
  StyledQuantity,
  StyledStats,
  StyledText,
  StyledTextBox,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { views, followers, likes } = stats;

  return (
    <StyledProfile>
      <StyledTextBox>
        <StyledAvatarImg src={avatar} alt="User avatar" />
        <StyledName className="name">{username}</StyledName>
        <StyledText className="tag">@{tag}</StyledText>
        <StyledText className="location">{location}</StyledText>
      </StyledTextBox>

      <StyledStats>
        <StyledItem>
          <StyledText>Followers</StyledText>
          <StyledQuantity>{followers}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledText>Views</StyledText>
          <StyledQuantity>{views}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledText>Likes</StyledText>
          <StyledQuantity>{likes}</StyledQuantity>
        </StyledItem>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
