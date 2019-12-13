import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { Container, Grid, Header, Button } from 'semantic-ui-react';

import { getFoodCategories } from './store/actions'

import CategoryList from './components/CategoryList'
import CategorySelected from './components/CategorySelected';
import MealDetails from './components/MealDetails';

const App = props => {
  return (
    <Container className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h1">Food!</Header>
          </Grid.Column>
          <Grid.Column>
            {props.isFetching && (
                <Loader type="Grid" color="gray" height={40} width={40} />
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            {
              props.foodCategories ? <CategoryList /> :
              (
                <Button onClick={props.getFoodCategories}>Get a List</Button>
              )
            }
          </Grid.Column>
          <Grid.Column width={5}>
            {
              props.foodCategorySelected ?
              <CategorySelected /> :
              null
            }
          </Grid.Column>
          <Grid.Column>
            {
              props.fullMealDetails ? <MealDetails /> : null
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    selectedCategory: state.selectedCategory,
    foodCategories: state.foodCategories,
    foodCategorySelected: state.foodCategorySelected,
    fullMealDetails: state.fullMealDetails
  }
}

export default connect(mapStateToProps, { getFoodCategories })(App);
