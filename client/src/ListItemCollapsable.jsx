import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ChevronRight, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: "40px",
  },
  nested: {
    marginLeft: theme.spacing(2),
  },
}));

/**
 *
 * @param {String} text text to be displayed in the ListItemText component
 * @param {JSXElement} children children to be displayed within the Collapse component
 *
 */

const ListItemCollapsable = ({ text, children, ...rest }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem button onClick={handleClick} {...rest}>
        <ListItemIcon className={classes.listItemIcon}>
          {expanded ? <ExpandMore /> : <ChevronRight />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
      <Collapse
        className={classes.nested}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        {children}
      </Collapse>
    </>
  );
};

ListItemCollapsable.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ListItemCollapsable;
