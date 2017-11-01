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
        <div><strong>Match Number: {item.match_number}</strong></div>
        <div><strong>Location: {item.location}</strong></div>
        <div><strong>{item.datetime}</strong></div>
        <div><strong>Status: {item.status}</strong></div>
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
