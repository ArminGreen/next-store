import { currentUser } from "@clerk/nextjs/server";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();
  const profileImg = user?.imageUrl;
  if (profileImg) {
    return (
      <img
        src={profileImg}
        alt="avatar"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
