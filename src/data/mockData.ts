import { NewsArticle, UserArticle } from '../types/news';

export const mockNewsData: NewsArticle[] = [
  {
    id: 1,
    url: 'https://newstapa.org/article/20250627-education-seminar',
    title: '대한교조, 리박스쿨, 뉴라이트의 극우 역사 세미나',
    date: '2025-06-27',
    desc: '대한교조가 주최한 역사 세미나에서 논란이 되고 있는 내용들이 다뤄졌습니다.',
    source: 'newstapa.org',
    reporter: '홍길동',
    history: [
      {
        timestamp: '2025-06-27 14:30',
        title: '대한교조, 리박스쿨, 뉴라이트의 극우 역사 세미나',
        body: '대한교조가 주최한 역사 세미나에서 논란이 되고 있는 내용들이 다뤄졌습니다. 이번 세미나는 역사 교육의 방향성에 대한 중요한 논의의 장이 되었습니다. 특히 일제강점기와 한국전쟁에 대한 새로운 해석이 제시되어 큰 파장을 일으키고 있습니다. 교육부는 이에 대한 공식 입장을 발표할 예정입니다.',
        changeType: 'both'
      },
      {
        timestamp: '2025-06-27 12:15',
        title: '대한교조, 리박스쿨과 함께하는 역사 세미나 개최',
        body: '대한교조가 주최한 역사 세미나가 개최되었습니다. 이번 세미나에서는 다양한 역사적 관점이 논의되었습니다. 교육계에서는 이러한 접근이 필요하다는 의견이 제시되었습니다.',
        changeType: 'title'
      },
      {
        timestamp: '2025-06-27 10:00',
        title: '대한교조 역사 세미나 개최 예정',
        body: '대한교조가 역사 교육에 관한 세미나를 개최할 예정입니다.',
        changeType: 'content'
      }
    ]
  },
  {
    id: 2,
    url: 'https://hankyoreh.com/article/20250626-climate-policy',
    title: '정부, 탄소중립 정책 전면 재검토 발표',
    date: '2025-06-26',
    desc: '정부가 기존 탄소중립 정책을 전면 재검토하겠다고 발표했습니다.',
    source: 'hankyoreh.com',
    reporter: '김기자',
    history: [
      {
        timestamp: '2025-06-26 18:45',
        title: '정부, 탄소중립 정책 전면 재검토 발표',
        body: '정부가 기존 탄소중립 정책을 전면 재검토하겠다고 발표했습니다. 이는 경제적 부담과 실현 가능성을 고려한 결정으로 보입니다. 환경단체들은 강력히 반발하고 있으며, 국제사회의 우려도 커지고 있습니다.',
        changeType: 'both'
      },
      {
        timestamp: '2025-06-26 16:20',
        title: '정부, 탄소중립 정책 일부 수정 검토',
        body: '정부가 기존 탄소중립 정책의 일부 수정을 검토하고 있다고 발표했습니다. 경제적 부담을 고려한 조치로 보입니다.',
        changeType: 'title'
      }
    ]
  },
  {
    id: 3,
    url: 'https://ytn.co.kr/article/20250625-housing-crisis',
    title: '서울 아파트 평균 가격 10억원 돌파',
    date: '2025-06-25',
    desc: '서울 지역 아파트 평균 가격이 처음으로 10억원을 넘어섰습니다.',
    source: 'ytn.co.kr',
    reporter: '이기자',
    history: [
      {
        timestamp: '2025-06-25 20:15',
        title: '서울 아파트 평균 가격 10억원 돌파',
        body: '서울 지역 아파트 평균 가격이 처음으로 10억원을 넘어섰습니다. 부동산 전문가들은 이러한 상승세가 당분간 지속될 것으로 전망하고 있습니다.',
        changeType: 'content'
      },
      {
        timestamp: '2025-06-25 18:30',
        title: '서울 아파트 평균 가격 10억 돌파',
        body: '서울 지역 아파트 평균 가격이 10억원에 근접했습니다. 부동산 시장의 과열 우려가 커지고 있습니다.',
        changeType: 'title'
      }
    ]
  },
  {
    id: 4,
    url: 'https://chosun.com/article/20250624-tech-news',
    title: '삼성전자, 새로운 AI 칩셋 개발 성공',
    date: '2025-06-24',
    desc: '삼성전자가 차세대 AI 칩셋 개발에 성공했다고 발표했습니다.',
    source: 'chosun.com',
    reporter: '박기자',
    history: [
      {
        timestamp: '2025-06-24 16:00',
        title: '삼성전자, 새로운 AI 칩셋 개발 성공',
        body: '삼성전자가 차세대 AI 칩셋 개발에 성공했다고 발표했습니다. 이 칩셋은 기존 대비 성능이 30% 향상되었습니다.',
        changeType: 'content'
      }
    ]
  },
  {
    id: 5,
    url: 'https://donga.com/article/20250623-sports-news',
    title: '한국 축구대표팀, 월드컵 예선 승리',
    date: '2025-06-23',
    desc: '한국 축구대표팀이 월드컵 예선에서 승리를 거두었습니다.',
    source: 'donga.com',
    reporter: '최기자',
    history: [
      {
        timestamp: '2025-06-23 22:30',
        title: '한국 축구대표팀, 월드컵 예선 승리',
        body: '한국 축구대표팀이 월드컵 예선에서 2-1로 승리를 거두었습니다. 손흥민의 결승골이 승부를 가렸습니다.',
        changeType: 'content'
      }
    ]
  },
  {
    id: 6,
    url: 'https://joongang.co.kr/article/20250622-economy-news',
    title: '한국은행, 기준금리 동결 결정',
    date: '2025-06-22',
    desc: '한국은행이 기준금리를 현 수준에서 동결하기로 결정했습니다.',
    source: 'joongang.co.kr',
    reporter: '정기자',
    history: [
      {
        timestamp: '2025-06-22 14:00',
        title: '한국은행, 기준금리 동결 결정',
        body: '한국은행이 기준금리를 현 수준에서 동결하기로 결정했습니다. 인플레이션 압력과 경제 성장률을 종합적으로 고려한 결정입니다.',
        changeType: 'content'
      }
    ]
  },
  // 경미한 수정 케이스 추가
  {
    id: 7,
    url: 'https://sbs.co.kr/article/20250621-weather-news',
    title: '내일 전국 대부분 지역 맑음',
    date: '2025-06-21',
    desc: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다.',
    source: 'sbs.co.kr',
    reporter: '날씨기자',
    history: [
      {
        timestamp: '2025-06-21 18:00',
        title: '내일 전국 대부분 지역 맑음',
        body: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다. 기온은 평년과 비슷한 수준을 보일 것으로 전망됩니다.',
        changeType: 'content'
      },
      {
        timestamp: '2025-06-21 17:45',
        title: '내일 전국 대부분지역 맑음',
        body: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다. 기온은 평년과 비슷한 수준을 보일 것으로 전망됩니다.',
        changeType: 'title'
      }
    ]
  },
  // 또 다른 경미한 수정 케이스
  {
    id: 8,
    url: 'https://mbc.co.kr/article/20250620-culture-news',
    title: '부산국제영화제 개막식 성황리 개최',
    date: '2025-06-20',
    desc: '부산국제영화제 개막식이 성황리에 개최되었습니다.',
    source: 'mbc.co.kr',
    reporter: '문화기자',
    history: [
      {
        timestamp: '2025-06-20 21:30',
        title: '부산국제영화제 개막식 성황리 개최',
        body: '부산국제영화제 개막식이 성황리에 개최되었습니다. 국내외 유명 배우들이 참석하여 화제를 모았습니다.',
        changeType: 'content'
      },
      {
        timestamp: '2025-06-20 21:15',
        title: '부산국제영화제 개막식 성황리에 개최',
        body: '부산국제영화제 개막식이 성황리에 개최되었습니다. 국내외 유명 배우들이 참석하여 화제를 모았습니다.',
        changeType: 'title'
      }
    ]
  }
];

export const mockUserArticles: UserArticle[] = [
  {
    url: 'https://newstapa.org/article/20250627-education-seminar',
    title: '대한교조, 리박스쿨, 뉴라이트의 극우 역사 세미나',
    date: '2025-06-27',
    desc: '대한교조가 주최한 역사 세미나에서 논란이 되고 있는 내용들이 다뤄졌습니다.',
    history: [
      {
        timestamp: '2025-06-27 14:30',
        title: '대한교조, 리박스쿨, 뉴라이트의 극우 역사 세미나',
        body: '대한교조가 주최한 역사 세미나에서 논란이 되고 있는 내용들이 다뤄졌습니다. 이번 세미나는 역사 교육의 방향성에 대한 중요한 논의의 장이 되었습니다. 특히 일제강점기와 한국전쟁에 대한 새로운 해석이 제시되어 큰 파장을 일으키고 있습니다.',
        changeType: 'both'
      },
      {
        timestamp: '2025-06-27 12:15',
        title: '대한교조, 리박스쿨과 함께하는 역사 세미나 개최',
        body: '대한교조가 주최한 역사 세미나가 개최되었습니다. 이번 세미나에서는 다양한 역사적 관점이 논의되었습니다. 교육계에서는 이러한 접근이 필요하다는 의견이 제시되었습니다.',
        changeType: 'title'
      },
      {
        timestamp: '2025-06-27 10:00',
        title: '대한교조 역사 세미나 개최 예정',
        body: '대한교조가 역사 교육에 관한 세미나를 개최할 예정입니다.',
        changeType: 'content'
      }
    ]
  },
  {
    url: 'https://hankyoreh.com/article/20250626-climate-policy',
    title: '정부, 탄소중립 정책 전면 재검토 발표',
    date: '2025-06-26',
    desc: '정부가 기존 탄소중립 정책을 전면 재검토하겠다고 발표했습니다.',
    history: [
      {
        timestamp: '2025-06-26 18:45',
        title: '정부, 탄소중립 정책 전면 재검토 발표',
        body: '정부가 기존 탄소중립 정책을 전면 재검토하겠다고 발표했습니다. 이는 경제적 부담과 실현 가능성을 고려한 결정으로 보입니다.',
        changeType: 'both'
      },
      {
        timestamp: '2025-06-26 16:20',
        title: '정부, 탄소중립 정책 일부 조정 검토',
        body: '정부가 기존 탄소중립 정책의 일부 조정을 검토하고 있다고 발표했습니다.',
        changeType: 'title'
      }
    ]
  },
  {
    url: 'https://ytn.co.kr/article/20250625-housing-crisis',
    title: '서울 아파트 평균 가격 10억원 돌파',
    date: '2025-06-25',
    desc: '서울 지역 아파트 평균 가격이 처음으로 10억원을 넘어섰습니다.',
    history: [
      {
        timestamp: '2025-06-25 20:15',
        title: '서울 아파트 평균 가격 10억원 돌파',
        body: '서울 지역 아파트 평균 가격이 처음으로 10억원을 넘어섰습니다.',
        changeType: 'content'
      }
    ]
  },
  // 경미한 수정 케이스 추가
  {
    url: 'https://sbs.co.kr/article/20250621-weather-news',
    title: '내일 전국 대부분 지역 맑음',
    date: '2025-06-21',
    desc: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다.',
    history: [
      {
        timestamp: '2025-06-21 18:00',
        title: '내일 전국 대부분 지역 맑음',
        body: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다. 기온은 평년과 비슷한 수준을 보일 것으로 전망됩니다.',
        changeType: 'content'
      },
      {
        timestamp: '2025-06-21 17:45',
        title: '내일 전국 대부분지역 맑음',
        body: '내일은 전국 대부분 지역에서 맑은 날씨가 예상됩니다. 기온은 평년과 비슷한 수준을 보일 것으로 전망됩니다.',
        changeType: 'title'
      }
    ]
  },
  {
    url: 'https://example.com/user-input-article-1',
    title: '사용자 입력 기사 1',
    date: '2025-06-20',
    desc: '사용자가 직접 입력한 URL로 조회된 기사입니다.',
    history: [
      {
        timestamp: '2025-06-20 15:30',
        title: '사용자 입력 기사 1 (최신 버전)',
        body: '이 기사는 사용자가 직접 입력한 URL로 조회된 기사입니다. 최신 버전입니다.',
        changeType: 'both'
      },
      {
        timestamp: '2025-06-20 14:00',
        title: '사용자 입력 기사 1',
        body: '이 기사는 사용자가 직접 입력한 URL로 조회된 기사입니다.',
        changeType: 'content'
      }
    ]
  },
  {
    url: 'https://example.com/user-input-article-2',
    title: '사용자 입력 기사 2',
    date: '2025-06-19',
    desc: '또 다른 사용자 입력 기사입니다.',
    history: [
      {
        timestamp: '2025-06-19 16:45',
        title: '사용자 입력 기사 2',
        body: '또 다른 사용자 입력 기사입니다.',
        changeType: 'content'
      }
    ]
  }
];