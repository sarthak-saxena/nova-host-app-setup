import React, { Component } from "react";
import { App } from "./bootstrap";
import { NovaIntegration } from "./components/NovaIntegration";

export interface MainProps {
    app: App;
}
export class Main extends Component<MainProps, {}>
{
    constructor(props: MainProps) {
        super(props);
    }


    public render(): JSX.Element {
        return (
            <NovaIntegration />
        );
    }
}