import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <Footer
      className="border border-t-8 border-teal-400"
    >
      <div>
        <div className="px-5 pt-5">
          <div className="">
            <Link
              to="/"
              className="self-center text whitespace-nowrap text-lg sm:text-large dark:text-white"
            >
              <span className="py-2 px-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Attar
              </span>
              blogs{" "}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank">
                  100 js projexts
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="/projects" target="_blank">
                   projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank">
                  100 js projexts
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="/projects" target="_blank">
                   projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Privacy Policy" className="m-1" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank">
                  100 js projexts
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="/projects" target="_blank">
                   projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
