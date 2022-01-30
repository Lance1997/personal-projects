import Head from 'next/head';
import DashboardHeader from './header/DashboardHeader';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const DashboardLayout = (props: Props) => {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Head>
        <title>{props.title}</title>
      </Head>

      {/* Header */}
      <header className="h-[70px] w-full grow-0 bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-400 px-4 shadow shadow-gray-400">
        <DashboardHeader />
      </header>

      {/* Navigation */}
      <div className="flex grow">
        <nav className="h-full w-56 bg-gray-800 p-4 text-gray-300 shadow shadow-gray-800">
          ss
        </nav>

        <main className="p-8">{props.children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
