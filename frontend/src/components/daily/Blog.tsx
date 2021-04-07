import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { StyledCard, StyledSelect } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { allBlog, cartegorySearch } from 'api/daily';
import LazyLoad from 'react-lazyload';
import { CardButtonGroup, Switch } from './Common';
import FormControl from '@material-ui/core/FormControl';
import { setCurrentUser } from 'api/user';
import Select from '@material-ui/core/Select';
// import { tokenState } from 'index';
import { tokenState } from 'index';

// import { withStyles } from '@material-ui/core/styles';
import {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardCompany,
  CardDate,
} from './Daily.styles';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import { array } from '@amcharts/amcharts4/core';
import { ContactsOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginTop: '25px',
      minWidth: 150,
      border: '1.5px solid #858090',
      borderRadius: '5px',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
  }),
);

// const [user, setUser] = React.useState({
//   name: localStorage.getItem('name') as any,
//   blogList: localStorage.getItem('blogList') as any,
//   youtubeList: localStorage.getItem('youtubeList') as any,
// });
const list: string[] = [];

function MySelect(props: any) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // props 함수 처리
    props.change(event.target.value);
    setCategory(event.target.value as string);
  };
  return (
    <div style={{ paddingBottom: '25px' }}>
      <FormControl variant="filled" className={classes.formControl}>
        <StyledSelect
          native
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleChange}
          label="회사"
          // defaultValue={1}
        >
          <option className="item" value={1}>
            카카오
          </option>
          <option className="item" value={2}>
            우아한 형제들
          </option>
          <option className="item" value={3}>
            쿠팡
          </option>
          <option className="item" value={4}>
            라인
          </option>
          <option className="item" value={5}>
            페이스북
          </option>
          <option className="item" value={6}>
            넷플릭스
          </option>
          <option className="item" value={7}>
            구글플레이
          </option>
        </StyledSelect>
      </FormControl>
    </div>
  );
}

// Blog 컴포넌트
function Blog() {
  // blog : 전체 블로그를 저장할 array
  // blogId : 북마크된 id array
  // const [tokenLoadable, refetchToken] = useRecoilLoadableState(getToken);
  const [blog, setBlog] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);
  const [blogId, setBlogId] = useState([] as any);
  const [category, setCategory] = useState(1);
  const token = useRecoilValue(tokenState);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setAuthenticated(true);
    }

    async function setContent() {
      // axios 요청
      const data = await cartegorySearch(category);
      setBlog(data.data.data);
      setTmp(data.data.data);
      const blogList = localStorage.getItem('blogList');
      // refetchToken();

      if (blogList) {
        setBlogId(blogList);
      }
    }
    setContent();
    return () => {
      // 해당 컴포넌트가 사라질 때
      setBlog([]);
      setTmp([]);
      setAuthenticated(false);
    };
  }, [category]);

  useEffect(() => {
    // point1. 맨처음 접속 시 현재 blogList로 리퀘스트 한번 날아감 => 맞음
    // point2. 블로그 리스트 하나일 경우, remove하면 blogId는 flag만 남음 => 맞음
    // point3. 블로그 리스트가 하나일 경우, idAdd에서 blogId를 ''로 세팅 => 실행안됨
    //
    if (blogId.length == 0) return;

    const name = localStorage.getItem('name');
    const youtubeList = localStorage.getItem('youtubeList');
    if (blogId === 'flag') localStorage.removeItem('blogList');
    else localStorage.setItem('blogList', blogId);

    const user: object = {
      name: name as any,
      blogList: blogId === 'flag' ? [] : (blogId?.split(',') as any),
      youtubeList: youtubeList == null ? [] : (youtubeList?.split(',') as any),
    };
    setCurrentUser(user);
  }, [blogId]);

  const company: any = {
    1: '카카오',
    2: '우아한 형제들',
    3: '쿠팡',
    4: '라인',
    5: '페이스북',
    6: '넷플릭스',
    7: '구글플레이',
  };

  async function idAdd(data: any) {
    if (blogId === 'flag') setBlogId('');
    // point 2 예상 시나리오
    // 1. setBlogId('')로 가서, useEffect에서 blogId.length == 0 return => 실행 안됨
    const blFromStorage = localStorage.getItem('blogList');
    // *** bl === bloglist
    let blString = blogId.concat(',' + data);
    // 2. 1번이 실행 안되어서, blogId가 flag인 상태에서 concat data됨
    // 3. blString에는 flag, blogId가 들어가있음
    // 4. blogId가 flag이면, localStorage는 반드시 null임
    // console.log('idAdd ' + blogId);
    let size = blFromStorage === null ? 0 : 1;
    // 5. size가 무조건 0으로 됨
    if (size == 0) {
      // 6. blString data(=blogId)로 바뀜
      blString = data;
    }
    setBlogId(blString); // 7. blogId 하나로 setBlogId가 호출되어서 하나의 값만 잘 들어감
    // console.log('idAdd after ' + blogId); // 비동기라 setblogid 반영되기 전에 호출됨
    // 그래서 이때 blogId는 flag지만, 173 line의 setblogId가 완료되고 나면,
    // 변경될거라 무시해도됨.
  }

  function idRemove(data: any) {
    let idx = blogId.indexOf(data);
    // console.log(blogId.substring(data.length + 1));
    if (idx == 0) {
      if (blogId.length == data.length) {
        setBlogId('flag');
      } else {
        setBlogId(blogId.replace(data + ',', ''));
      }
      // console.log(blogId.substring(data.length + 1));
    } else {
      setBlogId(blogId.replace(',' + data, ''));
      // console.log(blogId.replace(',' + data, ''));
    }
  }

  function change(data: number) {
    setCategory(data);
  }
  const cardList = blog.map((res: any) => (
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
        {/* 카드 이미지 시작 */}
        <div className="cardimg-wrapper">
          <div className="cardimg-inner">
            <img
              className="cardimg"
              src={
                res.image ===
                  'https://www.woowahan.com/img/pc/common-logo.png' ||
                res.image ===
                  'https://line.me/static/940874c48d2369be137d812b15491843/f2838/icon-title-pc.png' ||
                res.image === 'null'
                  ? `/images/logo_${res.category}.png`
                  : res.image
              }
              alt="content image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* 카드 이미지 끝 */}

        {/* 카드 내용 시작 */}
        <CardWrapper>
          <div>
            <CardTitle href={res.url}>{res.title}</CardTitle>
            {authenticated ? (
              <>
                <CardButtonGroup
                  checked={blogId.indexOf(res.id) >= 0 ? true : false}
                  id={res.id}
                  idAdd={idAdd}
                  idRemove={idRemove}
                ></CardButtonGroup>
              </>
            ) : null}
          </div>
          <CardInnerWrapper>
            <CardDate>{res.date}</CardDate>
            <CardCompany>{company[res.category]}</CardCompany>
          </CardInnerWrapper>
        </CardWrapper>
        {/* 카드 내용 끝 */}
      </StyledCard>
    </Grid>
  ));
  function filterCard(data: boolean) {
    if (data == true) {
      setBlog(blog.filter((res: any) => blogId.includes(res.id)) as any);
    } else {
      setBlog(tmp);
    }
  }
  return (
    <div>
      <Title>최신 블로그 게시물들을 가져왔어요📌</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <MySelect change={change}></MySelect>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#e2e2e2',
          }}
        >
          {authenticated ? (
            <>
              <SubTitle>내 관심분야</SubTitle>
              <Switch filterCard={filterCard}></Switch>
            </>
          ) : null}
        </div>
      </div>
      <LazyLoad once>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              {cardList}
            </Grid>
          </Grid>
        </Grid>
      </LazyLoad>
    </div>
  );
}

export default Blog;
