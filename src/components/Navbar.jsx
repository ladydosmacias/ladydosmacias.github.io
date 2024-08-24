import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/ladydosmacias-logo.png";
import { navItems } from "../constants";
import Typewriter from "typewriter-effect";
import ReactGA from "react-ga4";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleActiveTab = (tab) => {
    setActiveTab(() => {
      return tab;
    });
  };

  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easing(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  var homeLink = document.querySelector('nav a[href="#home"]');
  var aboutLink = document.querySelector('nav a[href="#about"]');
  var privateLink = document.querySelector('nav a[href="#private"]');

  if (activeTab.includes("#home")) {
    homeLink.addEventListener("click", function () {
      if (isProduction) {
        ReactGA.event({
          category: "nav-home",
          action: "click",
          value: 1,
        });
        smoothScroll("#home", 1000);
      }
    });
  }

  if (activeTab.includes("#about")) {
    aboutLink.addEventListener("click", function () {
      if (isProduction) {
        ReactGA.event({
          category: "nav-about",
          action: "click",
          value: 1,
        });
        smoothScroll("#about", 1000);
      }
    });
  }

  if (activeTab.includes("#private")) {
    privateLink.addEventListener("click", function () {
      if (isProduction) {
        ReactGA.event({
          category: "nav-private",
          action: "click",
          value: 1,
        });
        smoothScroll("#private", 1000);
      }
    });
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <div>
              <span className="text-xl tracking-tight">
                Lady Dos Macias Dance
              </span>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Salsa dancer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Bachata dancer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Choreographer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Dance teacher")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={() => toggleActiveTab(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
