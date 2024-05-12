const getData = async () => {
  const result = await fetch("http://localhost:3000/helloworld").then((res) =>
    res.json(),
  );
  return result;
};

function App() {
  return (
    <>
      <h1 className="text-xs font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
