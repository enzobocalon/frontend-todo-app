import React, {useEffect, useState, useContext} from 'react'
import TodoBox from '../TodoBox/TodoBox'
import './Todo.css'
import {getMessages} from '../../providers/api'
import { UpdateDataContext } from '../../context/UpdateData'
import { UpdateCheckContext } from '../../context/UpdateCheck'
import { ModesContext } from '../../context/Modes'


const Todo = () => {
  const {mode, setMode} = useContext(ModesContext)
  const [data, setData] = useState([])
  const {update, setUpdate} = useContext(UpdateDataContext)
  const {updateCheck, setUpdateCheck} = useContext(UpdateCheckContext)
  const [count, setCount] = useState(0)

  const [currentActive, setCurrentActive] = useState('all')

useEffect(() => {
    getMessages().then((res) => {
      setData(res)

      const array = res.filter((item) => {
        return item.completed !== true
      })
      setCount(array.length)
    }) 
}, [])


useEffect(() => {
setTimeout(() => {  getMessages().then((res) => {
  setData(res)
}) }, 400) // api delay to update data
}, [update])

useEffect(() => {
setTimeout(() => {
  getMessages().then((res) => {
    const array = res.filter((item) => {
      return item.completed !== true
    })
    setCount(array.length)
  }) 
}, 450)
}, [update])


  const filterAll = () => {
    getMessages().then((res) => {
      setData(res)
      setUpdateCheck(prev => prev + 1)
    })

    setCurrentActive('all')
  }

  const filterActive = () => {
    getMessages().then((res) => {
      const array = res.filter((item) => {
        return item.completed !== true
      })
      setData(array)
      setUpdateCheck(prev => prev + 1)
    }) 

    setCurrentActive('active')
  }

  const filterCompleted = () => {
    getMessages().then((res) => {
      const array = res.filter((item) => {
        return item.completed === true
      })
      setData(array)
      setUpdateCheck(prev => prev + 1)
    })
    
    setCurrentActive('completed')
  }

  const WarningMessage = () => {
    window.alert('To avoid complete erasing the data, this functionality is not working!')
  }

  return (
    <main>
        <div className={`container ${mode ? 'dark' : 'light'}`}>
         {
            data.map((item) => {
            return (<TodoBox message={item.message} completed={item.completed} id={item._id} isDeleatable={item.isDeleatable}/>)
          })
         }
          <div className={`container-bottom ${mode ? 'dark' : 'light'}`}>
            <div className='bottom-left'>
              <span id='items-left'>{count} items left</span>
            </div>
            <div className={`bottom-center ${mode ? 'dark' : 'light'}`}>
              <span className={`all ${mode ? 'dark' : 'light'} ${currentActive === 'all' ? 'CurrentActive' : ''}`} onClick = {filterAll}>All</span>
              <span onClick={filterActive} className={`active ${mode ? 'dark' : 'light'} ${currentActive === 'active' ? 'CurrentActive' : ''}`}>Active</span>
              <span onClick = {filterCompleted} className={`completed ${mode ? 'dark' : 'light'} ${currentActive === 'completed' ? 'CurrentActive' : ''}`}>Completed</span>
            </div>
            <div className='bottom-right'>
              <span className={`clear-completed ${mode ? 'dark' : 'light'}`} onClick={WarningMessage}>Clear Completed</span>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Todo