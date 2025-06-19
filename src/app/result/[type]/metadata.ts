// app/result/[type]/metadata.ts
import { Metadata } from 'next';
import { resultTypes } from '@/lib/resultTypes';

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
                    url: data.ogThumbnailImage,
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
