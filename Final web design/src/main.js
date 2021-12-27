{
  let first_category = document.getElementById("first_category");
  let second_category = document.getElementById("second_category");
  let third_category = document.getElementById("third_category");
  let first_text = document.getElementById("first_description");
  let second_text = document.getElementById("second_description");
  let third_text = document.getElementById("third_description");
  first_category.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#2080b8";
    second_category.style.backgroundColor = "initial";
    third_category.style.backgroundColor = "initial";
    first_text.style.display = "initial";
    second_text.style.display = "none";
    third_text.style.display = "none";
  });
  second_category.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#2080b8";
    first_category.style.backgroundColor = "initial";
    third_category.style.backgroundColor = "initial";
    first_text.style.display = "none";
    second_text.style.display = "initial";
    third_text.style.display = "none";
  });
  third_category.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#2080b8";
    first_category.style.backgroundColor = "initial";
    second_category.style.backgroundColor = "initial";
    first_text.style.display = "none";
    second_text.style.display = "none";
    third_text.style.display = "initial";
  });
}
