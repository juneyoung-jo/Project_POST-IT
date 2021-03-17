import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

interface Props {
  embedId: string;
}

const YoutubeEmbed: React.FC<Props> = ({ embedId }) => (
  <Wrapper>
    <iframe
      width="853"
      height="480"
      // 추후 axios로 src를 받아와서 사용해야겠습니다.
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Wrapper>
);

export default YoutubeEmbed;
