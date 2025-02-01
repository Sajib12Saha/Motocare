import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/constant"


export const BlogGrid = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Blog & Article</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-secondary rounded-lg overflow-hidden">
              <div className="relative h-60">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <Button variant="default" >
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

