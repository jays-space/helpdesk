import Image from "next/image";
import Link from "next/link";

// ASSETS
import Logo from "./dojo-logo.png";

const NavBar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h2>Dojo Helpdesk</h2>
      <Link href={`/`}>Dashboard</Link>
      <Link href={`/tickets`}>Tickets</Link>
    </nav>
  );
};

export default NavBar;
