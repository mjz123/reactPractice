import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const products = this.props.products;

        return (
            <tr>
                <td>{
                    products.stocked ?
                        products.name :
                        <span style={{'color': 'red'}}>
                            {products.name}
                        </span>
                }</td>
                <td>{products.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const row = [];
        const products = this.props.products;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let lastCategory = null;

        products.forEach((item, index) => {
            if (item.name.indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !item.stocked) {
                return;
            }

            if(item.category !== lastCategory) {
                row.push(
                    <ProductCategoryRow category={item.category} key={item.category}/>
                )
            }
            lastCategory = item.category;

            row.push(
                <ProductRow products={item} key={item.name}/>
            )
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </table>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    handleFilterTextChange = (e) => {
        this.props.onhandleFilterTextChange(e.target.value)
    };

    handleInStockChange = (e) => {
        this.props.onhandleInStockChange(e.target.checked)
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}/>
                <div>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}/>
                    Only show products in stock
                </div>
            </div>
        )
    }
}

class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    };

    handleInStockChange = (inStockOnly) => {
        this.setState({
            inStockOnly: inStockOnly
        })
    };

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onhandleFilterTextChange={this.handleFilterTextChange}
                    onhandleInStockChange={this.handleInStockChange}/>
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}

export default FilterableProductTable