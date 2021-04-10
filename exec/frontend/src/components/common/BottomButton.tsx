import { useState, useEffect } from 'react';
import 'assets/css/bottombutton.scss';

function ButtomButtom() {
  const [hide, setHide] = useState(false);

  // 스크롤 위치 변동 시 scrollListener 함수 실행
  useEffect(() => {
    // scrollY가 750을 넘을 경우 hide값을 true로 변경
    window.addEventListener('scroll', () => {
      setHide(scrollY > 1000);
    });
    return () => {};
  }, []);

  return (
    <div className={`wrapper ${hide ? 'hide' : 'display'}`}>
      <div className="arrow arrow-first"></div>
      <div className="arrow arrow-second"></div>
    </div>
  );
}

export default ButtomButtom;
