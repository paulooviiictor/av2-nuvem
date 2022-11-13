import React, { Link, Button, Row, Col } from "react"

class Header extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'black', paddingRight: '90em' }}>
                <ul style={{ listStyle: 'none', display: 'inline-flex' }}>
                    <li>
                        <a href="/" style={{ color: 'white' }}>Home</a>
                    </li>
                    &nbsp;
                    <li>
                        <a href="/vectors" style={{ color: 'white' }}>Vectors</a>
                    </li>
                    &nbsp;
                    <li>
                        <a href="/photos" style={{ color: 'white' }}>Photos</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Header;
