import Navigation from "../Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <div className="flex justify-center my-3">
        <p>Nick Melanson</p>
      </div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Header;
