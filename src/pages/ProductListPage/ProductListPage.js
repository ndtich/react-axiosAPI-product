import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionFetchProductsRequest, actionDeleteProductRequest } from './../../actions/index'; 

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProduct();
    }

    onDelete = (id) => {
        this.props.deleteProduct(id);
        
    }

    render() {
        //var { products } = this.props;
        var { products } = this.props;
        
        
        
        return (
            <div>
                
                <Link to="/product/add" className="btn btn-danger">Thêm sản phẩm</Link>
                
                <ProductList>
                    { this.showProduct(products) }
                </ProductList>
            </div>
        );
    }

    showProduct(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (<ProductItem 
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />);
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actionFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actionDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
