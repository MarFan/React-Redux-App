import React from 'react';
import { connect } from 'react-redux';

import { List, Image, Header } from 'semantic-ui-react';
import { getFullMealDetails } from '../store/actions'

const CategorySelected = props => {
    return (
        <>
            <Header as='h3'>{props.selectedCategory}</Header>
            <List selection>
            {
                props.foodCategorySelected.map(meal => (
                    <List.Item key={meal.idMeal} onClick={() => props.getFullMealDetails(meal.idMeal)}>
                        <Image avatar src={meal.strMealThumb} />
                        <List.Content>
                            {meal.strMeal}
                        </List.Content>
                    </List.Item>
                ))
            }
            </List>
        </>
    )
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

export default connect(mapStateToProps, {getFullMealDetails})(CategorySelected);