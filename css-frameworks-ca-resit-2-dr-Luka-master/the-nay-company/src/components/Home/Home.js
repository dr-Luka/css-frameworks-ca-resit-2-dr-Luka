export default function Home() {
  return (
    <>
      <div className="banner">We do NAY things</div>
      <h2>Don't be like us</h2>
      <div className="home-flex">
        <div className="card yellow">
          <h5 className="card-title">Heading 1</h5>
          <p className="card-text">
            Duis gravida leo quis cursus tempus. Fusce id lacinia nisi. Aliquam
            vestibulum vitae tellus ut vulputate.
          </p>
          <a href="#" className="read-more-button blue">
            Read More
          </a>
        </div>
        <div className="card blue">
          <h5 className="card-title">Heading 2</h5>
          <p className="card-text">
            Curabitur ut tincidunt tellus. Proin interdum semper placerat. Duis
            risus magna, facilisis in dolor vitae, dictum scelerisque justo.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam non commodo risus. Curabitur non
            finibus tellus.
          </p>
          <a href="#" className="read-more-button yellow">
            Read More
          </a>
        </div>
        <div className="card yellow">
          <h5 className="card-title">Heading 3</h5>
          <p className="card-text">
            Mauris magna neque, rutrum sit amet purus sit amet, dictum congue
            enim.
          </p>
          <a href="#" className="read-more-button blue">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
