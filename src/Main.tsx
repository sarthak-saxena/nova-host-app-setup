import React, { Component } from "react";
import { App } from "./App";
import { Hello } from "./components/Hello";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
export interface MainProps
{
    app: App;
}

export class Main extends Component<MainProps, {}>
{
    constructor(props: MainProps)
    {
        super(props);
    }
    

    public render(): JSX.Element
    {
        const client = new ApolloClient({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
            cache: new InMemoryCache()
          });
        return (
            <>
                <ApolloProvider client={client}>
                    <Hello message="React TypeScript Webpack Starter">
                        <div className="features">
                            <div>Webpack 5 + HMR</div>
                            <div>TypeScript + React</div>
                            <div>SCSS + Autoprefixing</div>
                        </div>
                    </Hello>
                </ApolloProvider>,
            </>
        );
    }
}