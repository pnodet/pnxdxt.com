import type {NextPage} from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>pnxdxt</title>
			</Head>

			<main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
				<h1 className='text-6xl font-bold text-white cursor-default'>
					Hi I'm{' '}
					<span>
						<a
							className='hover:text-teal-300 text-teal-400'
							href='https://github.com/pnxdxt'
							target='_blank'
							rel='noopener noreferrer'
						>
							@pnxdxt
						</a>
					</span>
				</h1>


				<h2 className='text-3xl font-bold text-white cursor-default mt-8'>Nothing to see 👀</h2>
			</main>

			<footer className='flex h-24 w-full items-center justify-center text-white'>
				<a
					className='flex items-center justify-center gap-2'
					href='https://github.com/pnxdxt'
					target='_blank'
					rel='noopener noreferrer'
				>
					Made with 🤍 by <b>pnxdxt</b>
				</a>
			</footer>
		</div>
	);
};

export default Home;
