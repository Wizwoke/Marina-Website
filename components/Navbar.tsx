import Image from 'next/image';
import logo_brown from '../public/logos/logo_brown.png';
import logo_white from '../public/logos/logo_brown.png';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-[#DBB794] p-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          {' '}
          <Image
            className="cursor-pointer"
            alt="brown logo"
            src={logo_brown}
            height={110}
            width={110}
          />
        </Link>

        <ul className="text-[#866341] font-bold space-x-4 text-xs sm:text-sm md:text-md">
          <Link className="hover:text-white" href="/products">
            my bags
          </Link>
          <Link className="hover:text-white" href="/about">
            about
          </Link>
          <Link className="hover:text-white" href="/contact me">
            contact me{' '}
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
