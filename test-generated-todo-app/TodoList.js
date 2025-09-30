// Generated for project: dream-todo-app
class TodoList {
  constructor() {
    this.todos = this.loadFromStorage()
    this.filter = 'all'
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('todo-toggle')) {
        this.toggleTodo(e.target.dataset.id)
      } else if (e.target.classList.contains('todo-delete')) {
        this.deleteTodo(e.target.dataset.id)
      }
    })

    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('filter-select')) {
        this.setFilter(e.target.value)
      }
    })
  }

  addTodo(text) {
    const todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    
    this.todos.push(todo)
    this.saveToStorage()
    this.render()
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      this.saveToStorage()
      this.render()
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id)
    this.saveToStorage()
    this.render()
  }

  setFilter(filter) {
    this.filter = filter
    this.render()
  }

  getFilteredTodos() {
    switch (this.filter) {
      case 'active': return this.todos.filter(t => !t.completed)
      case 'completed': return this.todos.filter(t => t.completed)
      default: return this.todos
    }
  }

  saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadFromStorage() {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  }

  render() {
    const container = document.getElementById('todo-list')
    if (!container) return

    const filteredTodos = this.getFilteredTodos()
    
    container.innerHTML = `
      <div class="todo-header">
        <h2>Todo List (${filteredTodos.length} items)</h2>
        <select class="filter-select">
          <option value="all" ${this.filter === 'all' ? 'selected' : ''}>All</option>
          <option value="active" ${this.filter === 'active' ? 'selected' : ''}>Active</option>
          <option value="completed" ${this.filter === 'completed' ? 'selected' : ''}>Completed</option>
        </select>
      </div>
      <div class="todo-items">
        ${filteredTodos.map(todo => `
          <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" class="todo-toggle" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <button class="todo-delete" data-id="${todo.id}">Delete</button>
          </div>
        `).join('')}
      </div>
    `
  }
}