import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { TurnedIn } from '@material-ui/icons';
import { SliderSwitch, StyledCard } from './Daily.styles';
import { allYoutube } from 'api/daily';
import LazyLoad from 'react-lazyload';
import { CardButtonGroup, Switch } from './Common';
import {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardCompany,
  CardDate,
} from './Daily.styles';

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

function Youtube() {
  const [youtube, setYoutube] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);

  const [youtubeId, setYoutubeId] = useState([] as any);

  useEffect(() => {
    async function setContent() {
      const data = await allYoutube();
      setYoutube(data.data.data);
      setTmp(data.data.data);
    }
    setContent();
    console.log(youtubeId);

    return () => {};
  }, []);

  function idAdd(data: any) {
    setYoutubeId(youtubeId.concat(data));
  }

  function idRemove(data: any) {
    setYoutubeId(youtubeId.filter((id: any) => data != id));
  }

  const cardList = youtube.map((res: any) => (
    <Grid item xs={12} md={4} sm={6}>
      <StyledCard
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          height: '400px',
          backgroundColor: '#201d29',
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${res.youtubeId}/maxresdefault.jpg`}
          alt="content image"
          style={{ objectFit: 'cover', minHeight: '200px' }}
        />
        <CardWrapper>
          <div>
            <CardTitle href={res.url}>{res.title}</CardTitle>
            <CardButtonGroup
              checked={youtubeId}
              id={res.id}
              idAdd={idAdd}
              idRemove={idRemove}
            ></CardButtonGroup>
          </div>
          <CardInnerWrapper
            style={{ backgroundColor: '#201d29', marginTop: 'auto' }}
          >
            <CardDate></CardDate>
            <CardDate>{res.date}</CardDate>
          </CardInnerWrapper>
        </CardWrapper>
      </StyledCard>
    </Grid>
  ));

  // 토글 스위치 함수
  function filterCard(data: boolean) {
    console.log(data);
    if (data == true) {
      setYoutube(
        youtube.filter((res: any) => youtubeId.includes(res.id)) as any,
      );
    } else {
      setYoutube(tmp);
    }
  }

  return (
    <div>
      <Title> 유튜브 동영상</Title>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SubTitle>즐겨찾기</SubTitle>
          <Switch filterCard={filterCard}></Switch>
        </div>
      </div>
      <br />
      <Grid spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {cardList}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Youtube;
