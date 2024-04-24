import { Container, Divider } from "flowbite-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Name</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex items-center">
              <a href="#" className="mr-2">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <Divider className="my-8" />
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
