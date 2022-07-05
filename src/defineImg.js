import globalObject from "./globals"

const Image = (props) => {
  if (props.character === globalObject.RABBIT) {
    return <img src={globalObject.IMAGES.RABBIT} alt="Rabbit" />
  }
  if (props.character === globalObject.WOLF) {
    return <img src={globalObject.IMAGES.WOLF} alt="Wolf" />
  }
  if (props.character === globalObject.FENCE) {
    return <img src={globalObject.IMAGES.FENCE} alt="Fence" />
  }
  if (props.character === globalObject.HOME) {
    return <img src={globalObject.IMAGES.HOME} alt="Home" />
  }
}

export default Image
