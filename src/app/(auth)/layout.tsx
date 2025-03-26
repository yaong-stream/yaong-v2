import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-md space-y-8">
        {/* 로고 */}
        <div className="flex flex-col items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-primary hover:text-primary/90"
          >
            야옹 스트림
          </Link>
          <h2 className="mt-2 text-center text-sm text-muted-foreground">
            즐거운 스트리밍과 함께하세요
          </h2>
        </div>

        {/* 컨텐츠 */}
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          {children}
        </div>
      </div>
    </div>
  );
} 