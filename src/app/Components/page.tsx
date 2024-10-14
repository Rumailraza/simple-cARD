import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My PROJECT</h1>
         <div className="text-2xl font-bold text-right">
          <ul>
            <Link className="mr-4" href="/">HOME</Link>
            <Link className="mr-4" href="">ABOUT</Link>
            <Link className="mr-4" href="">CONTACT</Link>
            <Link className="mr-4" href="">IMFORMATION</Link>
          </ul>
         </div>
      </header>
    );
  };
  
  export default Header;