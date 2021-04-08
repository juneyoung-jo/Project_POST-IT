import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//슬라이드 토글 스위치
export const SliderSwitch = styled.label`
  margin-left: 8px;
  margin-bottom: 3.5px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
  span:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 26px;
    left: 4px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + span {
    background: rgb(128, 75, 216);
    background-color: linear-gradient(45deg, #804bd8, #544ad8);
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

// 카드 컴포넌트 제작
export const StyledCard = styled(Card)`
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    & .cardimg {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    transition: 0.2s all;
    transform: scale(1.02);
  }
  .cardimg-wrapper {
    position: relative;
    overflow: hidden;
    min-height: 200px;
  }

  .cardimg-inner {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .cardimg {
    width: 100%;
    height: 100%;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .content {
    height: 100%;
    display: 'flex';
    flex-direction: 'column';
  }
  .inner {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: space-between;
    background-color: #201d29;
    color: #b6b7b8;
  }

  // 북마크 체크시 색
  .bookmark {
    color: #804bd8;
  }
` as typeof Card;

export const StyledSelect = styled(Select)`
  svg {
    fill: #f2f3f6;
  }
  .MuiSelect-root {
    background-color: #332c40;
    color: #e2e3e6;
    padding: 10px;
  }
  .item {
    background-color: #2d2839 !important;
    padding: 5px;
  }
` as typeof Select;

// 타이틀 & 카드 내부 속성들
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.first};
  display: flex;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  padding-right: 1rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  line-height: 24px;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.text.second};
  display: flex;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0 0.5rem;
  letter-spacing: 0.5px;
  line-height: 24px;
`;

const CardWrapper = styled.div`
  font-family: 'Circular Std', 'Noto Sans KR', 'Open Sans', sans-serif;
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #201d29;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const CardInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const CardTitle = styled.a`
  color: ${({ theme }) => theme.colors.text.second};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
  word-break: keep-all;
  letter-spacing: 0.5px;
  line-height: 32px;
`;
const CardCompany = styled.p`
  color: ${({ theme }) => theme.colors.text.second};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
`;

const CardDate = styled.p`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.text.third};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardCompany,
  CardDate,
};
