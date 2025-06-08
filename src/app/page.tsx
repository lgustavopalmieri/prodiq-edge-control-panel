interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <h1>Welcome to ProdIQ Control Panel</h1>
      <p>Select an option from the side menu to get started.</p>
    </div>
  );
};

export default Home;
