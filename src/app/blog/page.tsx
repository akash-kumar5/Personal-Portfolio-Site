"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const MEDIUM_RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashdevbuilds";
type MediumPost = {
  link: string
  title: string
  description: string
  pubDate: string
  categories: string[]
}

export default function MediumIntegration() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    fetch(MEDIUM_RSS_URL)
      .then(res => res.json())
      .then(data => {
        // Validation to ensure data exists before setting state
        if (data.items) {
          setPosts(data.items.slice(0, 3));
        }
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 bg-stone-950 font-inter overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-8 md:pb-12">
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-stone-100 italic uppercase leading-none">
          TECHNICAL <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">LOGS</span>
        </h2>
        <div className="text-left md:text-right mt-4 md:mt-0">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-500 italic">
            Live_Medium_Sync // Registry_V.02
          </p>
        </div>
      </div>

      {/* GRID: Single column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border-2 border-stone-800">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            // Changed h-[450px] to min-h-[400px] to prevent distortion
            className="p-6 md:p-8 bg-stone-950 flex flex-col justify-between group min-h-[400px] md:h-[500px] transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <span className="text-[9px] md:text-[10px] font-black text-stone-600 uppercase tracking-widest">
                  {post.categories[0] || "RESEARCH"}
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-widest italic">
                  {new Date(post.pubDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </span>
              </div>
              
              <h3 className="font-bebas text-3xl md:text-3xl text-stone-100 leading-tight mb-4 md:mb-6 group-hover:text-red-900 transition-colors uppercase">
                {post.title}
              </h3>

              {/* Excerpt with improved regex for cleaner text extraction */}
              <p className="text-stone-500 text-xs md:text-sm font-medium leading-relaxed line-clamp-4 uppercase tracking-tight">
                {post.description
                  .replace(/<figure[^>]*>([\s\S]*?)<\/figure>/g, "") // Remove images/captions
                  .replace(/<[^>]*>?/gm, "") // Remove HTML tags
                  .substring(0, 160)}...
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-[0.3em] mt-8">
              ACCESS_MEDIUM <div className="h-[1px] w-6 md:w-8 bg-stone-100 group-hover:w-16 transition-all duration-500" />
            </div>
          </motion.a>
        ))}
      </div>
      
      {/* MOBILE FOOTER (Visible only on small screens) */}
      <div className="mt-8 md:hidden flex justify-end">
        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">
          Swipe_to_Browse // Archive_Ref_2026
        </span>
      </div>
    </section>
  )
}