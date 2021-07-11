import React, { Component } from 'react'
import { Navigation } from "react-minimal-side-navigation";

// import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default class Navi extends Component {
    render() {
        return (
            <Navigation
                items={[
                    {
                        title: "Dashboard",
                        itemId: "/dashboard",
                    },
                    {
                        title: "Statistics",
                        itemId: "/statistics",
                    },
                    {
                        title: "Family",
                        itemId: "/family",
                    },
                    {
                        title: "Doctors",
                        itemId: "/doctors",
                    }
                ]}
            />
        )
    }
}
