import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { AppSidebar } from '../components/AppSidebar';
import { Timeline } from '../components/Timeline';
import { VersionCompare } from '../components/VersionCompare';
import { ActionButtons } from '../components/ActionButtons';

import { mockUserArticles } from '../data/mockData';
import { NewsVersion, UserArticle } from '../types/news';

const MyArticles = () => {
  const [currentView, setCurrentView] = useState('list');
  const [currentHistory, setCurrentHistory] = useState<NewsVersion[]>([]);
  const [selectedA, setSelectedA] = useState(0);
  const [selectedB, setSelectedB] = useState(0);
  const [likeStatus, setLikeStatus] = useState('');

  const showHistory = (customHistory: NewsVersion[]) => {
    if (customHistory.length === 0) return;
    
    setCurrentHistory(customHistory);
    setSelectedA(customHistory.length - 1);
    setSelectedB(Math.max(0, customHistory.length - 2));
    setCurrentView('history');
    setLikeStatus('');
  };

  const handleVersionSelect = (index: number) => {
    if (index === selectedA) return;
    
    if (selectedA === null || Math.abs(index - selectedA) === 1) {
      setSelectedB(selectedA);
      setSelectedA(index);
    } else {
      setSelectedA(index);
    }
  };

  // 변경 성격을 분석하는 함수
  function analyzeChangeSeverity(article: UserArticle): 'minor' | 'moderate' | 'major' {
    if (article.history.length < 2) return 'minor';
    
    const firstVersion = article.history[0];
    const lastVersion = article.history[article.history.length - 1];
    
    const titleChanged = firstVersion.title !== lastVersion.title;
    const bodyChanged = firstVersion.body !== lastVersion.body;
    
    // 제목 변경 비율 계산
    const titleWords = firstVersion.title.split(' ');
    const lastTitleWords = lastVersion.title.split(' ');
    const titleChangeRatio = Math.abs(titleWords.length - lastTitleWords.length) / titleWords.length;
    
    // 본문 변경 비율 계산
    const bodyWords = firstVersion.body.split(' ');
    const lastBodyWords = lastVersion.body.split(' ');
    const bodyChangeRatio = Math.abs(bodyWords.length - lastBodyWords.length) / bodyWords.length;
    
    // 변경 횟수도 고려
    const changeCount = article.history.length;
    
    // 중대한 변경: 제목이 크게 바뀌었거나, 본문이 20% 이상 변경되었거나, 변경 횟수가 많은 경우
    if (titleChangeRatio > 0.3 || bodyChangeRatio > 0.2 || changeCount > 4) {
      return 'major';
    }
    
    // 보통 변경: 제목이 바뀌었거나 본문이 10% 이상 변경된 경우
    if (titleChanged || bodyChangeRatio > 0.1 || changeCount > 2) {
      return 'moderate';
    }
    
    // 경미한 변경: 그 외의 경우 (주로 오타 수정 등)
    return 'minor';
  }

  // 변경 성격에 따른 배지 컴포넌트
  function ChangeSeverityBadge({ severity }: { severity: 'minor' | 'moderate' | 'major' }) {
    const config = {
      minor: {
        label: '경미한 수정',
        className: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200'
      },
      moderate: {
        label: '보통 수정',
        className: 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200'
      },
      major: {
        label: '중대한 수정',
        className: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
      }
    };

    const { label, className } = config[severity];

    return (
      <Badge 
        className={`text-xs font-medium px-2 py-1 ${className}`}
      >
        {label}
      </Badge>
    );
  }

  const renderArticlesList = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">내가 조회한 기사</h2>
      <div className="grid gap-4">
        {mockUserArticles.map((article, index) => {
          const changeSeverity = analyzeChangeSeverity(article);
          
          return (
            <div
              key={index}
              className="relative p-4 bg-cyan-50 border border-cyan-200 rounded-lg cursor-pointer hover:shadow-md transition-all duration-200 pr-24"
              onClick={() => showHistory(article.history)}
            >
              {/* 변경 성격 플래그 - 우측 상단 */}
              <div className="absolute top-3 right-3 z-10">
                <ChangeSeverityBadge severity={changeSeverity} />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                {article.title || article.url}
              </h3>
              {article.date && (
                <p className="text-sm text-gray-600 mb-2">{article.date}</p>
              )}
              <p className="text-sm text-gray-700">{article.desc || ''}</p>
              <div className="mt-3 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                {article.history.length}개 버전
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderHistorySection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setCurrentView('list')}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          기사 목록으로
        </Button>
      </div>

      <ActionButtons
        onLikeOrg={() => {}}
        onSubscribeReporter={() => {}}
        onLikeArticle={() => {}}
        onShowSummary={() => {}}
        onSaveImage={() => {}}
        likeStatus={likeStatus}
      />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Timeline
            history={currentHistory}
            selectedA={selectedA}
            selectedB={selectedB}
            onSelectVersion={handleVersionSelect}
          />
        </div>
        
        <div className="lg:col-span-2">
          {currentHistory.length > 0 && (
            <VersionCompare
              versionA={currentHistory[selectedA]}
              versionB={currentHistory[selectedB]}
            />
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'history':
        return renderHistorySection();
      default:
        return renderArticlesList();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar currentView="myArticles" onViewChange={setCurrentView} />
        
        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-900">
                  내가 조회한 기사
                </h1>
                <p className="text-sm text-gray-600">
                  이전에 조회한 기사들의 수정 이력을 확인하세요
                </p>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MyArticles;