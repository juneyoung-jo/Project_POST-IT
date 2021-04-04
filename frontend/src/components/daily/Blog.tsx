import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { TurnedIn } from '@material-ui/icons';
import { StyledCard, StyledSelect } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { allBlog, cartegorySearch } from 'api/daily';
import LazyLoad from 'react-lazyload';
import { CardButtonGroup, Switch } from './Common';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { withStyles } from '@material-ui/core/styles';

// Base title
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
  display: flex;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.card.content};
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginTop: '25px',
      minWidth: 150,
      backgroundColor: '#201d29',
      border: '1.5px solid #858090',
      borderRadius: '5px',
    },
  }),
);

function MySelect(props: any) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <StyledSelect
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleChange}
          label="회사"
          defaultValue={1}
        >
          <MenuItem value={1}>카카오</MenuItem>
          <MenuItem className="item" value={2}>
            우아한 형제들
          </MenuItem>
          <MenuItem className="item" value={3}>
            쿠팡
          </MenuItem>
          <MenuItem className="item" value={4}>
            라인
          </MenuItem>
          <MenuItem className="item" value={5}>
            페이스북
          </MenuItem>
          <MenuItem className="item" value={6}>
            넷플릭스
          </MenuItem>
          <MenuItem className="item" value={7}>
            구글플레이
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  );
}

function Blog() {
  const [blog, setBlog] = useState([]);
  const [blogId, setBlogId] = useState([]);
  useEffect(() => {
    async function setContent() {
      // axios 요청
      const data = await allBlog();
      setBlog(data.data.data);
    }
    setContent();
    console.log(blogId);

    return () => {
      // 해당 컴포넌트가 사라질 때
    };
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

  function idAdd(data: any) {
    setBlogId(blogId.concat(data));
  }

  function idRemove(data: any) {
    setBlogId(blogId.filter((id) => data != id));
  }

  const cardList = blog.map((res: any) => (
    <Grid item xs={12} md={4} sm={6}>
      <StyledCard
        style={{
          borderRadius: '20px',
          height: '450px',
          backgroundColor: '#2e2e2e',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={res.image}
          alt="content image"
          style={{ objectFit: 'fill' }}
        />
        <div className="content">
          <div className="inner">
            <SubTitle>
              <a href={res.url}>{res.title}</a>
              <CardButtonGroup
                id={res.id}
                idAdd={idAdd}
                idRemove={idRemove}
              ></CardButtonGroup>
            </SubTitle>
            <SubTitle style={{ backgroundColor: '#201d29', marginTop: 'auto' }}>
              <p>{company[res.category]}</p>
              <p>{res.date}</p>
            </SubTitle>
          </div>
        </div>
      </StyledCard>
    </Grid>
  ));

  return (
    <div>
      <Title>최신 블로그 게시물</Title>
      <MySelect></MySelect>
      <Title style={{ fontSize: '16px', float: 'right' }}>
        내 관심 분야 <Switch></Switch>
      </Title>
      <br />
      <LazyLoad once>
        <Grid spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {cardList}
            </Grid>
          </Grid>
        </Grid>
      </LazyLoad>
    </div>
  );
}

export default Blog;
