"use client";

import Link from "next/link";

const Home = () => {
  const id = 2;
  return (
    <div>
      Home
      <div>
        <Link href="/admin/dashboard">click here to go on dashboard</Link>
      </div>
      <div>
        <Link href={`/user/profile/${id}`}> Profile </Link>
      </div>
      <div>
        {/* <Link href="/admin/profile"> Profile </Link> */}
      </div>
    </div>
  );
};

export default Home;
