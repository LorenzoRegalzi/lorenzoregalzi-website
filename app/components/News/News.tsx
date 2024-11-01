import styles from './News.module.css';
import Image from 'next/image'

export default async function News () {

    let data = await fetch('https://dev.to/api/articles?tag=programming')
    let posts = await data.json()

    return (
        <div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post : any) => (
          

      <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time  className="text-gray-500">{post.published_timestamp}</time>
          <a href={post.url} target='_blank' className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.type_of}</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href={post.url} target='_blank'>
              <span className="absolute inset-0"></span>
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image src={post.user.profile_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" width={10} height={10}/>
          <div className="text-sm/6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                {post.user.name}
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>

   
  
        ))}
  </div>
    </div>
    );
};

