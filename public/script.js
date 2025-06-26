// Replace with your real data when you get the LeetCode links
const students = [
  { name: "Aanchal Wadhwani", enrollment: "E23CSEU0071", leetcodeUsername: "aanchalw" },
  { name: "Aarushi Arora", enrollment: "E23CSEU0268", leetcodeUsername: "aarushi123" },
  { name: "Aashi", enrollment: "E23CSEU0726", leetcodeUsername: "aashi" },
  { name: "Raghav", enrollment: "E23CSEU0250", leetcodeUsername: "raghav_garg1" }
];

let leaderboardData = [];

async function fetchLeetCodeData(username) {
  try {
    const response = await fetch(`/api/leetcode?username=${username}`);
    if (!response.ok) throw new Error("User not found");
    const data = await response.json();
    return {
      totalSolved: data.totalSolved || 0,
      rank: data.rank || "N/A"
    };
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return {
      totalSolved: 0,
      rank: "N/A"
    };
  }
}

async function loadAllData() {
  leaderboardData = [];
  for (const student of students) {
    const leetData = await fetchLeetCodeData(student.leetcodeUsername);
    leaderboardData.push({
      name: student.name,
      enrollment: student.enrollment,
      problemsSolved: leetData.totalSolved,
      rank: leetData.rank
    });
  }

  leaderboardData.sort((a, b) => b.problemsSolved - a.problemsSolved);
  loadLeaderboard(leaderboardData);
}

function loadLeaderboard(data) {
  const tbody = document.getElementById("leaderboardBody");
  tbody.innerHTML = "";
  data.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.enrollment}</td>
      <td>${student.problemsSolved}</td>
      <td>${student.rank}</td>
    `;
    tbody.appendChild(row);
  });
}

function filterLeaderboard() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = leaderboardData.filter(s => s.name.toLowerCase().includes(input));
  loadLeaderboard(filtered);
}

// Load on page ready
window.onload = loadAllData;
