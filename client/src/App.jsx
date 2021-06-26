import {
  Container,
  Divider,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Author from "./Author";
import { useQuery } from "urql";
import ListItemCollapsable from "./ListItemCollapsable";
import React from "react";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 2, 0),
  },
}));

function App() {
  const classes = useStyles();
  const [result, reexecuteQuery] = useQuery({
    query: `
    {
      authors {
        slug
        title
      }
    }
  `,
  });
  const { data, fetching, error } = result;

  return (
    <Container className={classes.flexColContainer} maxWidth="sm">
      <Typography className={classes.flexColItem} variant="h3">
        Explore the authors
      </Typography>

      {!fetching && (
        <List dense>
          {data.authors.map((author) => (
            <React.Fragment key={author.slug}>
              <ListItemCollapsable text={author.title}>
                <Author slug={author.slug} />
              </ListItemCollapsable>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      {/* <Tree authors data={treeData} /> */}
    </Container>
  );
}

export default App;
