
import React from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';

export default function Root({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <TitleFormatterProvider
      formatter={({title, siteTitle, titleDelimiter}) => {
        const pageTitle = title?.trim();

        if (!pageTitle || pageTitle === siteTitle) {
          return siteTitle;
        }

        return `${siteTitle} ${titleDelimiter} ${pageTitle}`;
      }}
    >
      {children}
    </TitleFormatterProvider>
  );
}
