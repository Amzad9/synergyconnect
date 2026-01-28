import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts } from './posts'

export default function BlogPage() {
  return (
    <div role="document" aria-label="Synergy Connect Blog">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="blog-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2074&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col items-center justify-center text-center">
          <h1
            id="blog-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white px-2"
          >
            Blog
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-3 max-w-2xl px-2 sm:px-0">
            Insights on cloud communications, VoIP, and unified communications.
          </p>
        </div>
      </header>

      {/* Posts */}
      <section
        id="blog-posts"
        className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        aria-labelledby="blog-posts-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-aqua/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-tech-blue/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 container px-3 sm:px-3 lg:px-0 mx-auto">
          <h2 id="blog-posts-heading" className="sr-only">
            Latest posts
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="h-full flex flex-col overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-gray-300/80 transition-all">
                  <Link href={`/blog/${post.slug}`} className="group flex flex-1 flex-col">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl shrink-0">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-tech-blue transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-4 text-tech-blue font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[160px] px-8 py-3 rounded-xl bg-linear-to-r from-tech-blue to-aqua text-white font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2"
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
