import React from "react";
//import userList from "./data/userData.js";

export default function RenderingUserDetailsComponent() {
    var userList = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ];
    return (
        <>
            { userList.map(function(employee, index) {
                return (
                    <>
                        <h4>User Id is: {employee.id}</h4>
                        <b>Employee Tile</b>
                        <p>{employee.title}</p>
                        <b>Employee Body</b>
                        <p>{employee.body}</p><hr/>
                    </>
                )
            })}
        </>
    )
}