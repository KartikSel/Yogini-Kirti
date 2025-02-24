import React, { useState } from 'react';
import { Calendar, Tag, ChevronRight, Plus, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

const Blog = () => {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Power of Morning Yoga Practice',
      content: "Starting your day with yoga can transform your entire day. In my years of teaching, I have observed how morning practice sets a positive tone for the day ahead. The early morning hours, known as Brahma Muhurta, are considered the most conducive for yoga and meditation. The air is fresh, the mind is clear, and the world is peaceful...",
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      date: '2024-03-15',
      category: 'Yoga Practice'
    },
    {
      id: '2',
      title: 'Ayurvedic Wisdom for Modern Life',
      content: "Integrating Ayurvedic principles into our modern lifestyle does not have to be complicated. Through my journey of studying and teaching Ayurveda, I have discovered simple yet effective ways to maintain balance in our fast-paced world...",
      image: 'https://images.unsplash.com/photo-1611647832580-377268dba7cb?auto=format&fit=crop&q=80',
      date: '2024-03-10',
      category: 'Ayurveda'
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: '',
    category: ''
  });

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      date: new Date().toISOString().split('T')[0],
      category: newPost.category
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', image: '', category: '' });
    setIsAddingPost(false);
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Blog & Insights</h2>
            <p className="mt-4 text-xl text-gray-600">
              Sharing wisdom from my journey in yoga and wellness
            </p>
          </div>
          <button
            onClick={() => setIsAddingPost(true)}
            className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Post
          </button>
        </div>

        {isAddingPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Add New Blog Post</h3>
                <button
                  onClick={() => setIsAddingPost(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleAddPost} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    required
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    required
                    value={newPost.image}
                    onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    required
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  Publish Post
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <Tag className="h-4 w-4 ml-4 mr-2" />
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <button className="flex items-center text-teal-600 hover:text-teal-700 font-medium">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;