import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="mt-10 panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>

                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* Product Item */}
                            { this.props.children }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
