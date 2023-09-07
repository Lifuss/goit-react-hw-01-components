import { styled } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTextBox = styled(Flex)`
  padding: 4px;
  margin-bottom: 16px;
`;
export const StyledProfile = styled(Flex)`
  width: fit-content;
  margin: 0 auto 30px;
  box-shadow: 1px 1px 3px gray, -1px -1px 3px gray;
  border-radius: 5px;
`;
export const StyledAvatarImg = styled.img`
  width: 300px;
  margin-bottom: 16px;
`;

export const StyledName = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledText = styled.p`
  color: teal;
  font-size: 14px;
`;

export const StyledStats = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  width: 120px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledQuantity = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
