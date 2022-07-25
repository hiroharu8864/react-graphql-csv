import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { GitHubRepos } from "../type/GitHubRepos";

const getLoginUserReposQuery = `
query loginUserRepository($loginUser: String!, $firstFetchNums: Int!) {
  repositoryOwner(login: $loginUser) {
    repositories(privacy: PUBLIC, first: $firstFetchNums) {
      edges{
        node {
          createdAt
          name
        }
      }
    }
  }
}
`;
const loginUserReposName = "hiroharu8864";
const first = 100;

export const useGetRepos = () => {
  const access_token = "ghp_token";
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const { data, error } = useSWR<GitHubRepos>(
    [getLoginUserReposQuery, loginUserReposName, first],
    (query, loginUser, firstFetchNums) =>
      client.request(query, {
        loginUser: loginUserReposName,
        firstFetchNums: first
      }),
    {
      suspense: true
    }
  );

  return { data, error };
};
