import Link from 'next/link'

export default function notFound() {
  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="text-center px-6 py-12 max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 mb-8">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
          >
            ホームに戻る
          </Link>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>問題が続く場合は、サイト管理者にお問い合わせください。</p>
        </div>
      </div>
    </div>
  )
}

// メタデータをエクスポート（オプション）
export const metadata = {
  title: '404 - ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。',
}