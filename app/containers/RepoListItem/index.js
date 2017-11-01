/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const content = (
      <Wrapper>
       
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
};
export default connect(createStructuredSelector({
}))(RepoListItem);
