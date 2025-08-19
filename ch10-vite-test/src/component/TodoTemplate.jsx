import React from 'react';
import '../styles/TodoTemplate.scss';
import { AiOutlineSchedule } from 'react-icons/ai';
//rsc
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        일정 관리 <AiOutlineSchedule />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
