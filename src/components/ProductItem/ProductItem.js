import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
       if(confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) { //eslint-disable-line
           this.props.onDelete(id);
       }
       else {

       }
    }
    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.price}$</th>
                <th>
                    
                    <span className={product.status === true ? 'label label-success' : 'label label-warning'}>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</span>
                </th>
                <th>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Cập nhật</Link>
                    <button onClick={() => this.onDelete(product.id)} type="button" className="ml-10 btn btn-danger">Xóa</button>
                </th>
            </tr>
        );
    }
}

export default ProductItem;
