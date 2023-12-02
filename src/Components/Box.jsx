import { Item } from './Item'

export const Box = (todos) => {
  const items = todos.data.map((item, index) => (
    <Item
      removeHandler={todos.removeHandler}
      key={index}
      id={index}
      item={item.todo}
      time={item.time}
    />
  ))

  return <div className="p-3">{items}</div>
}
