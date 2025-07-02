import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

import { AppSidebar } from '../components/AppSidebar';
import { SubscriptionData, UserArticle } from '../types/news';

const Likes = () => {
  // 실제 서비스에서는 전역 상태나 API에서 가져올 데이터
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    subscribedOrgs: ['newstapa.org', 'hankyoreh.com'],
    subscribedReporters: ['홍길동', '김기자'],
    likedArticles: [
      {
        url: 'https://newstapa.org/article/20250627-education-seminar',
        title: '대한교조, 리박스쿨, 뉴라이트의 극우 역사 세미나',
        date: '2025-06-27',
        history: []
      }
    ]
  });

  const renderLikesSection = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">구독 관리</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🔔 구독한 언론사</h3>
          {subscriptionData.subscribedOrgs.length > 0 ? (
            <div className="grid gap-3">
              {subscriptionData.subscribedOrgs.map(org => (
                <div key={org} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">{org}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSubscriptionData(prev => ({
                        ...prev,
                        subscribedOrgs: prev.subscribedOrgs.filter(o => o !== org)
                      }));
                    }}
                  >
                    구독 취소
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">구독한 언론사가 없습니다.</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🧑‍💼 구독한 기자</h3>
          {subscriptionData.subscribedReporters.length > 0 ? (
            <div className="grid gap-3">
              {subscriptionData.subscribedReporters.map(reporter => (
                <div key={reporter} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-900">{reporter}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSubscriptionData(prev => ({
                        ...prev,
                        subscribedReporters: prev.subscribedReporters.filter(r => r !== reporter)
                      }));
                    }}
                  >
                    구독 취소
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">구독한 기자가 없습니다.</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">❤️ 좋아요 한 기사</h3>
          {subscriptionData.likedArticles.length > 0 ? (
            <div className="grid gap-3">
              {subscriptionData.likedArticles.map((article, index) => (
                <div key={index} className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{article.date}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSubscriptionData(prev => ({
                        ...prev,
                        likedArticles: prev.likedArticles.filter((_, i) => i !== index)
                      }));
                    }}
                  >
                    좋아요 취소
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">좋아요 한 기사가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );

  // 빈 함수로 onViewChange를 무시
  const handleViewChange = () => {
    // Likes 페이지에서는 사이드바의 뷰 변경을 무시
    // 실제 네비게이션은 AppSidebar 내부에서 처리됨
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar currentView="likes" onViewChange={handleViewChange} />
        
        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-900">
                  좋아요/구독 관리
                </h1>
                <p className="text-sm text-gray-600">
                  구독한 언론사, 기자 및 좋아요한 기사를 관리하세요
                </p>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              {renderLikesSection()}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Likes;