document.addEventListener("DOMContentLoaded", function () {
  const host = window.location.hostname;

  const sourceField = document.getElementById("sourceField");
  if (sourceField) {
    sourceField.value = host;
  }

  const subjectField = document.getElementById("subjectField");
  if (subjectField) {
    subjectField.value = "Inquiry from " + host;
  }
});