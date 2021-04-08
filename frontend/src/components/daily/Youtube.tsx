import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { TurnedIn } from '@material-ui/icons';
import { SliderSwitch, StyledCard } from './Daily.styles';
import { allYoutube } from 'api/daily';
import LazyLoad from 'react-lazyload';
import { CardButtonGroup, Switch } from './Common';
import { setCurrentUser } from 'api/user';
import { API_BASE_URL } from 'config/config';

import { RecoilRoot, useRecoilState } from 'recoil';
import { tokenState } from 'index';

import {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardDate,
} from './Daily.styles';
import { AxiosResponse } from 'axios';

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

function Youtube() {
  const [youtube, setYoutube] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);
  const [status, setStatus] = useState({
    imageStatus: 'Loading',
    error: false,
  });
  const [youtubeId, setYoutubeId] = useState([] as any);

  const [token, setToken] = useRecoilState(tokenState);

  const request = (options: any) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }),
    );
  };

  function setCurrentUser(user: any) {
    if (!token) {
      return Promise.reject('No access token set.');
    }

    return request({
      url: API_BASE_URL + '/user/me',
      method: 'post',
      body: JSON.stringify(user),
    });
  }
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setAuthenticated(true);
    }
    async function setContent() {
      const data = await allYoutube();
      setYoutube(data.data.data);
      setTmp(data.data.data);
      const youtubeList = localStorage.getItem('youtubeList');

      if (youtubeList) {
        setYoutubeId(youtubeList);
      }
    }
    setContent();
    // console.log(youtubeId);

    return () => {};
  }, []);

  useEffect(() => {
    if (youtubeId.length == 0) return;

    const name = localStorage.getItem('name');
    const blogList = localStorage.getItem('blogList');
    if (youtubeId === 'flag') localStorage.removeItem('youtubeList');
    else localStorage.setItem('youtubeList', youtubeId);

    const user: object = {
      name: name as any,
      blogList: blogList == null ? [] : (blogList?.split(',') as any),
      youtubeList: youtubeId === 'flag' ? [] : (youtubeId?.split(',') as any),
    };
    setCurrentUser(user);
  }, [youtubeId]);

  function idAdd(data: any) {
    if (youtubeId === 'flag') setYoutubeId('');

    const ylFromStroage = localStorage.getItem('youtubeList');

    let ylString = youtubeId.concat(',' + data);

    let size = ylFromStroage === null ? 0 : 1;

    if (size == 0) {
      ylString = data;
    }
    setYoutubeId(ylString);
  }

  function idRemove(data: any) {
    let idx = youtubeId.indexOf(data);

    if (idx == 0) {
      if (youtubeId.length == data.length) {
        setYoutubeId('flag');
      } else {
        setYoutubeId(youtubeId.replace(data + ',', ''));
      }
    } else {
      setYoutubeId(youtubeId.replace(',' + data, ''));
    }
  }

  const cardList = youtube.map((res: any) => (
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
                  checked={youtubeId.indexOf(res.id) >= 0 ? true : false}
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
    // console.log(data);
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
          {authenticated ? (
            <>
              <SubTitle>즐겨찾기</SubTitle>
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
