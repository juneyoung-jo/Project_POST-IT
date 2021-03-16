# 리액트 TIL

[toc]

> 오늘 배운 것들을 공유하기 위한 문서입니다.

## styled-components

### 모달창에 `keyframe` 애니메이션 적용하기

```react
...
// 1. styled-components에서 keyframes라는 속성을 불러와서 사용합니다.
import styled, { keyframes } from 'styled-components';

// 2. styled-components 사용과 동일한 방식으로 생성합니다.
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

// 3. 적용합니다. (위의 keyframes를 아래처럼 재사용할 수 있습니다.)
const BackGround = styled.div`
  ...
  animation: ${fadeIn} 0.2s;
`;

const ModalWrapper = styled.div`
  ...
  animation: ${fadeIn} 0.2s;
`;
```



## 테마 적용



