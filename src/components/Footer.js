import React, { Component } from 'react';
import {EuiBottomBar, EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';
import {withRouter} from "react-router-dom";
import Navigation from "../utils/navigation";


class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabHref: window.location.pathname,
        };
    }

    onSelectedTabChanged = href => {
        this.setState({
            selectedTabHref: href,
        });
    };

    renderTabs() {
        return Navigation.buildTabs().map((tab, index) => (
            <EuiFlexItem grow={false} key={index}>
                <EuiButton color="ghost" size="s" iconType="help"
                           selected={tab.href === this.state.selectedTabHref}
                           disabled={tab.disabled}
                           onClick={() => {
                               this.onSelectedTabChanged(tab.href);
                               this.props.history.push(tab.href)
                           }}>
                    {tab.name}
                </EuiButton>
            </EuiFlexItem>
        ));
    }

    render() {
        return (
            <EuiBottomBar className={"footer"}>
                <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem grow={false} className={"mobile-hide"}>
                        <EuiFlexGroup gutterSize="s">
                            {this.renderTabs()}
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup gutterSize="s">
                            <EuiFlexItem grow={false} className={"center"}>
                                <p>Auto review {(new Date()).getFullYear()}</p>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiBottomBar>
        );
    }
}
export default withRouter(Footer);
