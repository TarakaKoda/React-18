let count = 0

const Message = () => {
  count++
  console.log('message called', count);
  
  return (
    <div>Message {count}</div>
  )
}

export default Message