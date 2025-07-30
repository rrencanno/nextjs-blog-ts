import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from "microcms-js-sdk";

// ブログ記事の型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

// APIキーとサービスドメインを.env.localから取得
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error("MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are required.");
}

// microCMSクライアントの初期化
export const client = createClient({
  serviceDomain,
  apiKey,
});

// ブログ一覧を取得する関数
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<{ contents: Blog[] }>({
    endpoint: "blogs", // microCMSで設定したエンドポイント名
    queries,
  });
};

// IDを指定して特定のブログを取得する関数
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.get<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};