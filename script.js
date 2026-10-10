// Fictional sample internship data for this learning project.
const internships = [
  {
    title: "Frontend Developer Intern",
    company: "BrightWeb",
    domain: "Full Stack",
    description: "Practice HTML, CSS, JavaScript, and responsive website development."
  },
  {
    title: "Full Stack Developer Intern",
    company: "CodeNest",
    domain: "Full Stack",
    description: "Learn how websites connect to APIs and backend services."
  },
  {
    title: "Python Developer Intern",
    company: "PyWorks",
    domain: "Python",
    description: "Build beginner-friendly Python programs and solve coding problems."
  },
  {
    title: "Python Automation Intern",
    company: "TaskFlow Labs",
    domain: "Python",
    description: "Explore simple scripts that automate repetitive tasks."
  },
  {
    title: "Data Analyst Intern",
    company: "DataBridge",
    domain: "Data Science",
    description: "Explore sample datasets and turn findings into clear reports."
  },
  {
    title: "Machine Learning Intern",
    company: "LearnAI",
    domain: "Data Science",
    description: "Discover introductory data analysis and machine learning concepts."
  },
  {
    title: "UI/UX Design Intern",
    company: "PixelCraft",
    domain: "UI/UX Design",
    description: "Practice accessible interface design and user-friendly layouts."
  },
  {
    title: "Product Design Intern",
    company: "NorthStar Studio",
    domain: "UI/UX Design",
    description: "Create simple wireframes and improve digital user experiences."
  }
];

const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const filterForm = document.getElementById("filterForm");
const resetButton = document.getElementById("resetButton");
const internshipList = document.getElementById("internshipList");
const status = document.getElementById("status");

function renderInternships() {
  try {
    const query = searchInput.value.trim().toLowerCase();
    const selectedDomain = domainFilter.value;

    const results = internships.filter((item) => {
      const searchableText = [
        item.title,
        item.company,
        item.domain,
        item.description
      ].join(" ").toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesDomain =
        selectedDomain === "all" || item.domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });

    internshipList.replaceChildren();

    if (results.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "empty";
      emptyMessage.textContent =
        "No internships found. Try another keyword or choose All domains.";
      internshipList.appendChild(emptyMessage);
      status.textContent = "0 internships found.";
      return;
    }

    const cards = results.map((item) => {
      const card = document.createElement("article");
      card.className = "card";

      const title = document.createElement("h3");
      title.textContent = item.title;

      const company = document.createElement("p");
      company.className = "company";
      company.textContent = `Company: ${item.company}`;

      const domain = document.createElement("span");
      domain.className = "domain";
      domain.textContent = item.domain;

      const description = document.createElement("p");
      description.className = "card-description";
      description.textContent = item.description;

      card.append(title, company, domain, description);
      return card;
    });

    internshipList.append(...cards);
    status.textContent = `${results.length} internship(s) found.`;
  } catch (error) {
    internshipList.replaceChildren();
    status.textContent =
      "Unable to display internships. Please refresh the page and try again.";
  }
}

searchInput.addEventListener("input", renderInternships);
domainFilter.addEventListener("change", renderInternships);

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderInternships();
});

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  domainFilter.value = "all";
  renderInternships();
});

renderInternships();
