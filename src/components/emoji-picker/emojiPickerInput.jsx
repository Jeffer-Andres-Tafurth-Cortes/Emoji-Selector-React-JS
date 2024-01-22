import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import styles from './emojiPicker.module.scss';

export default function EmojiPickerInput(){

  const refInput = useRef(null);

  return(
  <div>
    <h1 className={styles.title}>Emojis Selector</h1>
    <input className={styles.principalInput} ref={refInput} />
    <EmojiPicker ref={refInput} />
  </div>
  );
}