// app/result/[type]/page.tsx
import Result from '@/app/result/page';

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

export default function ResultPage({ params }: { params: { type: string } }) {
    return (
        <Result type={params.type} />
    );
}
