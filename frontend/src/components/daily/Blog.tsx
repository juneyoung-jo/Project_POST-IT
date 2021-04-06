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
  const [blog, setBlog] = useState([] as any);
  const [tmp, setTmp] = useState([] as any);
  const [blogId, setBlogId] = useState([] as any);
  const [category, setCategory] = useState(1);
  useEffect(() => {
    async function setContent() {
      // axios 요청
      const data = await cartegorySearch(category);
      // console.log(data);
      setBlog(data.data.data);
      setTmp(data.data.data);
      const blogList = localStorage.getItem('blogList');

      if (blogList) {
        console.log('---------------');
        setBlogId(blogList);
      }
    }
    setContent();

    return () => {
      // 해당 컴포넌트가 사라질 때
      setBlog([]);
      setTmp([]);
    };
  }, [category]);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const youtubeList = localStorage.getItem('youtubeList');
    console.log('useEff : ' + blogId);
    if (blogId.length == 0) return;

    if (blogId !== 'flag') localStorage.setItem('blogList', blogId);
    else localStorage.removeItem('blogList');
    const user: object = {
      name: name as any,
      blogList: blogId == 'flag' ? [] : (blogId?.split(',') as any),
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

  let clickTab = (data: any) => {
    return new Promise((resolve, reject) => {
      const blogList = localStorage.getItem('blogList');
      let methods = blogId.concat(',' + data);
      let size = blogList === null ? 0 : 1;
      if (size == 0) {
        methods = blogId.concat(data);
      }
      // setBlogId(methods, () => {
    });
  };

  async function idAdd(data: any) {
    // clickTab(data);
    // await clickTab(data);
    if (blogId == 'flag') setBlogId('');
    const blogList = localStorage.getItem('blogList');
    // const name = localStorage.getItem('name');
    // const youtubeList = localStorage.getItem('youtubeList');
    let methods = blogId.concat(',' + data);
    console.log(methods);
    let size = blogList === null ? 0 : 1;
    if (size == 0) {
      methods = data;
    }
    setBlogId(methods);
    console.log(blogId);
    // localStorage.setItem('blogList', blogId);
    // const user: object = {
    //   name: name as any,
    //   blogList: blogList === '' ? [] : (blogList?.split(',') as any),
    //   youtubeList: youtubeList === '' ? [] : (youtubeList?.split(',') as any),
    // };
    // setCurrentUser(user).then((res) => {
    //   console.log(res);
    //   console.log('11111111111111');
    // });
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
            <CardButtonGroup
              checked={blogId.indexOf(res.id) >= 0 ? true : false}
              id={res.id}
              idAdd={idAdd}
              idRemove={idRemove}
            ></CardButtonGroup>
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
      <Title>최신 블로그 게시물들을 가져왔어요📌 </Title>
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
          <SubTitle>내 관심분야</SubTitle>
          <Switch filterCard={filterCard}></Switch>
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
