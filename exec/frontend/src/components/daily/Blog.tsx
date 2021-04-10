import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { StyledCard, StyledSelect } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { cartegorySearch } from 'api/daily';
import LazyLoad from 'react-lazyload';
import { CardButtonGroup, Switch } from './Common';
import FormControl from '@material-ui/core/FormControl';
import { tokenState } from 'index';
import { toggleState } from 'index';
import { setCurrentUser } from 'api/user';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Title,
  SubTitle,
  CardWrapper,
  CardInnerWrapper,
  CardTitle,
  CardCompany,
  CardDate,
} from './Daily.styles';

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
  // blogListLiked : 북마크된 id array
  // const [tokenLoadable, refetchToken] = useRecoilLoadableState(getToken);
  const [blog, setBlog] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);
  const [blogListLiked, setBlogListLiked] = useState([] as any);
  const [category, setCategory] = useState(1);
  const token = useRecoilValue(tokenState);
  const [authenticated, setAuthenticated] = useState(false);
  const [toggle, setToggle] = useRecoilState(toggleState);

  async function setContent() {
    // axios 요청
    let blogListInLS = localStorage.getItem('blogList');
    if (blogListInLS) {
      setBlogListLiked(blogListInLS);
    }
    const data = await cartegorySearch(category); // 기업 블로그 가져옴
    const blogList = data.data.data;
    if (toggle) {
      // 화면에 보일 데이터들 toggle ? filteredBlog : allBlog
      if (blogListInLS && blogListInLS.length !== 0) {
        setBlog(
          blogList.filter((blog: any) =>
            blogListInLS?.split(',').includes(blog.id),
          ) as any,
        );
      }
    } else {
      setBlog(blogList);
    }
    setTmp(blogList);
  }

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setAuthenticated(true);
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
    if (blogListLiked.length == 0) return;

    const name = localStorage.getItem('name');
    const youtubeList = localStorage.getItem('youtubeList');
    if (blogListLiked === 'flag') localStorage.removeItem('blogList');
    else localStorage.setItem('blogList', blogListLiked);

    const user: object = {
      name: name as any,
      blogList:
        blogListLiked === 'flag' ? [] : (blogListLiked?.split(',') as any),
      youtubeList: youtubeList == null ? [] : (youtubeList?.split(',') as any),
    };
    setCurrentUser(user, token);
  }, [blogListLiked]);

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
    if (blogListLiked === 'flag') setBlogListLiked('');
    const blFromStorage = localStorage.getItem('blogList');
    let blString = blogListLiked.concat(',' + data);
    let size = blFromStorage === null ? 0 : 1;
    if (size == 0) {
      blString = data;
    }
    setBlogListLiked(blString);
  }

  function idRemove(data: any) {
    let idx = blogListLiked.indexOf(data);
    if (idx == 0) {
      if (blogListLiked.length == data.length) {
        setBlogListLiked('flag');
      } else {
        setBlogListLiked(blogListLiked.replace(data + ',', ''));
      }
    } else {
      setBlogListLiked(blogListLiked.replace(',' + data, ''));
    }
  }

  function change(data: number) {
    setCategory(data);
    setToggle(toggle);
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
                  checked={blogListLiked.indexOf(res.id) >= 0 ? true : false}
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
    // blogListLiked => 해당 카테고리 blogList
    if (data == true) {
      setBlog(blog.filter((res: any) => blogListLiked.includes(res.id)) as any);
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
              <SubTitle>북마크</SubTitle>
              <Switch filterCard={filterCard} checked={false}></Switch>
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
