import Navigation from "../Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <div className="flex flex-col py-8 text-xl text-center">
        <h1 className="py-2 font-bold">Nick Melanson</h1>
        <p className="text-lg">Frontend Developer</p>
      </div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Header;
