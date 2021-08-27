import { useState } from 'react';
import { FiCheckSquare, FiTrash } from 'react-icons/fi';

import { Container, Header, Content, Task } from "./styles";

interface TaskItem {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskItem[]>(() => {
    const storagedTasks = localStorage.getItem('@Todo:tasks');

    if (storagedTasks) {
      const takskList = JSON.parse(storagedTasks);

      return takskList;
    }

    return [];
  });
  const [newTaksTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaksTitle) {
      return;
    }

    const task = {
      id: Math.random(),
      title: newTaksTitle,
      isComplete: false,
    }

    setNewTaskTitle('');
    setTasks([...tasks, task]);

    localStorage.setItem('@Todo:tasks', JSON.stringify([...tasks, task]));
  }

  function handleToggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map(task => {
      const updatedTask = task;

      if (updatedTask.id === id) {
        updatedTask.isComplete = !updatedTask.isComplete;

        return updatedTask;
      }

      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('@Todo:tasks', JSON.stringify(updatedTasks));
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
    localStorage.setItem('@Todo:tasks', JSON.stringify(updatedTasks));
  }

  return (
    <Container>
      <Header>
        <h2>Minhas tasks</h2>

        <div>
          <input
            type="text"
            placeholder="Adicionar novo todo"
            value={newTaksTitle}
            onChange={event => setNewTaskTitle(event.target.value)}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#FFF" />
          </button>
        </div>
      </Header>

      <Content>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <Task isComplete={task.isComplete}>
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />

                <p>{task.title}</p>
              </Task>

              <button type="button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}