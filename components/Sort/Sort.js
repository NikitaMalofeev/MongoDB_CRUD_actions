'use client'
import useCustomRouter from "@/lib/hooks/useCustomRouter";
import React from "react";
import style from './index.module.scss'

const Sort = () => {
  const { pushQuery, query } = useCustomRouter();

  return (
    <div className={style.sort__wrapper}>
      Sort: {``}
      <select
        className={style.sort__form}
        value={query.sort || "createdAt"}
        onChange={(e) => pushQuery({ sort: e.target.value })}
      >
        <option className={style.sort__form} value="createdAt">A - Z</option>
        <option className={style.sort__form} value="-createdAt">Z - A</option>
      </select>
    </div>
  );
};

export default Sort;
