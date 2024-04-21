const heading1 = React.createElement("h1", { id: "child1" }, "Heading 1...");
const heading2 = React.createElement("h2", { id: "child2" }, "Heading 2...");
const parent = React.createElement("div", { id: "parent" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
