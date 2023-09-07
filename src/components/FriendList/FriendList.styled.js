import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  margin: 0 auto 30px;
  gap: 24px;
`;
export const StyledItem = styled.li`
  padding: 8px;
  padding-left: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 8px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px gray;
`;
export const StyledSpan = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export const StyledImgAvatar = styled.img`
  width: 80px;
`;
export const StyledName = styled.p`
  font-weight: 600;
`;
