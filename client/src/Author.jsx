import { List, ListItem, ListItemText } from "@material-ui/core";
import parse from "html-react-parser";
import Book from "./Book";
import { useQuery } from "urql";
import ListItemCollapsable from "./ListItemCollapsable";
import PropTypes from "prop-types";

/**
 *
 * @param {String} slug the author slug
 * @param {Object} className styles
 *
 */

const Author = ({ slug, ...rest }) => {
  const [result, reexecuteQuery] = useQuery({
    query: `
    {
      authors(slug: "${slug}") {
        biography
        books {
          title_slug
          title
        }
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
            primary="Biography"
            secondary={parse(data.authors[0].biography)}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Books" />
        </ListItem>
        {data.authors[0].books.map((book) => (
          <ListItemCollapsable key={book.title_slug} text={book.title}>
            <Book slug={book.title_slug} />
          </ListItemCollapsable>
        ))}
      </List>
    )
  );
};

Author.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Author;
