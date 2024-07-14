import styles from "./styles/Load.module.css"
import {Mosaic} from "react-loading-indicators"

function Load() {
  return (
    <div className={styles.pageload}>
      <Mosaic color={["#ff7325", "#33CC36", "#B8CC33", "#FCCA00"]} size="medium"/>
    </div>
  )
}

export default Load;