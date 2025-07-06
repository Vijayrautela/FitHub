 function openModal() {
      document.getElementById("authModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("authModal").style.display = "none";
    }

    function showTab(tab) {
      const loginTab = document.getElementById("loginTab");
      const registerTab = document.getElementById("registerTab");
      const tabBtns = document.querySelectorAll(".tab-btn");

      loginTab.classList.add("hidden");
      registerTab.classList.add("hidden");
      tabBtns.forEach(btn => btn.classList.remove("active"));

      if (tab === "login") {
        loginTab.classList.remove("hidden");
        tabBtns[0].classList.add("active");
      } else {
        registerTab.classList.remove("hidden");
        tabBtns[1].classList.add("active");
      }
    }

    function saveUser() {
      const username = document.getElementById("regUsername").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      if (!username || !email || !password) {
        alert("Please fill all fields.");
        return;
      }

      const user = { username, email, password };
      localStorage.setItem("userData", JSON.stringify(user));
      alert("Registered successfully!");
      showTab("login");
    }

    function loginUser() {
      const input = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      const user = JSON.parse(localStorage.getItem("userData"));

      if (
        user &&
        (user.username === input || user.email === input) &&
        user.password === pass
      ) {
        alert("Login successful!");
        closeModal();
      } else {
        alert("Invalid credentials.");
      }
    }

    // Click outside to close modal
    window.onclick = function(e) {
      const modal = document.getElementById("authModal");
      if (e.target === modal) closeModal();
    };