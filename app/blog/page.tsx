import Navbar from '../components/Navbar/Navbar';
import News from '../components/News/News';
import styles from './Blog.module.css'; // Import CSS module for styling

export default async function Page (){

    return (
        <>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Latest in Programming News</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Staying up-to-date is essential in a rapidly evolving field like technology. Here, I share the latest news, articles, and updates from the world of programming. From new libraries and framework updates to emerging trends, explore with me the developments shaping the future of software development.</p>
                </div>
                <News></News>
            </div>
           
        </>
    );
};
