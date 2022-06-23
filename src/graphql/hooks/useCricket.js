import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.devcdc.com/cricket`;

const graphQLClient = new GraphQLClient(API_URL);

export function useCricketData() {
  return useQuery(["get-posts"], async () => {
    const { newSchedule } = await graphQLClient.request(gql`
      query {
        newSchedule(type: "All", status: "upcoming", page: 1) {
          seriesID
          matchType
          seriesName
          seriesView
          league
          seriesAvailable
        }
      }
    `);
    return newSchedule;
  });
}
