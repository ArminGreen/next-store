import { VscCode } from "react-icons/vsc";
import LOGO from "../../public/logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Button size="default" variant="link" asChild>
      <Link href="/">
        {/* <VscCode className="w-6 h-6" /> */}
        <Image src={LOGO} width={175} priority alt="logo" />
      </Link>
    </Button>
  );
}
export default Logo;
