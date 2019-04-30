import React from 'react';
import './TodoItem.css';

const TodoItem = ({ checked, text, id, onCheck, onRemove }) => {
    return (
      <div
        className={`TodoItem ${checked && 'active'}`}
        onClick={() => onCheck(id)}
      >
        <div className="check">&#10004;</div>
        <div className="text">{text}</div>
        <div
          className="remove"
          onClick={e => {
            // 지우기가 클릭되면 부모의 클릭이벤트 (onCheck) 가
            // 무시되도록 해줍니다.
            e.stopPropagation();
            onRemove(id);
          }}
        >
          [지우기]
        </div>
      </div>
    );
  };
  
  export default TodoItem;
  