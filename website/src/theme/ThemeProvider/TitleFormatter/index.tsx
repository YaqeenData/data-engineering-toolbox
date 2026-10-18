
import React, {type ReactNode} from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';

export default function DatumTitleFormatter({
    children,
    }: {
    children: ReactNode;
    }): ReactNode {
    return (
        <TitleFormatterProvider
        formatter={({title, siteTitle, titleDelimiter}) => {
            const pageTitle = title.trim();

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
