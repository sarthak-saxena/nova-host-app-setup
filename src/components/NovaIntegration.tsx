import { useQuery } from "@apollo/client";
import * as React from "react"
import { FETCH_MEETINGS } from "../queries/meetingsQuery";
import { NovaMeetingCard } from "@nova-components/meeting-card"
import * as GraphQLHooks from "@graphitation/apollo-react-relay-duct-tape";

import {
    NovaCentralizedCommandingProvider,
    NovaGraphQLProvider,
} from "@nova/react";
import { EntityCommand } from "@nova/types";

export const NovaIntegration: React.FunctionComponent = () => {
    // const { loading, error, data } = useQuery(FETCH_MEETINGS);
    debugger
    return (
        <NovaCentralizedCommandingProvider
            commanding={((trigger: EntityCommand) => new Promise((resolve, reject) => { return undefined })) as any}>
            <NovaGraphQLProvider graphql={GraphQLHooks as any}>
                <NovaMeetingCard />
            </NovaGraphQLProvider>
        </NovaCentralizedCommandingProvider>
    )
}