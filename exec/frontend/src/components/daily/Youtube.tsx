import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { StyledCard } from './Daily.styles';
import { allYoutube } from 'api/daily';
import { CardButtonGroup, Switch } from './Common';
import { setCurrentUser } from 'api/user';
import { useRecoilState } from 'recoil';
import { tokenState, toggleState, activeState } from 'index';

import {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardDate,
} from './Daily.styles';

function Youtube() {
  const [youtubeViewed, setYoutubeViewed] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);
  const [youtubeListLiked, setYoutubeListLiked] = useState('' as any);

  const [token] = useRecoilState(tokenState);
  const [toggle] = useRecoilState(toggleState);
  const [active] = useRecoilState(activeState);
  const [authenticated, setAuthenticated] = useState(true);

  async function setContent() {
    const data = await allYoutube();
    let youtubeListInLS = localStorage.getItem('youtubeList');
    if (youtubeListInLS) {
      setYoutubeListLiked(youtubeListInLS);
    }

    let allYoutubeData = data.data.data;
    if (toggle) {
      if (youtubeListInLS) {
        setYoutubeViewed(
          allYoutubeData.filter((res: any) =>
            youtubeListInLS?.includes(res.id),
          ) as any,
        );
      }
    } else {
      setYoutubeViewed(allYoutubeData);
    }
    setTmp(allYoutubeData);
  }

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setAuthenticated(true);
    }
    setContent();
    return () => {};
  }, []);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setAuthenticated(true);
    }
    setContent();
    return () => {};
  }, [active]);

  useEffect(() => {
    if (youtubeListLiked.length == 0) return;

    const blogList = localStorage.getItem('blogList');
    if (youtubeListLiked === 'flag') localStorage.removeItem('youtubeList');
    else localStorage.setItem('youtubeList', youtubeListLiked);

    setCurrentUser(
      {
        name: localStorage.getItem('name') as any,
        blogList:
          localStorage.getItem('blogList') == null
            ? []
            : (blogList?.split(',') as any),
        youtubeList:
          youtubeListLiked === 'flag'
            ? []
            : (youtubeListLiked?.split(',') as any),
      },
      token,
    );
  }, [youtubeListLiked]);

  function idAdd(data: any) {
    if (youtubeListLiked === 'flag') setYoutubeListLiked('');

    const ylFromStroage = localStorage.getItem('youtubeList');

    let ylString = youtubeListLiked.concat(',' + data);

    let size = ylFromStroage === null ? 0 : 1;

    if (size == 0) {
      ylString = data;
    }
    setYoutubeListLiked(ylString);
  }

  function idRemove(data: any) {
    let idx = youtubeListLiked.indexOf(data);

    if (idx == 0) {
      if (youtubeListLiked.length == data.length) {
        setYoutubeListLiked('flag');
      } else {
        setYoutubeListLiked(youtubeListLiked.replace(data + ',', ''));
      }
    } else {
      setYoutubeListLiked(youtubeListLiked.replace(',' + data, ''));
    }
  }

  const cardList = youtubeViewed.map((res: any) => (
    <Grid key={res.id} item xs={12} md={4} sm={6}>
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
          src={`https://img.youtube.com/vi/${res.youtubeId}/0.jpg`}
          alt="content image"
          style={{ objectFit: 'cover', minHeight: '200px' }}
        />
        <CardWrapper>
          <div>
            <CardTitle href={res.url}>{res.title}</CardTitle>
            {authenticated ? (
              <>
                <CardButtonGroup
                  checked={youtubeListLiked.indexOf(res.id) >= 0 ? true : false}
                  id={res.id}
                  idAdd={idAdd}
                  idRemove={idRemove}
                ></CardButtonGroup>
              </>
            ) : null}
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
    if (data == true) {
      setYoutubeViewed(
        youtubeViewed.filter((res: any) =>
          youtubeListLiked.includes(res.id),
        ) as any,
      );
    } else {
      setYoutubeViewed(tmp);
    }
  }

  return (
    <div>
      <Title> 유튜브 동영상</Title>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {authenticated ? (
            <>
              <SubTitle>북마크</SubTitle>
              <Switch filterCard={filterCard}></Switch>
            </>
          ) : null}
        </div>
      </div>
      <br />
      <Grid container spacing={4}>
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
