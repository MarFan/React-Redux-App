import React from 'react';
import { connect } from 'react-redux';

import { Container, Header, Button } from 'semantic-ui-react';

import { getFoodCategories } from './store/actions'

import CategoryList from './components/CategoryList'

const App = props => {
  return (
    <Container className="App">
      <Header as="h1">Food!</Header>
      {props.foodCategories && <CategoryList />}
      <Button onClick={props.getFoodCategories}>Get a List</Button>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    foodCategories: state.foodCategories
  }
}

export default connect(mapStateToProps, { getFoodCategories })(App);
