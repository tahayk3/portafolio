export async function handler(event) {
  const { username } = event.queryStringParameters;

  if (!username) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing username parameter" }),
    };
  }

  const query = `
    {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
}
