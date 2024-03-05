import React from "react";
import style from "./CSS Modules/TodoCss.module.css";
export default function Table({ todo }) {
  return (
    <div className={`${style.m}`}>
      <div>
        <h4 className={style.f}>Todo list</h4>
      </div>
      {todo.length == 0 ? (
        <div class="alert alert-danger" role="alert">
          Not Available
        </div>
      ) : (
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">S.no.</th>
              <th scope="col">Title</th>
              <th scope="col">Desc.</th>
              <th scope="col">Remark</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((vlaue, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{vlaue.Title}</td>
                  <td>{vlaue.Desc}</td>
                  <td>{vlaue.Remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
