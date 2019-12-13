import React from 'react'
import { connect } from 'react-redux';

import { Image, Header } from 'semantic-ui-react';

const MealDetails = props => {
    console.log(props)
    return (
        <>
            <Header as='h3'>Meal</Header>
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

export default connect(mapStateToProps, { })(MealDetails);