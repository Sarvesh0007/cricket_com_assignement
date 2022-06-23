import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.devcdc.com/cricket`;

const graphQLClient = new GraphQLClient(API_URL);

export function useCricketData({ activeTab, league }) {
  return useQuery(["get-posts", activeTab, league], async ({ queryKey }) => {
    const { newSchedule } = await graphQLClient.request(
      gql`
        query schedule($type: String!, $status: String!) {
          newSchedule(type: $type, status: $status, page: 1) {
            matches {
              matchNumber
              venue
              matchdate
              matchStatus
              matchType
              homeTeamID
              homeTeamName
              phaseOfInningFlag
              awayTeamID
              awayTeamName
              teamsWinProbability {
                homeTeamShortName
                homeTeamPercentage
                awayTeamPercentage
                awayTeamShortName
              }
              matchScore {
                teamShortName
                teamFullName
                teamID
                teamScore {
                  inning
                }
              }
            }
            seriesID
            matchType
            seriesName
            seriesView
            league
            seriesAvailable
          }
        }
      `,
      {
        status: queryKey[1],
        type: queryKey[2],
      }
    );
    return newSchedule;
  });
}
