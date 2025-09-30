// Generated for project: dream-todo-app
class AddTodo {
  constructor(todoList) {
    this.todoList = todoList
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    const form = document.getElementById('add-todo-form')
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.handleSubmit(e)
      })
    }
  }

  handleSubmit(e) {
    const input = e.target.querySelector('.todo-input')
    const text = input.value.trim()
    
    if (text) {
      this.todoList.addTodo(text)
      input.value = ''
    }
  }

  render() {
    const container = document.getElementById('add-todo')
    if (!container) return

    container.innerHTML = `
      <form id="add-todo-form" class="add-todo-form">
        <div class="form-group">
          <input type="text" class="todo-input form-input" placeholder="Add a new todo..." required>
          <button type="submit" class="btn btn-primary">Add Todo</button>
        </div>
      </form>
    `
  }
}