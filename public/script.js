const students = [
  { name: "Aditya kumar jha", enrollment: "e23cseu1180", leetcodeUsername: "Hardik1752" },
  { name: "Unnati Sachdeva", enrollment: "E23CSEU1067", leetcodeUsername: "unnatisachdeva" },
  { name: "Dhruv", enrollment: "E23CSEU1031", leetcodeUsername: "dhruv_31" },
  { name: "Parth Azad", enrollment: "E23CSEU1032", leetcodeUsername: "parthazad08" },
  { name: "Keshav Agarwal", enrollment: "E23CSEU1563", leetcodeUsername: "keshav1105ag" },
  { name: "Vishant", enrollment: "E23CSEU1162", leetcodeUsername: "vixhanttt_" },
  { name: "Harsh", enrollment: "e23cseu1177", leetcodeUsername: "___HaRsH____" },
  { name: "Siddhanth Chauhan", enrollment: "E23CSEU1652", leetcodeUsername: "Siddhanth11" },
  { name: "Tushar Harsan", enrollment: "E23CSEU2451", leetcodeUsername: "TusharHarsan" },
  { name: "Divyansh jain", enrollment: "E23CSEU1042", leetcodeUsername: "divyansh_907" },
  { name: "Tanvi Kad", enrollment: "E23CSEU1185", leetcodeUsername: "TanviKad" },
  { name: "Himanshu Jangra", enrollment: "E23CSEU1498", leetcodeUsername: "01himanshuu" },
  { name: "Aryanshh Srivastava", enrollment: "E23CSEU1758", leetcodeUsername: "Aryanshh" },
  { name: "Sneha Choudhary", enrollment: "E23CSEU1069", leetcodeUsername: "Sneha51" },
  { name: "Prateek Pant", enrollment: "E23CSEU1130", leetcodeUsername: "prateekpant2204" },
  { name: "Abhinav Raghav", enrollment: "E23CSEU0250", leetcodeUsername: "Abhinav_Raghav" },
  { name: "MADHAV SHARMA", enrollment: "E23CSEU1401", leetcodeUsername: "MADHAV_SHARMA_09" },
  { name: "Mohd Kayes Ansari", enrollment: "E23CSEU1256", leetcodeUsername: "Ansakaysee21" },
  { name: "Arzoo Rai", enrollment: "e23cseu2419", leetcodeUsername: "e23cseu2419" },
  { name: "Prachi Rai", enrollment: "E23CSEU1605", leetcodeUsername: "prachirai" },
  { name: "Suryansh Singh", enrollment: "E23CSEU1989", leetcodeUsername: "SuryanshhRajput" },
  { name: "Udit Bhardwaj", enrollment: "E23CSEU0657", leetcodeUsername: "UditBhardwaj" },
  { name: "Gurjot Kaur", enrollment: "E23CSEU0745", leetcodeUsername: "Gurjotkaur11" },
  { name: "Utkarsh Katiyar", enrollment: "e23cseu2246", leetcodeUsername: "7rQ8BPhv1P" },
  { name: "Ujjwal Gupta", enrollment: "E23CSEU0921", leetcodeUsername: "ujjwalg056" },
  { name: "Srishti Sahi", enrollment: "E23CSEU0881", leetcodeUsername: "srishtisahi" },
  { name: "Disha Gupta", enrollment: "E23CSEU2039", leetcodeUsername: "DISHA__12" },
  { name: "RAVI PRATAP SINGH", enrollment: "E23CSEU0951", leetcodeUsername: "ravip7352" },
  { name: "Kalash Harchandani", enrollment: "E23CSEU0086", leetcodeUsername: "Kalash-Harchandani" },
  { name: "Yashvardhan Dhaka", enrollment: "E23CSEU1192", leetcodeUsername: "dhakayashvardhan72" },
  { name: "Anant Mishra", enrollment: "E23CSEU0324", leetcodeUsername: "anantmishra249" },
  { name: "SAUMYA SINGH", enrollment: "E23CSEU0856", leetcodeUsername: "Saumya_Singh06" }, 
  { name: "Anmol Shrivastava", enrollment: "E23CSEU0068", leetcodeUsername: "AnmolShrivastava" },
  { name: "Aarushi Arora", enrollment: "E23CSEU0268", leetcodeUsername: "aarushiarora18" },
  { name: "Avi Alok Kulshreshtha", enrollment: "E23CSEU2142", leetcodeUsername: "aviiiiiiiiiiiii" },
  { name: "Jasleen Kaur", enrollment: "E23CSEU1129", leetcodeUsername: "Jasleennn_Kaur" },
  { name: "Paramveer Singh", enrollment: "e23cseu0967", leetcodeUsername: "theparamvrsingh" },
  { name: "Akshat Pandey", enrollment: "e23cseu0666", leetcodeUsername: "Good_Coder_3231" },
  { name: "Tanishq Batra", enrollment: "E23CSEU1126", leetcodeUsername: "tanishq130805" },
  { name: "Ayush Anand", enrollment: "E23CSEU1459", leetcodeUsername: "Aayushiv01" },
  { name: "Aanchal Wadhwani", enrollment: "E23CSEU0071", leetcodeUsername: "aanchalw2005" }, 
  { name: "GARV MEHTA", enrollment: "E23CSEU0953", leetcodeUsername: "iamgarvmehta" },
  { name: "Manasvi Khanna", enrollment: "E23CSEU0056", leetcodeUsername: "manasvi1122" },
  { name: "Himanshi Chauhan", enrollment: "E23CSEU1513", leetcodeUsername: "YQfSJUfNEp" },
  { name: "Zorawar Singh", enrollment: "E23CSEU0233", leetcodeUsername: "zorawar_singh095" },
  { name: "Grisha Nagpal", enrollment: "e23cseu0035", leetcodeUsername: "grishanagpal" },
  { name: "Aashi", enrollment: "E23CSEU0726", leetcodeUsername: "AashiShukla" },
  { name: "Arsh Puri", enrollment: "e23cseu2159", leetcodeUsername: "arshpuri" },
  { name: "Akshita Singh", enrollment: "E23CSEU0030", leetcodeUsername: "akshitasingh06" },
  { name: "Upam kumar", enrollment: "e23cseu0647", leetcodeUsername: "UpamKumar" },
  { name: "Pranav Gupta", enrollment: "E23CSEU0301", leetcodeUsername: "pranav8316" },
  { name: "Shimon Anand", enrollment: "E23CSEU0697", leetcodeUsername: "shimonanand" },
  { name: "Vriddhi Jain", enrollment: "E23CSEU2042", leetcodeUsername: "vriddhi_jain" },
  { name: "Tanvi Dua", enrollment: "E23CSEU1444", leetcodeUsername: "tanvidua_" }
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
