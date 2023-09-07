import styled from 'styled-components';

export const StyledSectionStats = styled.section`
  width: fit-content;

  margin: 0 auto 30px;
  border: 1px solid grey;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  padding: 16px;
`;

export const StyledStatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledItem = styled.li`
  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #${() =>
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)};
`;
