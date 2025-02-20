import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

import size from '../../components/breakpoints';

const Tags = styled.div`
  margin: 0 0 20px 0;
  h3 {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.9em;
  }
`;

const Grid = styled.div`
  margin: 10px 0 20px 0;
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 10px;
  & > div {
    @media ${size.medium} {
      border-left: 1px solid ${p => p.theme.color.gray};
    }
    padding-left: 5px;
    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const Tag = styled.div`
  transition: all 0.1s;
  user-select: none;
  padding: 7px 10px;
  border: 1px solid ${p => p.color};
  /* border-radius: 15px; */
  text-align: center;
  margin: 4px;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover {
    background-color: ${p => p.theme.color.gray};
    border-color: ${p => p.theme.color.gray};
  }
  &.checked {
    background-color: ${p => p.color};
    color: ${p => p.theme.color.white};
    border-color: ${p => p.color};
    &:hover {
      background-color: ${p => p.theme.color.darkgray};
      border-color: ${p => p.theme.color.darkgray};
    }
  }
`;

const Show = styled.div`
  font-weight: 700;
  color: ${p => p.color};
  cursor: pointer;

  padding-left: 20px;
  position: relative;
  &:after {
    content: '›';
    top: -6px;
    left: 0;
    position: absolute;
    font-size: 1.5em;
  }
  &:hover {
    &:after {
      content: '»';
    }
  }
`;

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(e) {
    const { check } = this.props;
    check(e);
  }

  handleClick() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { tags, color } = this.props;
    const { show } = this.state;
    return (
      <Tags>
        <Show color={color} onClick={this.handleClick}>
          {show ? 'Hide' : 'Show'} filter
        </Show>
        <Fade collapse when={show}>
          <Grid>
            <h3>Tags:</h3>
            <div>
              <div>
                {Object.keys(tags)
                  .sort()
                  .map(each => (
                    <Tag
                      color={color}
                      key={uuid()}
                      onClick={() => this.handleCheckbox(each)}
                      className={tags[each] ? 'checked' : ''}
                    >
                      <label htmlFor={each}>
                        <input type="checkbox" name={each} id={each} defaultChecked={tags[each]} />
                      </label>
                      {each}
                    </Tag>
                  ))}
              </div>
            </div>
          </Grid>
        </Fade>
      </Tags>
    );
  }
}

Filter.propTypes = {
  check: PropTypes.func.isRequired,
  tags: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};
