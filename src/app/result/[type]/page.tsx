// app/result/[type]/page.tsx
import Result from '@/app/result/page';
import type { Metadata } from 'next';
import { resultTypes } from '@/lib/resultTypes';

export const dynamicParams = false;

export async function generateStaticParams() {
    return [
        // 필요한 모든 경로 나열
        { type: '0000' },
        { type: '0001' },
        { type: '0010' },
        { type: '0011' },
        { type: '0100' },
        { type: '0101' },
        { type: '0110' },
        { type: '0111' },
        { type: '1000' },
        { type: '1001' },
        { type: '1010' },
        { type: '1011' },
        { type: '1100' },
        { type: '1101' },
        { type: '1110' },
        { type: '1111' }
    ];
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
    const type = params.type;
    const data = resultTypes[type];

    return type !== '' ? {
        title: "나는 어떤 동물 라이더일까?",
        description: "라이더 유형 검사",
        openGraph: {
            title: "나는 어떤 동물 라이더일까?",
            description: "라이더 유형 검사",
            url: `https://riderlybiz.github.io/riderly-mbti/result/${params.type}`,
            siteName: "Riderly",
            images: [
                {
                    url: `https://riderlybiz.github.io${data.ogThumbnailImage}`,
                    width: 1200,
                    height: 630,
                    alt: "Riderly OG Image",
                },
            ],
            type: "website",
        }
    } : {
        title: "나는 어떤 동물 라이더일까?",
        description: "라이더 유형 검사 powered by Riderly",
        openGraph: {
            title: "나는 어떤 동물 라이더일까?",
            description: "라이더 유형 검사 powered by Riderly",
            url: "https://riderlybiz.github.io/riderly-mbti/",
            siteName: "Riderly",
            images: [
                {
                    url: "https://riderlybiz.github.io/riderly-mbti/images/open_graph_thumnail.png",
                    width: 1200,
                    height: 600,
                    alt: "Riderly OG Image",
                },
            ],
            type: "website",
        }
    };
}

export default function ResultPage({ params }: { params: { type: string } }) {
    return (
        <Result type={params.type} />
    );
}
