import React from 'react';
import ReactDOM from "react-dom/client";
import { Award, Users, BookOpen, Briefcase, GraduationCap, MessageSquare, Trophy, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  const credentials = [
    {
      icon: Award,
      title: 'World Skills Judge',
      description: 'Official judge for World Skills International competitions, evaluating the world\'s top young culinary talent'
    },
    {
      icon: Trophy,
      title: 'Coupe du Monde Judge',
      description: 'Judge at Coupe du Monde de la Boulangerie, the Olympics of baking'
    },
    {
      icon: Users,
      title: 'Baking NZ President',
      description: '10 years on the Baking New Zealand Board, including 5 years as president'
    },
    {
      icon: GraduationCap,
      title: 'Industry Educator',
      description: 'University lecturer, polytechnic demonstrations, and international conference speaker'
    },
    {
      icon: Briefcase,
      title: 'Business Advisor',
      description: 'International bakery advisor and mentor to dozens of successful F&B businesses'
    },
    {
      icon: BookOpen,
      title: 'Industry Author',
      description: '10+ years as a regular columnist with a professional baking and cooking column'
    }
  ];

  const experience = [
    {
      category: 'Competition Judging',
      items: [
        'World Skills International Judge',
        'Coupe du Monde de la Boulangerie Judge',
        'Multiple national and international competitions'
      ]
    },
    {
      category: 'Industry Leadership',
      items: [
        'Baking New Zealand Board (10 years, 5 as president)',
        'National Industry Advisory Group (NIAG) - Hanga Aro Rau',
        'NIAG for multiple polytechnics',
        'Competenz Moderator & Assessor',
        'Multiple qualification review panels'
      ]
    },
    {
      category: 'Education & Training',
      items: [
        'University guest lecturer',
        'Polytechnic demonstrations',
        'International conference speaker',
        '20+ years of training apprentices',
        'Professional development workshops'
      ]
    },
    {
      category: 'Professional Experience',
      items: [
        'Qualified Baker and Chef',
        '20+ years of bakery operation',
        'International bakery advisor',
        'Business mentor for F&B businesses - both startups and well-established',
        '10+ years as industry columnist'
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Competition Standards',
      description: 'Every technique taught meets world championship criteria. No shortcuts, no compromises.'
    },
    {
      icon: Heart,
      title: 'Real-World Practicality',
      description: 'Techniques refined through 20+ years of actual bakery operation, not just theory.'
    },
    {
      icon: MessageSquare,
      title: 'Industry Connection',
      description: 'Direct access to conversations with international F&B icons and industry leaders.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section with Image */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn From a Judge Who Sets <span className="text-orange-600">Global Standards</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            When you learn from someone who judges world championships, you're not just getting recipes—you're learning the exact standards that separate good from exceptional.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With over 30 years of professional experience, leadership on industry boards, and the privilege of evaluating the world's best at competitions like World Skills and Coupe du Monde, I bring both competition precision and real-world practicality to every lesson.
          </p>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/coupe-judging.jpg"
              alt="Judging at international competition"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-semibold mb-2">Coupe du Monde de la Boulangerie (The world cup of baking) - Paris, France</p>
              <p className="text-xs text-gray-200">Evaluating techniques and product quality in the world's premiere high-performance baking competition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Grid */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Credentials & Recognition</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cred.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cred.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Experience */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-orange-600">{section.category}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy/Values */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Teaching Philosophy</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
          Three principles guide everything I teach
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Photo Gallery - Competition Moments */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Competition Moments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/images/KazanCeremony.jpg"
              alt="Judging at World Skills"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-sm">World Skills International</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/images/jury-panel.jpg"
              alt="Coupe du Monde judging"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-sm">Coupe du Monde de la Boulangerie</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/images/whanauBO.jpg"
              alt="International conference"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
              <p className="text-white font-semibold text-sm">Media Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Story */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Journey</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-200">
            <p>
              My journey in food and beverage didn't start at world championships—it started with a simple passion for creating something exceptional with my hands. Over 20 years, that passion evolved from running a successful bakery to training hundreds of apprentices, to being entrusted with judging the world's most prestigious culinary competitions.
            </p>
            <p>
              As president of Baking New Zealand for 5 years and serving on numerous industry advisory boards, I've had a front-row seat to the evolution of our industry. I've seen what separates businesses that thrive from those that struggle. I've mentored dozens of successful F&B operations and consulted internationally.
            </p>
            <p>
              But what I'm most proud of isn't the titles or the boards I've served on—it's the <span className="font-semibold text-white">200+ apprentices who've gone on to build successful careers</span>, some of whom now compete at the same world championships where I judge.
            </p>
            <p>
              <span className="font-semibold text-white">The F&B Apprentice</span> exists to share everything I've learned: the competition-level techniques, the real-world business wisdom, and the industry connections that took me decades to build. Whether you're a student, a professional looking to level up, or an aspiring business owner, you'll find the same standards here that I apply when judging at World Skills.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
            <div className="text-gray-600">Apprentices Trained</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-gray-600">World Championships</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">10</div>
            <div className="text-gray-600">Years Industry Leadership</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn Competition-Level Techniques?</h2>
        <p className="text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
          Join thousands of students learning from a judge who sets global standards
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Browse Recipes
          </button>
          <button className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white hover:bg-orange-800 transition-all shadow-lg">
            Watch Tutorials
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;