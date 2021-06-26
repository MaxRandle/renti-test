import { List, ListItem, ListItemText } from "@material-ui/core";
import parse from "html-react-parser";
import { useQuery } from "urql";
import PropTypes from "prop-types";

/**
 *
 * @param {String} slug the book slug
 *
 */

const Book = ({ slug, ...rest }) => {
  const [result, reexecuteQuery] = useQuery({
    query: `
    {
      books(slug: "${slug}") {
        synopsis
        subjects
      }
    }
  `,
  });

  const { data, fetching, error } = result;

  return (
    !fetching && (
      <List {...rest}>
        <ListItem>
          <ListItemText
            primary="Subjects"
            secondary={parse(data.books[0].subjects)}
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Synopsis"
            secondary={parse(data.books[0].synopsis)}
          ></ListItemText>
        </ListItem>
      </List>
    )
  );
};

Book.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Book;
