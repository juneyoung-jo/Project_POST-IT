import React from 'react';
import { useStyles } from './material.styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemProps,
  Divider,
} from '@material-ui/core';

// top 3 더미데이터
let top3: any[] = [];
for (let i = 1; i < 4; i++) {
  top3.push({
    id: i,
    title: '안녕하세요 나는 타이틀입니다.',
    content: "I 'm Top" + i,
  });
}

// top10 더미데이터
let top10: any[] = [];
for (let i = 4; i < 11; i++) {
  top10.push({ title: 'top ' + i, content: "I 'm Top" + i });
}

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  const classes = useStyles();

  return (
    <>
      <ListItem button component="a" {...props} />
      <Divider className={classes.divider} />
    </>
  );
}

function SectionOne() {
  const classes = useStyles();

  return (
    <>
      {/* Top 3 시작 */}
      <Grid container spacing={2} justify="space-between">
        {top3.map((content, index) => (
          <Grid item xs={12} md={4} key={content.id}>
            <Card>
              <CardContent>
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 -92 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m77.671875 277.976562v34.386719c0 8.328125 6.75 15.078125 15.078125 15.078125h326.5c8.328125 0 15.078125-6.75 15.078125-15.078125v-34.386719zm0 0" />
                  <path d="m512 86.316406c0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.714844 21.855469-48.714844 48.71875c0 12.914063 5.058594 24.664063 13.292969 33.390625-14.644531 16.382813-35.910156 26.722657-59.558594 26.722657-38.28125 0-70.34375-27.0625-78.101562-63.054688 8.957031-8.839844 14.519531-21.109375 14.519531-34.65625 0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.71875 21.855469-48.71875 48.71875c0 13.546875 5.566406 25.816406 14.519531 34.65625-7.757812 35.992188-39.820312 63.054688-78.101562 63.054688-23.648438 0-44.914063-10.339844-59.558594-26.722657 8.234375-8.726562 13.296875-20.476562 13.296875-33.390625 0-26.863281-21.855469-48.71875-48.71875-48.71875s-48.71875 21.855469-48.71875 48.71875c0 23.28125 16.417969 42.789063 38.28125 47.578125 4.324219 35.6875 12.679688 79.167969 28.8125 113.925781h377.8125c16.132812-34.757812 24.488281-78.238281 28.8125-113.925781 21.863281-4.792969 38.28125-24.296875 38.28125-47.578125zm0 0" />
                </svg>
                <Typography color="textSecondary" gutterBottom>
                  Keyword of the Week
                </Typography>
                <Typography variant="h5" component="h2">
                  Top {index + 1} - {content.title}
                </Typography>
                <Typography color="textSecondary">tagname</Typography>
                <Typography variant="body2" component="p">
                  this is content. this is content. this is content.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Top3 끝 */}
      <List component="nav" aria-label="main mailbox folders">
        {top10.map((content) => (
          <ListItemLink
            className={classes.listitemlink}
            key={content.title}
            href="/report"
          >
            <h1>{content.title}</h1>
            <span>{content.content}</span>
          </ListItemLink>
        ))}
      </List>
    </>
  );
}

export default SectionOne;
