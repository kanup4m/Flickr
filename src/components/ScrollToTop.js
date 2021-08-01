import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return <div style={{ zIndex: '99' }}>
            sdsdsd
        </div>;
    }
}
export default withRouter(ScrollToTop);