import React from 'react'
import { connect } from 'react-redux';

import { Header, List, Image } from 'semantic-ui-react';

import { getSelectedFoodCategory } from '../store/actions'

const CategoryList = props => {
    return (
        <>
            <Header as='h3'>Meal Categories</Header>
            <List selection animated size='big' verticalAlign="middle">
            {
                props.foodCategories.map(cat => (
                    <List.Item key={cat.idCategory} onClick={() => props.getSelectedFoodCategory(cat.strCategory)}>
                        <Image avatar src={cat.strCategoryThumb} />
                        <List.Content>
                            <List.Header>{cat.strCategory}</List.Header>
                            {/* <List.Description>{cat.strCategoryDescription.substring(0, 35) + '...'}</List.Description> */}
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

export default connect(mapStateToProps, { getSelectedFoodCategory })(CategoryList);