import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
//<MdCheckBoxOutlineBlank />
//<MdCheckBox />
// <MdRemoveCircleOutline />
import '../styles/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    // 변경전,
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        {/*classnames , cn 별칭 지정하고, 조건부 렌더링 적용하기.*/}
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

// 성능 최적화 효과1, React.memo 사용하기.
// todo, onRemove, onToggle 변경되지 않으면 리렌더링을 하지 않음.
// export default TodoListItem;
export default React.memo(TodoListItem);
