import React, { Component } from 'react'
import { Navigation } from "react-minimal-side-navigation";

export default class NaviBottom extends Component {
    render() {
        return (
            <div>
                <Navigation
                    items={[
                        {
                            title: "Log out",
                            itemId: "/logout",
                            elemBefore: () => <i className="fa fa-sign-out" aria-hidden="true"></i>
                        },
                    ]}
                />
            </div>
        )
    }
}
