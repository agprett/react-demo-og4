function RedButton (props) {
  return (
    <button
      className='redButton'
      type="button"
      onClick={() => props.incrementCount(props.number)}
    >
      {props.message}
    </button>
  )
}

export default RedButton