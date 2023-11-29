const div = React.createElement("div", {
  className: "content",
  style: {
    backgroundColor: "#CC00CC",
  },
  children: [
    React.createElement(
      "label",
      {
        htmlFor: "password",
      },
      "You can write your password here if you like..  "
    ),
    React.createElement("input", {
      type: "password",
      name: "password",
    }),
  ],
});
console.log(div);

const root = document.querySelector("#root");

ReactDOM.render(div, root);
