import React, { useEffect, useRef, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Close from '@material-ui/icons/Close';

// styled-components에서 keyframe 애니메이션을 적용
const pulse = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

// styled-components에서 keyframe 애니메이션 사용시, css helper를 사용해주는게 좋다고한다.
//
const animation = css`
  ${pulse} 0.2s;
`;

const BackGround = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation};
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 500px;
  padding: 2rem;
  background: ${({ theme }) => theme.gradient.main};
  position: relative;
  z-index: 10;
  border-radius: 8px;
  animation: ${animation};

  @media screen and (max-width: 768px) {
    margin: 1rem 1rem;
    width: 100%;
  }
`;

const CloseButtonWrapper = styled.button`
  margin: 1rem 1rem;
  top: 0;
  right: 0;
  border: none;
  position: absolute;
  background-color: #4e4e4e;
  color: #c2c2c2;
  cursor: pointer;
  &:hover {
    color: #f2f2f2;
    transition: all 0.1s ease-in;
  }
`;

interface ModalProps {
  showModal: boolean;
  setShowModal: any;
  children?: any;
}

export const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  children, // 컴포넌트를 자식으로 넘겨받는다.
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 현재의 DOM(background)과 event.target이 같을 시 모달창 닫기
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // 현재 모달이 켜진 상태이고 esc를 눌렀으면 모달창 닫기
  // useCallback은 함수 실행에서 최적화를 하기 위함입니다.
  // 리액트는 부모 컴포넌트가 바뀌면 자식 컴포넌트들이 재랜더링하기때문에 이때 자식 컴포넌트의 함수가 다시 실행되서
  // 불필요한 리소스가 발생하게 됩니다. 이를 막기 위한 hook이라고 보면 됩니다. 자세한 내용은 공부중입니다.
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  });

  return (
    <>
      {showModal ? (
        <BackGround ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <CloseButtonWrapper>
              <Close
                aria-label="Close modal"
                onClick={() => {
                  setShowModal((prev: boolean) => !prev);
                }}
              />
            </CloseButtonWrapper>
            {children}
          </ModalWrapper>
        </BackGround>
      ) : null}
    </>
  );
};
