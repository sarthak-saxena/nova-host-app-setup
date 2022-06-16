import React, { Component } from "react";
import { App } from "./bootstrap";
import { SchemaLink } from '@apollo/client/link/schema';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import { NovaIntegration } from "./components/NovaIntegration";
import { makeExecutableSchema } from "graphql-tools";
import { meetingResolvers } from "./resolvers/meetingResolvers";
export interface MainProps {
    app: App;
}

const typeDefs = `
  type Meeting {
    subject: String
  }
  type Query {
    meetings: [Meeting]
  }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: { ...meetingResolvers }
});

const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
})

export class Main extends Component<MainProps, {}>
{
    constructor(props: MainProps) {
        super(props);
    }


    public render(): JSX.Element {
        return (
            <ApolloProvider client={client}>
                <NovaIntegration />
            </ApolloProvider>
        );
    }
}