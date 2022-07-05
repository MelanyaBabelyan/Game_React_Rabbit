import globalObject from "./globals"
function Image(props) {
  if (props.character === globalObject.RABBIT) {
    const image = globalObject.IMAGES.RABBIT
    return <img src={image} alt="#" />
  }
  if (props.character === globalObject.WOLF) {
    const image = globalObject.IMAGES.WOLF
    return <img src={image} alt="#" />
  }
  if (props.character === globalObject.FENCE) {
    const image = globalObject.IMAGES.FENCE
    return <img src={image} alt="#" />
  }
  if (props.character === globalObject.HOME) {
    const image = globalObject.IMAGES.HOME
    return <img src={image} alt="#" />
  }
}

export default Image
