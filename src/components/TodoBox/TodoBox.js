import React, {useEffect, useState, useContext} from 'react'
import './TodoBox.css'
import {deleteMessages, updateMessage} from '../../providers/api'
import { UpdateDataContext } from '../../context/UpdateData'
import { UpdateCheckContext } from '../../context/UpdateCheck'
import { ModesContext } from '../../context/Modes'

const TodoBox = ({message, completed, id}) => {
  const {mode, setMode} = useContext(ModesContext)
  const [check, setCheck] = useState(false)
  const {update, setUpdate} = useContext(UpdateDataContext)
  const {updateCheck, setUpdateCheck} = useContext(UpdateCheckContext)

  const handleClick = (e) => {
    if (check){
      setCheck(false)
      updateMessage(id, message, !check)
      setUpdate(prev => prev + 1)
    } else {
      setCheck(true)
      updateMessage(id, message, !check)
      setUpdate(prev => prev + 1)
    }
  }

  useEffect(() => {
    setCheck(completed)
  }, [updateCheck])

  const handleDelete = () => {
    deleteMessages(id)
    setUpdate(prev => prev + 1)
  }

  return (
    <div className={`box-container ${mode ? 'dark' : 'light'}`}>
        <div className='content-box'>
          <div className='circle' onClick = {handleClick}>
              <span className={`check ${check ? 'full' : 'empty'} ${mode ? 'dark' : 'light'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
              </span>
          </div>
          <div className='activity-box'>
              <span className={`activity ${check ? 'completed' : ''} ${mode ? 'dark' : 'light'}`}>{message}</span>
          </div>
        </div>
        <svg onClick = {handleDelete} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </div>
  )
}

export default TodoBox