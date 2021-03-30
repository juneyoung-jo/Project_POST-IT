import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function MyFolder() {
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
  `;
  const Test = styled.div`
    height: 500px;
    width: 300px;
    background-color: #fff;
    margin-bottom: 50px;
  `;
  return (
    <Wrapper color="red">
      <Test data-aos="fade-in"></Test>
      <Test data-aos="fade-in"></Test>
      <Test data-aos="fade-in"></Test>
      <Test data-aos="fade-in"></Test>
    </Wrapper>
  );
}

export default MyFolder;
