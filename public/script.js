const students = [
  { name: "Aditya Kumar Jha", enrollment: "E23CSEU1180", leetcodeUsername: "Hardik1752" },
  { name: "Unnati Sachdeva", enrollment: "E23CSEU1067", leetcodeUsername: "unnatisachdeva" },
  { name: "Dhruv", enrollment: "E23CSEU1031", leetcodeUsername: "dhruv_31" },
  { name: "Parth Azad", enrollment: "E23CSEU1032", leetcodeUsername: "parthazad08" },
  { name: "Keshav Agarwal", enrollment: "E23CSEU1563", leetcodeUsername: "keshav1105ag" },
  { name: "Vishant", enrollment: "E23CSEU1162", leetcodeUsername: "vixhanttt_" },
  { name: "Tanvi Dua", enrollment: "E23CSEU1444", leetcodeUsername: "tanvidua_" },
  { name: "Harsh", enrollment: "E23CSEU1177", leetcodeUsername: "___HaRsH____" }
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

window.onload = loadAllData;
