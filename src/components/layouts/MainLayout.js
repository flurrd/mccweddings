import Header from "./../Header";
import NavMotion from "./../NavMotion";
import Footer from "./../Footer";

const MainLayout = ({ children }) => (
	<>
		<NavMotion />
		<Header />
		<div className="content">{children}</div>
		<Footer />
	</>
);

export default MainLayout;
