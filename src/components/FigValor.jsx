

function FigValor({ obj }) {
    const { icon, text } = obj;

  return (
    <div className="figura">
        <img src={icon}/>
        <span>{text}</span>
    </div>
  )
}

export default FigValor
