import { gql } from "@apollo/client";

export const FETCH_MEETINGS = gql`
  query meetings {
    meetings {
      subject
    }
  }
`;