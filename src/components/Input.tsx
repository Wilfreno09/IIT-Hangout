import styles from "@/styles/Input.module.css";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{

    type: string;
    name: string
    id: string
    label: string

}

export default function Input({label,type, name, id, ...props}:Props){
  return (
      <div className={styles.input__details}>
        <input type={type} name={name} id={id} required {...props}/>
        <label htmlFor={id}> {label} </label>
      </div>
  );
}
