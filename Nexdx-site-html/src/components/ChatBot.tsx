import ChatInterface from '@/components/ChatInterface';

export default function About() {
	return (
		<div className="max-w-6xl mx-auto mb-12 sm:mb-20 md:mb-32 lg:mb-50 px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 text-slate-700 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
              Yapay Zeka Destekli Danışmanlık
            </div>
            <h1 className="text-lg xs:text-l sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8 leading-tight animate-fade-in-up animation-delay-200 px-2 sm:px-4 break-words">
              <span className="block">Dijital</span>
              <span className="block">Dönüşümünüzü</span>
              <span className="block text-slate-600 animate-fade-in-up animation-delay-400">
                Hızlandırın
              </span>
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-12 animate-fade-in-up animation-delay-600 px-2 sm:px-4 lg:px-0">
              Kurumsal dijital dönüşüm süreçlerinizde yapay zeka destekli chatbot teknolojisi ile 
              firmanızın dijital olgunluk seviyesini değerlendirin, sektör bazlı stratejik öneriler alın.
            </p>
          </div>
          
          {/* Chat Section */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-1000 mx-1 xs:mx-2 sm:mx-4 lg:mx-0">
            <ChatInterface />
          </div>
        </div>
	);
}