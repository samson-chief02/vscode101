const form = document.querySelector('#recipe-form');
const nameInput = document.querySelector('#recipe-name');
const descriptionInput = document.querySelector('#recipe-description');
const recipeList = document.querySelector('#recipe-list');

function addRecipe(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!name || !description) {
    const emptyInput = !name ? nameInput : descriptionInput;
    emptyInput.setCustomValidity('Enter at least one non-space character.');
    emptyInput.reportValidity();
    emptyInput.addEventListener('input', () => emptyInput.setCustomValidity(''), {
      once: true
    });
    return;
  }

  const item = document.createElement('li');
  const recipeText = document.createElement('span');
  recipeText.textContent = `${name}: ${description}`;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', `Delete ${name}`);
  deleteButton.addEventListener('click', () => item.remove());

  item.append(recipeText, deleteButton);
  recipeList.append(item);
  form.reset();
  nameInput.focus();
}

form.addEventListener('submit', addRecipe);
