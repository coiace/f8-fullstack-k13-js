export function bindRows(wrapper, jobs) {
    jobs.forEach(job => {
      const div = document.createElement("div");
      div.classList.add("Todo");
      if (job.completed) div.classList.add("completed");
  
      div.setAttribute("data-id", job.id);
      div.innerHTML = `
        <p>${job.name}</p>
        <div>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      `;
  
      wrapper.appendChild(div);
    });
  }
  
  