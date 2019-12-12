import React from 'react'
import { connect } from 'react-redux';

import { List, Image } from 'semantic-ui-react';

const CategoryList = props => {
    return (
        <List selection>
        {
            props.foodCategories.map(cat => (
                <List.Item key={cat.idCategory}>
                    <Image avatar src={cat.strCategoryThumb} />
                    <List.Content>
                        <List.Header>{cat.strCategory}</List.Header>
                        {/* <List.Description>{cat.strCategoryDescription.substring(0, 35) + '...'}</List.Description> */}
                    </List.Content>
                </List.Item>
            ))
        }
        </List>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        foodCategories: state.foodCategories
    }
}

export default connect(mapStateToProps, {})(CategoryList);