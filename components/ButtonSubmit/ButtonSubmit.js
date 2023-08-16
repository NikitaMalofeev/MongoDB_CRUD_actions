"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import style from './index.module.scss'

const ButtonSubmit = ({ value }) => {
  const { pending } = useFormStatus();

  return (
    <button className={style.button}type="submit" disabled={pending}>
      {pending ? "Loading..." : value}
    </button>
  );
}

export default ButtonSubmit;
