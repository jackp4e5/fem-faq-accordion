document.querySelectorAll(".question").forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentElement.classList.contains("activo")) {
      question.parentElement.classList.toggle("activo");
    } else {
      document
        .querySelectorAll(".question")
        .forEach((question) =>
          question.parentElement.classList.remove("activo")
        );
      question.parentElement.classList.add("activo");
    }
  })
);
