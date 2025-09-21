// Visual Editor Component for DreamBuild
// Provides drag-and-drop interface for no-code development

import React, { useState, useEffect, useRef } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const VisualEditor = ({ projectId, onCodeChange, initialComponents = [] }) => {
  const [components, setComponents] = useState(initialComponents)
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [showProperties, setShowProperties] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 1200, height: 800 })
  const [zoom, setZoom] = useState(1)
  const canvasRef = useRef(null)

  // Component library
  const componentLibrary = [
    { type: 'container', name: 'Container', icon: '📦', category: 'Layout' },
    { type: 'text', name: 'Text', icon: '📝', category: 'Content' },
    { type: 'button', name: 'Button', icon: '🔘', category: 'Interactive' },
    { type: 'input', name: 'Input', icon: '📝', category: 'Form' },
    { type: 'image', name: 'Image', icon: '🖼️', category: 'Media' },
    { type: 'card', name: 'Card', icon: '🃏', category: 'Layout' },
    { type: 'header', name: 'Header', icon: '📋', category: 'Layout' },
    { type: 'footer', name: 'Footer', icon: '🦶', category: 'Layout' },
    { type: 'sidebar', name: 'Sidebar', icon: '📑', category: 'Layout' },
    { type: 'navbar', name: 'Navbar', icon: '🧭', category: 'Navigation' },
    { type: 'form', name: 'Form', icon: '📋', category: 'Form' },
    { type: 'table', name: 'Table', icon: '📊', category: 'Data' },
    { type: 'chart', name: 'Chart', icon: '📈', category: 'Data' },
    { type: 'modal', name: 'Modal', icon: '🪟', category: 'Overlay' },
    { type: 'dropdown', name: 'Dropdown', icon: '📋', category: 'Interactive' }
  ]

  // Generate component code
  const generateComponentCode = (component) => {
    const baseCode = {
      container: `<div className="container" style={${JSON.stringify(component.styles)}}>
  {children}
</div>`,
      text: `<p className="text" style={${JSON.stringify(component.styles)}}>
  ${component.content || 'Text content'}
</p>`,
      button: `<button className="btn" style={${JSON.stringify(component.styles)}} onClick={${component.onClick || '() => {}'}}>
  ${component.content || 'Button'}
</button>`,
      input: `<input 
  className="input" 
  type="${component.inputType || 'text'}"
  placeholder="${component.placeholder || ''}"
  style={${JSON.stringify(component.styles)}}
/>`,
      image: `<img 
  className="image" 
  src="${component.src || '/placeholder.jpg'}"
  alt="${component.alt || ''}"
  style={${JSON.stringify(component.styles)}}
/>`,
      card: `<div className="card" style={${JSON.stringify(component.styles)}}>
  <div className="card-header">
    <h3>${component.title || 'Card Title'}</h3>
  </div>
  <div className="card-body">
    <p>${component.content || 'Card content'}</p>
  </div>
</div>`,
      header: `<header className="header" style={${JSON.stringify(component.styles)}}>
  <h1>${component.content || 'Header'}</h1>
</header>`,
      footer: `<footer className="footer" style={${JSON.stringify(component.styles)}}>
  <p>${component.content || 'Footer content'}</p>
</footer>`,
      sidebar: `<aside className="sidebar" style={${JSON.stringify(component.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,
      navbar: `<nav className="navbar" style={${JSON.stringify(component.styles)}}>
  <div className="nav-brand">${component.brand || 'Brand'}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,
      form: `<form className="form" style={${JSON.stringify(component.styles)}} onSubmit={${component.onSubmit || '() => {}'}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,
      table: `<table className="table" style={${JSON.stringify(component.styles)}}>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
  </tbody>
</table>`,
      chart: `<div className="chart" style={${JSON.stringify(component.styles)}}>
  <canvas id="chart-${component.id}"></canvas>
</div>`,
      modal: `<div className="modal" style={${JSON.stringify(component.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${component.onClose || '() => {}'}}>&times;</span>
    <h2>${component.title || 'Modal Title'}</h2>
    <p>${component.content || 'Modal content'}</p>
  </div>
</div>`,
      dropdown: `<div className="dropdown" style={${JSON.stringify(component.styles)}}>
  <button className="dropdown-toggle" onClick={${component.onToggle || '() => {}'}}>
    ${component.label || 'Dropdown'}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`
    }

    return baseCode[component.type] || `<div>Unknown component: ${component.type}</div>`
  }

  // Generate complete app code
  const generateAppCode = () => {
    const imports = `import React, { useState, useEffect } from 'react';
import './App.css';`

    const componentCode = components.map(component => 
      generateComponentCode(component)
    ).join('\n\n')

    const appCode = `const App = () => {
  return (
    <div className="app">
      ${componentCode}
    </div>
  );
};

export default App;`

    return `${imports}\n\n${appCode}`
  }

  // Handle component drop
  const handleDrop = (item, monitor) => {
    const dropResult = monitor.getDropResult()
    if (!dropResult) return

    const newComponent = {
      id: `component-${Date.now()}`,
      type: item.type,
      name: item.name,
      position: { x: dropResult.x, y: dropResult.y },
      size: { width: 200, height: 100 },
      styles: {
        position: 'absolute',
        left: `${dropResult.x}px`,
        top: `${dropResult.y}px`,
        width: '200px',
        height: '100px',
        border: '1px solid #ddd',
        padding: '10px',
        backgroundColor: '#fff'
      },
      content: item.name,
      properties: {}
    }

    setComponents(prev => [...prev, newComponent])
  }

  // Handle component selection
  const handleComponentSelect = (component) => {
    setSelectedComponent(component)
    setShowProperties(true)
  }

  // Handle property change
  const handlePropertyChange = (property, value) => {
    if (!selectedComponent) return

    const updatedComponent = {
      ...selectedComponent,
      [property]: value,
      styles: {
        ...selectedComponent.styles,
        [property]: value
      }
    }

    setComponents(prev => 
      prev.map(comp => 
        comp.id === selectedComponent.id ? updatedComponent : comp
      )
    )

    setSelectedComponent(updatedComponent)
  }

  // Generate CSS
  const generateCSS = () => {
    const baseCSS = `
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text {
  margin: 0;
  font-family: Arial, sans-serif;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background: #007bff;
  color: white;
}

.btn:hover {
  background: #0056b3;
}

.input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.image {
  max-width: 100%;
  height: auto;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto;
}

.sidebar {
  background: #f8f9fa;
  padding: 20px;
  min-height: 100vh;
}

.navbar {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background: #f8f9fa;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li:hover {
  background: #f8f9fa;
}
`

    return baseCSS
  }

  // Export project
  const exportProject = () => {
    const projectData = {
      components,
      appCode: generateAppCode(),
      cssCode: generateCSS(),
      metadata: {
        projectId,
        exportedAt: new Date().toISOString(),
        componentCount: components.length
      }
    }

    const dataStr = JSON.stringify(projectData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `dreambuild-project-${projectId}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  // Notify parent of code changes
  useEffect(() => {
    if (onCodeChange) {
      onCodeChange({
        appCode: generateAppCode(),
        cssCode: generateCSS(),
        components
      })
    }
  }, [components, onCodeChange])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="visual-editor">
        <div className="editor-header">
          <h2>🎨 Visual Editor</h2>
          <div className="editor-controls">
            <button 
              className="btn btn-secondary"
              onClick={() => setPreviewMode(!previewMode)}
            >
              {previewMode ? 'Edit' : 'Preview'}
            </button>
            <button 
              className="btn btn-primary"
              onClick={exportProject}
            >
              Export
            </button>
          </div>
        </div>

        <div className="editor-layout">
          {/* Component Library */}
          <div className="component-library">
            <h3>📚 Component Library</h3>
            <div className="library-categories">
              {['Layout', 'Content', 'Interactive', 'Form', 'Media', 'Data', 'Navigation', 'Overlay'].map(category => (
                <div key={category} className="category">
                  <h4>{category}</h4>
                  <div className="category-components">
                    {componentLibrary
                      .filter(comp => comp.category === category)
                      .map(component => (
                        <DraggableComponent
                          key={component.type}
                          type={component.type}
                          name={component.name}
                          icon={component.icon}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="canvas-container">
            <div className="canvas-toolbar">
              <div className="canvas-controls">
                <button 
                  className="btn btn-sm"
                  onClick={() => setZoom(zoom * 0.8)}
                >
                  Zoom Out
                </button>
                <span className="zoom-level">{Math.round(zoom * 100)}%</span>
                <button 
                  className="btn btn-sm"
                  onClick={() => setZoom(zoom * 1.2)}
                >
                  Zoom In
                </button>
              </div>
              <div className="canvas-size">
                <select 
                  value={`${canvasSize.width}x${canvasSize.height}`}
                  onChange={(e) => {
                    const [width, height] = e.target.value.split('x').map(Number)
                    setCanvasSize({ width, height })
                  }}
                >
                  <option value="1200x800">Desktop (1200x800)</option>
                  <option value="768x1024">Tablet (768x1024)</option>
                  <option value="375x667">Mobile (375x667)</option>
                </select>
              </div>
            </div>

            <div 
              className="canvas"
              ref={canvasRef}
              style={{
                width: canvasSize.width * zoom,
                height: canvasSize.height * zoom,
                transform: `scale(${zoom})`,
                transformOrigin: 'top left'
              }}
            >
              <DroppableCanvas onDrop={handleDrop}>
                {components.map(component => (
                  <VisualComponent
                    key={component.id}
                    component={component}
                    onSelect={handleComponentSelect}
                    isSelected={selectedComponent?.id === component.id}
                  />
                ))}
              </DroppableCanvas>
            </div>
          </div>

          {/* Properties Panel */}
          {showProperties && selectedComponent && (
            <div className="properties-panel">
              <h3>⚙️ Properties</h3>
              <div className="property-groups">
                <div className="property-group">
                  <h4>Content</h4>
                  <div className="property">
                    <label>Text Content</label>
                    <input
                      type="text"
                      value={selectedComponent.content || ''}
                      onChange={(e) => handlePropertyChange('content', e.target.value)}
                    />
                  </div>
                </div>

                <div className="property-group">
                  <h4>Position</h4>
                  <div className="property">
                    <label>X Position</label>
                    <input
                      type="number"
                      value={selectedComponent.position?.x || 0}
                      onChange={(e) => handlePropertyChange('left', `${e.target.value}px`)}
                    />
                  </div>
                  <div className="property">
                    <label>Y Position</label>
                    <input
                      type="number"
                      value={selectedComponent.position?.y || 0}
                      onChange={(e) => handlePropertyChange('top', `${e.target.value}px`)}
                    />
                  </div>
                </div>

                <div className="property-group">
                  <h4>Size</h4>
                  <div className="property">
                    <label>Width</label>
                    <input
                      type="number"
                      value={selectedComponent.size?.width || 200}
                      onChange={(e) => handlePropertyChange('width', `${e.target.value}px`)}
                    />
                  </div>
                  <div className="property">
                    <label>Height</label>
                    <input
                      type="number"
                      value={selectedComponent.size?.height || 100}
                      onChange={(e) => handlePropertyChange('height', `${e.target.value}px`)}
                    />
                  </div>
                </div>

                <div className="property-group">
                  <h4>Style</h4>
                  <div className="property">
                    <label>Background Color</label>
                    <input
                      type="color"
                      value={selectedComponent.styles?.backgroundColor || '#ffffff'}
                      onChange={(e) => handlePropertyChange('backgroundColor', e.target.value)}
                    />
                  </div>
                  <div className="property">
                    <label>Border Color</label>
                    <input
                      type="color"
                      value={selectedComponent.styles?.borderColor || '#dddddd'}
                      onChange={(e) => handlePropertyChange('borderColor', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          .visual-editor {
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: #f5f5f5;
          }

          .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: white;
            border-bottom: 1px solid #ddd;
          }

          .editor-controls {
            display: flex;
            gap: 10px;
          }

          .editor-layout {
            display: flex;
            flex: 1;
            overflow: hidden;
          }

          .component-library {
            width: 250px;
            background: white;
            border-right: 1px solid #ddd;
            overflow-y: auto;
            padding: 20px;
          }

          .library-categories {
            margin-top: 15px;
          }

          .category {
            margin-bottom: 20px;
          }

          .category h4 {
            margin: 0 0 10px 0;
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
          }

          .category-components {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .canvas-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #f8f9fa;
          }

          .canvas-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background: white;
            border-bottom: 1px solid #ddd;
          }

          .canvas-controls {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .zoom-level {
            font-size: 12px;
            color: #666;
            min-width: 40px;
            text-align: center;
          }

          .canvas {
            flex: 1;
            position: relative;
            background: white;
            margin: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
          }

          .properties-panel {
            width: 300px;
            background: white;
            border-left: 1px solid #ddd;
            overflow-y: auto;
            padding: 20px;
          }

          .property-groups {
            margin-top: 15px;
          }

          .property-group {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
          }

          .property-group:last-child {
            border-bottom: none;
          }

          .property-group h4 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 14px;
          }

          .property {
            margin-bottom: 10px;
          }

          .property label {
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
          }

          .property input,
          .property select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
          }

          .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
          }

          .btn-primary {
            background: #007bff;
            color: white;
          }

          .btn-secondary {
            background: #6c757d;
            color: white;
          }

          .btn-sm {
            padding: 4px 8px;
            font-size: 12px;
          }

          .btn:hover {
            opacity: 0.8;
          }
        `}</style>
      </div>
    </DndProvider>
  )
}

// Draggable Component
const DraggableComponent = ({ type, name, icon }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: { type, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      className={`draggable-component ${isDragging ? 'dragging' : ''}`}
    >
      <span className="component-icon">{icon}</span>
      <span className="component-name">{name}</span>
    </div>
  )
}

// Droppable Canvas
const DroppableCanvas = ({ children, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'component',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset()
      const canvasRect = monitor.getDropResult()?.getBoundingClientRect()
      
      if (clientOffset && canvasRect) {
        onDrop(item, {
          x: clientOffset.x - canvasRect.left,
          y: clientOffset.y - canvasRect.top
        })
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <div
      ref={drop}
      className={`droppable-canvas ${isOver ? 'drag-over' : ''}`}
    >
      {children}
    </div>
  )
}

// Visual Component
const VisualComponent = ({ component, onSelect, isSelected }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    onSelect(component)
  }

  return (
    <div
      className={`visual-component ${isSelected ? 'selected' : ''}`}
      style={component.styles}
      onClick={handleClick}
    >
      <div className="component-content">
        {component.type === 'text' && (component.content || 'Text')}
        {component.type === 'button' && (component.content || 'Button')}
        {component.type === 'input' && <input placeholder={component.placeholder || 'Input'} />}
        {component.type === 'image' && <div className="image-placeholder">🖼️ Image</div>}
        {component.type === 'card' && (
          <div>
            <h3>{component.title || 'Card Title'}</h3>
            <p>{component.content || 'Card content'}</p>
          </div>
        )}
        {!['text', 'button', 'input', 'image', 'card'].includes(component.type) && (
          <div className="component-placeholder">
            {component.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default VisualEditor
