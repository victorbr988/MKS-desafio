import { LoadingItem } from './CardSkeleton';
import { SkeletonGroup } from '../styles/Skeleton/itemsSkeleton';

export const LoadingPanel: React.FC = () => {
  return (
    <SkeletonGroup>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </SkeletonGroup>
    
  );
};