import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionAddProductRequest, actionGetProductRequest, actionUpdateProductRequest } from './../../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if(match) {
            var id = match.params.id;
            // callApi(`products/${id}`, 'GET', null).then(res => {
            //     var { id, name, price, status} = res.data;
            //     this.setState({
            //         id: id,
            //         txtName: name,
            //         txtPrice: price,
            //         chkbStatus: status
            //     })
                
            // })
            this.props.editProduct(id);

        }
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name= target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if(id) {
            // callApi(`products/${id}`, 'PUT',{
            //     name: txtName,
            //     price:  txtPrice,
            //     status: chkbStatus
            //  }).then(res => {
            //     //history.push('/');
            //     history.goBack();
            //  });
            //console.log(product);
            this.props.updateProduct(product);
        } else {
            // callApi('products', 'POST',{
            //     name: txtName,
            //     price:  txtPrice,
            //     status: chkbStatus
            //  }).then(res => {
            //      //console.log(res);
            //      //history.push('/');
            //      history.goBack();
            //  });
            this.props.addProduct(product);
        }
        history.goBack();
        
    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="text-right">
                        <Link to="/products" className="btn btn-danger">
                            Trở lại
                        </Link>
                        </div>
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input 
                                name="txtName" 
                                value={txtName}
                                onChange={this.onChange}
                                type="text" 
                                className="form-control" 
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input 
                                name="txtPrice" 
                                value={txtPrice}
                                onChange={this.onChange}
                                type="number" 
                                className="form-control" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Trạng thái</label>
                                <div className="checkbox">
                                    <label>
                                        <input 
                                        name="chkbStatus"
                                        value={chkbStatus}
                                        onChange={this.onChange}
                                        type="checkbox"
                                        checked={chkbStatus}
                                        />
                                        Còn hàng
                                    </label>
                                </div>
                            </div>
                        
                            <button type="submit" className="btn btn-primary">Thêm</button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct : (product) => {
            dispatch(actionAddProductRequest(product));
        },
        editProduct : (id) => {
            dispatch(actionGetProductRequest(id));
        },
        updateProduct : (product) => {
            dispatch(actionUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
