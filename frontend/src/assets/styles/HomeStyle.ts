import styled from 'styled-components';

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .go-report {
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .text-center {
    text-align: center;
  }
  .text-start {
    text-align: start;
    margin-top: 1rem;
  }
  .text-end {
    text-align: end;
    margin-top: 1rem;
  }
`;

export const Title = styled.div`
  font-size: 5em;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  font-size: 1.5em;
  color: #fff;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContentText = styled.div`
  font-size: 200%;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SubContentText = styled.div`
  font-size: 100%;
  color: #fff;
  font-weight: 300;
`;

export const Img = styled.img`
  width: 100%;
`;
