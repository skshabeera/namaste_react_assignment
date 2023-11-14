const heading = React.createElement("h1", {
    id: "heading"
}, "creating a heading");
const heading2 = React.createElement("h2", {
    id: "title"
}, "creating a heading2 ");
const Container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);

//# sourceMappingURL=index.7c0ccee6.js.map
