import { useStyles } from './Section.styles';
import { ChartPropsType } from 'types/report/chartTypes';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemProps,
} from '@material-ui/core';

import {
  Top10Inner,
  Top10Counts,
  RateWrapper,
  RateInner,
} from './Section.styles';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

function Rate(props: { rate: number; vote: number }) {
  return (
    <RateWrapper>
      <svg
        id="fi_3179967"
        enableBackground="new 0 0 24 24"
        height="40"
        width="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.rate === 0 ? 'gold' : props.rate === 1 ? 'silver' : 'brown'}
      >
        <g>
          <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm6.989 10.044-1.087 6.333c-.062.36-.374.623-.739.623h-10.326c-.365 0-.677-.263-.739-.623l-1.087-6.333c-.048-.277.064-.558.289-.727.226-.17.525-.197.779-.074l2.894 1.409 2.372-4.267c.264-.477 1.047-.477 1.311 0l2.372 4.267 2.894-1.409c.253-.123.553-.096.779.074.224.169.336.45.288.727z"></path>
        </g>
      </svg>
      <RateInner>
        <div>
          <span>주간 키워드</span>
          <span>Top {props.rate + 1}</span>
        </div>
        <div>
          <span>votes</span>
          <span>{props.vote}</span>
        </div>
      </RateInner>
    </RateWrapper>
  );
}

function SectionOne(props: ChartPropsType) {
  const classes = useStyles();

  let top3 = [...props.data].slice(0, 3);
  let top10 = [...props.data].slice(3);

  return (
    <>
      {/* Top 3 시작 */}
      <Grid container spacing={2} justify="space-between">
        {top3.map((content, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className={classes.card}>
              <ListItemLink
                href={`https://stackoverflow.com/questions/${content.contentId}`}
                className={classes.top3Link}
              >
                <CardContent className={classes.cardContent}>
                  <div>
                    <Rate vote={content.count} rate={index} />
                    <Divider style={{ marginBottom: '8px' }} />
                  </div>
                  <Typography variant="h5" style={{ margin: '8px 0' }}>
                    {content.title}
                  </Typography>
                  <Typography
                    className={classes.date}
                    variant="body2"
                    component="p"
                  >
                    {content.creation_date.slice(0, 10)}
                  </Typography>
                </CardContent>
              </ListItemLink>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Top3 끝 */}
      <List component="ul" aria-label="top 4 to 10">
        {top10.map((content, index) => (
          <li key={index}>
            <ListItemLink
              className={classes.top10Link}
              href={`https://stackoverflow.com/questions/${content.contentId}`}
            >
              <Top10Counts>
                <span>{content.count}</span>
                <span>votes</span>
              </Top10Counts>
              <Top10Inner>
                <span>{content.title}</span>
                <span>{content.creation_date.slice(0, 10)}</span>
              </Top10Inner>
            </ListItemLink>
            <Divider className={classes.divider} />
          </li>
        ))}
      </List>
    </>
  );
}

export default SectionOne;
