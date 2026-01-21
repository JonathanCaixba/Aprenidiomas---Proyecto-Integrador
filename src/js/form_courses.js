const container = document.getElementById("courses-container");

fetch("courses.json")
  .then(res => res.json())
  .then(courses => {
    courses.forEach(course => {
      const article = document.createElement("article");
      article.classList.add("course");

      article.innerHTML = `
        <img src="${course.image}" class="courses-img" />
        <header>
          <h1 class="course-header">${course.title}</h1>
          <p class="course-description">${course.description}</p>
        </header>
        <div class="course-financing">
          <p class="course-price">${course.price}</p>
          <div class="course-reviews">
            <span>${course.rating}</span>
            <span>${course.level}</span>
            <span>${course.tag}</span>
          </div>
          <div class="buttons">
            <button class="btn-courses buy">Comprar</button>
            <button class="btn-courses outline">Ver curso</button>
          </div>
        </div>
      `;

      container.appendChild(article);
    });
  })
  .catch(err => console.error("Error cargando cursos", err));
