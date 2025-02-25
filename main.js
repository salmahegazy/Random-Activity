let activities = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];

function pickActivity() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("displayActivity").innerHTML =
    activities[randomIndex];
}

function addActivity() {
  const newActivity = document.getElementById("newActivities").value.trim();
  if (newActivity !== "") activities.push(newActivity);
  document.getElementById("newActivities").value = "";
}
