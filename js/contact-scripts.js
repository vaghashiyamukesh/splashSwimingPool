// PARTNERS SECTION
document.addEventListener("DOMContentLoaded", function () {
  const partners = [
    { file: "partner-swimgear.png", name: "Swim Gear Co." },
    { file: "partner-aquasafe.png", name: "AquaSafe" },
    { file: "partner-wavefun.png", name: "WaveFun" },
  ];

  const list = partners.map(
    (p) => `<li class='partner'><img src='Assets/partners/${p.file}' alt='${p.name}'></li>`
  );
  document.getElementById("partners").innerHTML = list.join("");

  // Generate initial code
  refreshCode();
});

// RANDOM CODE GENERATION
let currentCode = "";

function generateCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function refreshCode() {
  currentCode = generateCode();
  document.getElementById("codes").textContent = currentCode;
  document.getElementById("validationMessage").textContent = "";
  disableButton(true);
}

function disableButton(isDisabled) {
  const btn = document.getElementById("submit");
  btn.disabled = isDisabled;
  btn.style.opacity = isDisabled ? "0.5" : "1";
}

// VALIDATE CODE INPUT
document.getElementById("randomcodeInput").addEventListener("input", function () {
  const entered = this.value.trim();
  if (entered === currentCode) {
    document.getElementById("validationMessage").textContent = "✅ Code matched!";
    disableButton(false);
  } else {
    document.getElementById("validationMessage").textContent = "❌ Code does not match.";
    disableButton(true);
  }
});
