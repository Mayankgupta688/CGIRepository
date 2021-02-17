import React from "react";

export function HeaderComponent() {
    return React.createElement("div", {"id": "sample", "name": "mysample"}, [
        React.createElement("p", {}, React.createElement("h1", {}, "This is Inner HTML")),
        React.createElement("p", {}, [
            React.createElement("h2", {}, "This is Inner HTML for H2 Tag"),
            React.createElement("section", {}, "This is Section")
        ])
    ]);
}
