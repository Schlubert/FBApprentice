import React, { useState } from 'react';
import { Play, Youtube, Clock, TrendingUp, BookOpen, Award, Mail, CheckCircle, X } from 'lucide-react';

// Video data structure with better organization
const videoData = [
  {
    id: 1,
    title: 'The chocolate biscuit for chocoholics',
    description: "This is one of my 'go to' biscuits - a rich, exquisitely chocolatey and soft biscuit that fills your mouth with a deeply chocolate flavour.",
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    duration: '18:45',
    views: '89K',
    category: 'techniques',
    tags: ['bread', 'fermentation', 'beginner'],
    youtubeId: 'ozAYgp3H6WQ',
    uploadDate: '1 week ago',
    relatedRecipes: [1, 2]
  },
  {
    id: 2,
    title: 'Danish Pastry Fundamentals',
    description: 'Master the art of lamination with this comprehensive Danish pastry tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80',
    duration: '32:12',
    views: '156K',
    category: 'recipes',
    tags: ['pastry', 'lamination', 'advanced'],
    youtubeId: 'example2',
    uploadDate: '2 weeks ago',
    relatedRecipes: [3, 4]
  },
  {
    id: 3,
    title: 'Tempering Chocolate Like a Pro',
    description: 'Learn the science and technique behind perfect chocolate tempering',
    thumbnail: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80',
    duration: '15:30',
    views: '203K',
    category: 'techniques',
    tags: ['chocolate', 'dessert', 'intermediate'],
    youtubeId: 'example3',
    uploadDate: '3 weeks ago',
    relatedRecipes: [5, 6]
  },
  {
    id: 4,
    title: 'Baguette Scoring Techniques',
    description: 'Professional scoring patterns for competition-level baguettes',
    thumbnail: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&q=80',
    duration: '12:20',
    views: '67K',
    category: 'techniques',
    tags: ['bread', 'scoring', 'intermediate'],
    youtubeId: 'example4',
    uploadDate: '1 month ago',
    relatedRecipes: [2]
  },
  {
    id: 5,
    title: 'Brioche: The Ultimate Guide',
    description: 'Everything you need to know about making perfect enriched dough',
    thumbnail: 'https://images.unsplash.com/photo-1608198399988-841b05f55da0?w=600&q=80',
    duration: '28:55',
    views: '112K',
    category: 'recipes',
    tags: ['bread', 'enriched dough', 'intermediate'],
    youtubeId: 'example5',
    uploadDate: '1 month ago',
    relatedRecipes: [1, 7]
  },
  {
    id: 6,
    title: 'Macaron Troubleshooting',
    description: 'Fix common macaron problems and achieve perfect results every time',
    thumbnail: 'https://images.unsplash.com/photo-1571506165871-ee72a35f4294?w=600&q=80',
    duration: '21:40',
    views: '178K',
    category: 'techniques',
    tags: ['dessert', 'macarons', 'advanced'],
    youtubeId: 'example6',
    uploadDate: '1 month ago',
    relatedRecipes: [8]
  },
  {
    id: 7,
    title: 'Professional Cake Decoration',
    description: 'Competition-level cake decorating techniques and design principles',
    thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    duration: '35:18',
    views: '95K',
    category: 'recipes',
    tags: ['cake', 'decoration', 'advanced'],
    youtubeId: 'example7',
    uploadDate: '2 months ago',
    relatedRecipes: [9]
  },
  {
    id: 8,
    title: 'Knife Skills Masterclass',
    description: 'Essential knife techniques every professional chef needs to know',
    thumbnail: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=80',
    duration: '19:25',
    views: '134K',
    category: 'techniques',
    tags: ['fundamentals', 'knife skills', 'beginner'],
    youtubeId: 'example8',
    uploadDate: '2 months ago',
    relatedRecipes: []
  },
  {
    id: 9,
    title: 'Competition-Level Plating',
    description: 'Learn how judges evaluate plating at world championship level',
    thumbnail: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=600&q=80',
    duration: '26:10',
    views: '221K',
    category: 'techniques',
    tags: ['plating', 'presentation', 'advanced'],
    youtubeId: 'example9',
    uploadDate: '3 months ago',
    relatedRecipes: []
  }
];

const featuredVideo = videoData[0];

const categories = [
  { id: 'all', name: 'All Videos', icon: Play },
  { id: 'techniques', name: 'Techniques', icon: Award },
  { id: 'recipes', name: 'Recipes', icon: BookOpen },
  { id: 'trending', name: 'Trending', icon: TrendingUp }
];

const sampleRecipes = [
  { id: 5, title: 'Chocolate Tart', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
  { id: 6, title: 'Chocolate Truffles', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=80' }
];

const MediaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(true);

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setShowEmailCapture(false);
      }, 3000);
    }
  };

  const filteredVideos = selectedCategory === 'all' 
    ? videoData 
    : videoData.filter(v => v.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Tutorials</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn competition-level techniques through detailed video tutorials. 
          <span className="font-semibold text-gray-900"> Every recipe, every technique, explained step-by-step.</span>
        </p>
      </div>

      {/* Email Capture - ABOVE Featured Video */}
      {showEmailCapture && !isSubscribed && (
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 md:p-8 text-white shadow-xl relative">
          <button
            onClick={() => setShowEmailCapture(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Get the Full Recipe Collection</h2>
            <p className="text-orange-50 mb-6">
              Subscribe to get every video recipe as a downloadable PDF, plus exclusive techniques not shown on YouTube
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-300"
                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Get Free Recipes
              </button>
            </div>
            <p className="text-xs text-orange-100 mt-3">No spam. Unsubscribe anytime. Join 10,000+ subscribers.</p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isSubscribed && (
        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-green-900 mb-2">Welcome to the Community! 🎉</h3>
          <p className="text-green-700">Check your email for your first recipe PDF and exclusive content.</p>
        </div>
      )}

      {/* Featured Video - EMBEDDED */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Video Player */}
          <div className="lg:col-span-3 bg-black">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block mb-3 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold uppercase">
                Featured
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {featuredVideo.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredVideo.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredVideo.duration}
                </span>
                <span>•</span>
                <span>{featuredVideo.views} views</span>
              </div>
            </div>

            <a
              href={`https://youtube.com/watch?v=${featuredVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5" />
              Watch on YouTube & Subscribe
            </a>
          </div>
        </div>

        {/* Related Recipes Section */}
        {sampleRecipes.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <h3 className="text-lg font-bold mb-4">Related Recipes</h3>
            <div className="grid grid-cols-2 gap-4">
              {sampleRecipes.map((recipe) => (
                <button
                  key={recipe.id}
                  className="group flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-md transition-all"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="text-left flex-1">
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-orange-600 transition-colors">
                      {recipe.title}
                    </p>
                    <p className="text-xs text-gray-500">View Recipe →</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <a
            key={video.id}
            href={`https://youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                {video.duration}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.uploadDate}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {video.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* YouTube Subscribe CTA */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
        <Youtube className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Tutorial</h2>
        <p className="text-lg mb-6 text-red-50 max-w-2xl mx-auto">
          Join 50,000+ subscribers learning professional techniques every week. New videos every Monday & Thursday.
        </p>
        <a
          href="https://youtube.com/@yourchannelname?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Youtube className="w-6 h-6" />
          Subscribe on YouTube
        </a>
      </div>

      {/* Stats Bar */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
            <div className="text-gray-600 text-sm">Video Tutorials</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">50K+</div>
            <div className="text-gray-600 text-sm">Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">2M+</div>
            <div className="text-gray-600 text-sm">Total Views</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">Weekly</div>
            <div className="text-gray-600 text-sm">New Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;