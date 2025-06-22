document.getElementById("ruleForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const condition = document.getElementById("conditionInput").value.trim();
  const action = document.getElementById("actionInput").value.trim();

  if (!condition || !action) return;

  const rule = document.createElement("div");
  rule.classList.add("rule-card");

  rule.innerHTML = `
    <div class="rule-condition">If <strong>${condition}</strong>,</div>
    <div class="rule-action">then <strong>${action}</strong>.</div>
  `;

  document.getElementById("customRules").appendChild(rule);
  document.getElementById("ruleForm").reset();
});
