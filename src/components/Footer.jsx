import { commonIcons } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <h2 className="text-2xl tracking-wide">Contact</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row mt-4">
            {commonIcons.phone}
            <p className="ml-3">+358 41 312 4778</p>
          </div>
          <div className="flex flex-row mt-4">
            {commonIcons.email}
            <p className="ml-3">lady2macias@outlook.es</p>
          </div>
          <a
            className="flex flex-row mt-4"
            href="https://www.instagram.com/lady2macias/?hl=fi"
            target="_blank"
          >
            {commonIcons.instagram}
            <p className="ml-3">Follow me!</p>
          </a>
        </div>
        <p className="mt-4">@LadyDosMacias2024</p>
      </div>
    </footer>
  );
};

export default Footer;
