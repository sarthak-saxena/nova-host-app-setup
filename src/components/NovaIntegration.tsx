import React from "react"
import { NovaMeetingCard, NovaTimeUnit } from "@nova-components/meeting-card"
import * as GraphQLHooks from "@graphitation/apollo-react-relay-duct-tape";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import {
    NovaCentralizedCommandingProvider,
    NovaGraphQLProvider,
} from "@nova/react";
import { EntityCommand } from "@nova/types";
import { SchemaLink } from '@apollo/client/link/schema';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import { makeExecutableSchema } from "graphql-tools";
import { meetingResolvers } from "../resolvers/meetingResolvers";

const typeDefs = `
  type Meeting {
    objectId: String
    subject: String
    organizer: String
    startTime: String
    endTime: String
    meetingUrl: String
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


export const NovaIntegration: React.FunctionComponent = () => {
    return (
        <ApolloProvider client={client}>
            <FluentProvider theme={teamsLightTheme}>
                <NovaCentralizedCommandingProvider
                    commanding={{
                        trigger: ((trigger: EntityCommand) => new Promise((resolve, reject) => {
                            console.log("Entity Command Triggered", trigger)
                            return undefined
                        })) as any
                    }}>
                    <NovaGraphQLProvider graphql={GraphQLHooks as any}>
                        {/* <NovaTimeUnit
                            startTime={new Date("2020-04-01T05:00:00.000Z").toString()}
                            endTime={new Date("2020-04-01T05:30:00.000Z").toString()} /> */}
                        <NovaMeetingCard />
                    </NovaGraphQLProvider>
                </NovaCentralizedCommandingProvider>
            </FluentProvider>
        </ApolloProvider>
    )
}