import React from 'react';
import { useDispatch } from 'react-redux';
import { formAction } from '../../Store';
const ToggleBtn = (props) => {
  const dispatch = useDispatch();
  const toggelState = () => {
    dispatch(formAction.toggle());
  };
  return (
    <>
      <button onClick={toggelState}>{props.value}</button>
    </>
  )
}

export default ToggleBtn
