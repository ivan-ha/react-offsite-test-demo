import React, {Component} from 'react';

class CountryList extends Component {
    constructor(props) {
        super(props);
    }

    onPressHandler = (country) => {
        console.log(`country: ${country}`);
    }

    render() {
        const items = this.props.countries.map((country) => {
            return (
                <li onClick={() => {this.onPressHandler(country)}}>
                    {country}
                </li>
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default CountryList;
