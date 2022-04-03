import "./sass/style.scss";
console.log("działa prawie");

if (process.env.NODE_ENV === "production") {
  console.log("production");
} else if (process.env.NODE_ENV === "development") {
  console.log("development");
}

const myF = (a) => {
  let b = a * window.innerWidth;
  console.log(b);
};

myF(2);

document.querySelector('.click').addEventListener('click', e => {
  e.preventDefault;
  console.log('click');
})