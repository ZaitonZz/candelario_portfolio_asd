// components/CustomCardComponent.tsx
import React from 'react';
import { Card as CardType } from '../types/api/card';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import DynamicComponent from './dynamic-component';

interface CustomCardComponentProps {
  card: CardType | null;
}

const CustomCardComponent: React.FC<CustomCardComponentProps> = ({ card }) => {
  if (!card) {
    return null; // or return some placeholder UI if you prefer
  }

  return (
    <Card className="h-80 md:h-72 xl:h-64">
      <CardHeader className="pb-4 flex-row items-center gap-4">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
          <DynamicComponent iconName={card.card_icon} className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle>{card.card_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {card.card_desc}
          <div className="pt-2">
            <Link href={card.card_link}>
              <FaGithub className="size-5 lg:size-8 fill-primary" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCardComponent;
