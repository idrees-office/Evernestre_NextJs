import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, 
  Linkedin, Link2, Heart, MessageCircle, ChevronRight, Tag,
  BookOpen, TrendingUp, Building2, Home, Briefcase
} from 'lucide-react';

// Static Data
const newsArticle = {
  title: "Dubai Real Estate Market Hits Record High in Q4 2024",
  subtitle: "Luxury segment leads growth with unprecedented demand from international investors",
  author: {
    name: "Sarah Al Maktoum",
    role: "Senior Property Analyst",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format"
  },
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Market Insights",
  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop&auto=format",
  content: [
    {
      type: "paragraph",
      text: "Dubai's real estate market has achieved remarkable milestones in the fourth quarter of 2024, with transaction volumes reaching unprecedented levels. The emirate recorded over AED 150 billion in property transactions, marking a 35% increase compared to the same period last year."
    },
    {
      type: "paragraph",
      text: "The luxury segment has been the primary driver of this growth, with properties valued above AED 10 million seeing a 45% surge in demand. International investors, particularly from Europe, Asia, and the Americas, have shown renewed interest in Dubai's premium real estate offerings."
    },
    {
      type: "heading",
      text: "Key Market Highlights"
    },
    {
      type: "paragraph",
      text: "Several factors have contributed to this exceptional performance. The UAE's progressive visa reforms, including the Golden Visa program, have attracted high-net-worth individuals seeking long-term residency options. Additionally, Dubai's position as a global business hub has strengthened, drawing entrepreneurs and corporate relocations."
    },
    {
      type: "quote",
      text: "Dubai continues to demonstrate its resilience and attractiveness as a premier destination for real estate investment. The market fundamentals remain strong, supported by visionary government policies and world-class infrastructure.",
      author: "Mohammed Al Rashid, CEO of Dubai Land Department"
    },
    {
      type: "heading",
      text: "Top Performing Areas"
    },
    {
      type: "paragraph",
      text: "Palm Jumeirah, Downtown Dubai, and Dubai Marina continue to dominate the luxury market. However, emerging communities like Dubai Creek Harbour, Mohammed Bin Rashid City, and Dubai Hills Estate have shown remarkable growth, offering investors diverse opportunities across different price points."
    },
    {
      type: "paragraph",
      text: "The off-plan market has also witnessed significant activity, with developers launching innovative projects that cater to evolving buyer preferences. Sustainable living, smart home technologies, and premium amenities have become key differentiators in the competitive landscape."
    },
    {
      type: "heading",
      text: "Future Outlook"
    },
    {
      type: "paragraph",
      text: "Industry experts remain optimistic about the market's trajectory heading into 2025. With major global events planned and continued infrastructure development, Dubai is well-positioned to maintain its momentum. The upcoming Expo City developments and new transportation links are expected to further enhance property values in strategic locations."
    }
  ],
  tags: ["Dubai Real Estate", "Market Analysis", "Investment", "Luxury Properties", "2024 Trends"]
};

const featuredNews = [
  {
    id: 1,
    title: "New Waterfront Development Announced in Dubai Maritime City",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&auto=format",
    date: "Dec 12, 2024",
    category: "Development"
  },
  {
    id: 2,
    title: "Golden Visa Reforms Boost Property Investment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&auto=format",
    date: "Dec 10, 2024",
    category: "Policy"
  },
  {
    id: 3,
    title: "Sustainable Living: The Future of Dubai Communities",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    date: "Dec 8, 2024",
    category: "Lifestyle"
  }
];

const categories = [
  { name: "Modern Villa", count: 3, icon: Home },
  { name: "Apartments", count: 12, icon: Building2 },
  { name: "Commercial", count: 5, icon: Briefcase },
  { name: "Market Insights", count: 8, icon: TrendingUp }
];

const popularTags = ["Dubai", "Investment", "Luxury", "Off-Plan", "Villa", "Apartment", "ROI", "Golden Visa"];

export default function NewsDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={newsArticle.image}
            alt={newsArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-6 py-6">
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium text-sm">Back to News</span>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-flex bg-[#c9a87c] text-white border-0 mb-4 px-4 py-1.5 rounded-full text-sm">
                {newsArticle.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
                {newsArticle.title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-3xl">
                {newsArticle.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={newsArticle.author.image}
                    alt={newsArticle.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#c9a87c]"
                  />
                  <div>
                    <p className="text-white font-medium">{newsArticle.author.name}</p>
                    <p className="text-white/50 text-sm">{newsArticle.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white/60 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {newsArticle.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {newsArticle.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              {/* Share Bar */}
              <div className="flex items-center justify-between pb-8 mb-10 border-b border-[#f0e6dd]">
                <div className="flex items-center gap-3">
                  <span className="text-[#8b5d3b] text-sm font-medium">Share:</span>
                  <div className="flex items-center gap-2">
                    {[Facebook, Twitter, Linkedin, Link2].map((Icon, idx) => (
                      <button key={idx} className="w-10 h-10 rounded-full bg-[#f6ecdf] hover:bg-[#c9a87c] hover:text-white text-[#8b5d3b] flex items-center justify-center transition-all">
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#8b5d3b] hover:text-[#c9a87c] transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">Save Article</span>
                </button>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {newsArticle.content.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={index} className="text-[#5a4a3f] leading-[1.9] mb-6 text-[17px]">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'heading') {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-light text-[#3c2f26] mt-12 mb-6">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'quote') {
                    return (
                      <blockquote key={index} className="relative my-12 py-8 px-8 md:px-12 bg-gradient-to-br from-[#f6ecdf] to-[#faf8f6] rounded-2xl border-l-4 border-[#c9a87c]">
                        <svg className="absolute top-6 left-6 w-10 h-10 text-[#c9a87c]/30" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-[#3c2f26] text-lg md:text-xl italic leading-relaxed mb-4 pl-8">
                          "{block.text}"
                        </p>
                        <cite className="text-[#8b5d3b] font-medium not-italic pl-8">— {block.author}</cite>
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[#f0e6dd]">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-5 h-5 text-[#8b5d3b]" />
                  {newsArticle.tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center border border-[#e5ddd3] text-[#5a4a3f] hover:bg-[#f6ecdf] hover:border-[#c9a87c] cursor-pointer transition-all px-4 py-1.5 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-8 bg-gradient-to-br from-[#f6ecdf] to-[#faf8f6] rounded-2xl border border-[#f0e6dd]">
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={newsArticle.author.image}
                    alt={newsArticle.author.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-[#c9a87c]"
                  />
                  <div>
                    <p className="text-[#8b5d3b] text-sm font-medium tracking-wide uppercase mb-2">Written by</p>
                    <h3 className="text-xl font-semibold text-[#3c2f26] mb-2">{newsArticle.author.name}</h3>
                    <p className="text-[#5a4a3f] mb-4">{newsArticle.author.role}</p>
                    <p className="text-[#5a4a3f] text-sm leading-relaxed">
                      With over 15 years of experience in Dubai's real estate market, Sarah provides expert analysis 
                      and insights on market trends, investment opportunities, and property developments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="w-6 h-6 text-[#c9a87c]" />
                  <h3 className="text-2xl font-light text-[#3c2f26]">Leave a Comment</h3>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-[#5a4a3f] mb-2 block">Full Name</label>
                      <input 
                        type="text"
                        placeholder="Your name" 
                        className="w-full bg-[#faf8f6] border border-[#e5ddd3] h-12 px-4 rounded-lg focus:outline-none focus:border-[#c9a87c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#5a4a3f] mb-2 block">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full bg-[#faf8f6] border border-[#e5ddd3] h-12 px-4 rounded-lg focus:outline-none focus:border-[#c9a87c] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-[#5a4a3f] mb-2 block">Your Comment</label>
                    <textarea 
                      placeholder="Share your thoughts..." 
                      className="w-full bg-[#faf8f6] border border-[#e5ddd3] min-h-[150px] p-4 rounded-lg focus:outline-none focus:border-[#c9a87c] transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="button"
                    className="bg-[#3c2f26] hover:bg-[#2a211b] text-white px-8 py-4 rounded-full inline-flex items-center transition-colors"
                  >
                    Post Comment
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#f6ecdf] to-[#faf8f6] rounded-2xl p-6 border border-[#f0e6dd]"
              >
                <h3 className="text-lg font-semibold text-[#3c2f26] mb-4">Search Articles</h3>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search..." 
                    className="w-full bg-white border border-[#e5ddd3] h-12 px-4 pr-12 rounded-lg focus:outline-none focus:border-[#c9a87c]"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#c9a87c] text-white rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-[#f0e6dd] shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#3c2f26] mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f6ecdf] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#f6ecdf] group-hover:bg-[#c9a87c] flex items-center justify-center transition-colors">
                            <category.icon className="w-5 h-5 text-[#8b5d3b] group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-[#3c2f26] font-medium">{category.name}</span>
                        </div>
                        <span className="bg-[#f6ecdf] text-[#8b5d3b] text-sm px-3 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Featured Articles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-[#f0e6dd] shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#3c2f26] mb-6">Featured Articles</h3>
                <div className="space-y-5">
                  {featuredNews.map((news) => (
                    <a key={news.id} href="#" className="flex gap-4 group">
                      <img 
                        src={news.image}
                        alt={news.title}
                        className="w-24 h-20 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <span className="inline-flex border border-[#c9a87c] text-[#8b5d3b] text-xs px-2 py-1 rounded mb-2">
                          {news.category}
                        </span>
                        <h4 className="text-[#3c2f26] font-medium text-sm leading-snug group-hover:text-[#c9a87c] transition-colors line-clamp-2">
                          {news.title}
                        </h4>
                        <p className="text-xs text-[#8b5d3b] mt-1">{news.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#3c2f26] to-[#2a211b] rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <span key={idx} className="bg-white/10 hover:bg-[#c9a87c] text-white border-0 cursor-pointer transition-all px-4 py-2 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-[#c9a87c] to-[#8b5d3b] rounded-2xl p-6 text-white"
              >
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-white/80 text-sm mb-5">
                  Subscribe to our newsletter for the latest market insights and property news.
                </p>
                <input 
                  type="email"
                  placeholder="Your email" 
                  className="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/50 mb-3 h-12 px-4 rounded-lg focus:outline-none focus:border-white"
                />
                <button className="w-full bg-white text-[#8b5d3b] hover:bg-white/90 h-12 font-medium rounded-lg">
                  Subscribe Now
                </button>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-[#faf8f6]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#c9a87c]" />
                <span className="text-[#8b5d3b] text-sm font-medium tracking-[0.15em] uppercase">Keep Reading</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26]">
                Related <span className="italic font-serif text-[#8b5d3b]">Articles</span>
              </h2>
            </div>
            <button className="hidden md:inline-flex items-center border border-[#3c2f26] text-[#3c2f26] hover:bg-[#3c2f26] hover:text-white rounded-full px-6 py-3 transition-colors">
              View All News
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0e6dd]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#c9a87c] text-white border-0 px-3 py-1 rounded-full text-sm">
                    {news.category}
                  </span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#3c2f26] mb-4 group-hover:text-[#c9a87c] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-2 text-[#8b5d3b] font-medium hover:text-[#c9a87c] transition-colors">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
}