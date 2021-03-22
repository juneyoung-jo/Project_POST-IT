import styled from 'styled-components';

function MyFolder() {
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    .d-flex {
      color: yellow;
    }
  `;

  return (
    <Wrapper color="red">
      <div className="d-flex djaskd">내 폴더</div>
    </Wrapper>
  );
}

export default MyFolder;
