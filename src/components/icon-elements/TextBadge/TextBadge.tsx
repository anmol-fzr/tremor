import React from 'react';

import { BadgeProportions } from '@common/component-utils';
import BadgeWrapper from '@common/BadgeWrapper';

const badgeProportionsAttributes: {[char: string]: BadgeProportions} = {
    xs: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2.5',
        paddingY: 'py-0.5',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-1',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3.5',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

export interface TextBadgeProps {
    text: string,
    badgeSize?: string
}

const TextBadge = ({
    text,
    badgeSize = 'sm'
}: TextBadgeProps) => {
    return(
        <BadgeWrapper
            {...badgeProportionsAttributes[badgeSize]}
            bgColor = {'bg-gray-100'}
            textColor = {'text-gray-800'}
        >
            { text }
        </BadgeWrapper>
    );
};

export default TextBadge;