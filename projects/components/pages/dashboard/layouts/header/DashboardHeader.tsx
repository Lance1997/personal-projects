import Image from 'next/image';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between">
      {/* Logo */}
      <div>
        <Image src="/vercel.svg" height={20} width={30} />
      </div>
      {/* App Controls */}
      <div></div>
    </div>
  );
};

export default DashboardHeader;
