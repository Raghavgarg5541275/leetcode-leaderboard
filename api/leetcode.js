// File: api/leetcode.js
import axios from "axios";

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const query = `
    query {
      matchedUser(username: "${username}") {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      { query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const userData = response.data.data.matchedUser;

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    const totalSolved = userData.submitStatsGlobal.acSubmissionNum.find(
      (item) => item.difficulty === "All"
    ).count;

    const rank = userData.profile.ranking;

    return res.status(200).json({
      username,
      totalSolved,
      rank,
    });
  } catch (err) {
    console.error("Failed to fetch:", err.message);
    return res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
}
