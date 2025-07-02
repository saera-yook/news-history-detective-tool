import { ExternalLink, Calendar, User } from 'lucide-react';
import { NewsArticle } from '../types/news';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface NewsCardProps {
  article: NewsArticle;
  onClick: () => void;
}

// 변경 성격을 분석하는 함수
function analyzeChangeSeverity(article: NewsArticle): 'minor' | 'moderate' | 'major' {
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
      variant: 'default' as const,
      className: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200'
    },
    moderate: {
      label: '보통 수정',
      variant: 'secondary' as const,
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200'
    },
    major: {
      label: '중대한 수정',
      variant: 'destructive' as const,
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

export function NewsCard({ article, onClick }: NewsCardProps) {
  const changeSeverity = analyzeChangeSeverity(article);

  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-l-4 border-l-newstapa-blue bg-gradient-to-r from-blue-50/50 to-white relative"
      onClick={onClick}
    >
      {/* 변경 성격 플래그 - 우측 상단 */}
      <div className="absolute top-3 right-3 z-10">
        <ChangeSeverityBadge severity={changeSeverity} />
      </div>

      <CardHeader className="pb-3 pr-24">
        <h3 className="font-semibold text-lg text-gray-900 leading-tight line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{article.date}</span>
          </div>
          {article.source && (
            <div className="flex items-center gap-1">
              <span className="text-newstapa-blue font-medium">{article.source}</span>
            </div>
          )}
          {article.reporter && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{article.reporter}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-3">
          {article.desc}
        </p>
        <div className="flex items-center justify-between">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-newstapa-blue hover:text-newstapa-blue-light text-sm font-medium transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3 w-3" />
            원문 보기
          </a>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {article.history.length}개 버전
          </span>
        </div>
      </CardContent>
    </Card>
  );
}