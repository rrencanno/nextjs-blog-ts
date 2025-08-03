'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo="rrencanno/nextjs-blog-ts"
        repoId="R_kgDOPVnYuw"           // ★giscusサイトで取得
        category="Announcements"
        categoryId="DIC_kwDOPVnYu84CtmZD"   // ★giscusサイトで取得
        mapping="pathname"
        term="Welcome to giscus!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ja"
        loading="lazy"
      />
    </div>
  );
}